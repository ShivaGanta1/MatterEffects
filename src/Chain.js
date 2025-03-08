import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const ChainsEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Module aliases
    const { Engine, Render, Runner, World, Bodies, Constraint, Composite, Mouse, MouseConstraint } =
      Matter;

    // Create an engine
    const engine = Engine.create();
    const { world } = engine;

    // Create a renderer
    const canvas = canvasRef.current;
    const render = Render.create({
      canvas,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false, // Set to false for better performance
        background: "#f0f0f0",
      },
    });

    // Add ground
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 50,
      window.innerWidth,
      100,
      { isStatic: true }
    );
    World.add(world, ground);

    // Create chain links
    const chainLength = 10; // Number of chain links
    const linkSize = 20; // Size of each link
    const chainLinks = [];
    const constraints = [];

    for (let i = 0; i < chainLength; i++) {
      const x = window.innerWidth / 2;
      const y = 100 + i * (linkSize * 2); // Vertical spacing between links

      // Create a circular body for each link
      const link = Bodies.circle(x, y, linkSize, { restitution: 0.5 });
      chainLinks.push(link);

      // Connect the current link to the previous one
      if (i > 0) {
        const prevLink = chainLinks[i - 1];
        const constraint = Constraint.create({
          bodyA: prevLink,
          bodyB: link,
          length: linkSize * 2, // Distance between links
          stiffness: 0.9, // Stiffness of the connection
        });
        constraints.push(constraint);
      }
    }

    // Add all chain links and constraints to the world
    World.add(world, [...chainLinks, ...constraints]);

    // Anchor the first link to a static point
    const anchor = Constraint.create({
      pointA: { x: window.innerWidth / 2, y: 50 },
      bodyB: chainLinks[0],
      length: 0,
      stiffness: 1,
    });
    World.add(world, anchor);

    // Add mouse control
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2, // Adjust stiffness for smoother dragging
        render: {
          visible: false, // Hide the constraint line
        },
      },
    });

    World.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Run the renderer
    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Cleanup on unmount
    return () => {
      Render.stop(render);
      World.clear(world, false);
      Engine.clear(engine);
      runner.enabled = false;
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ChainsEffect;