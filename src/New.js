import React, { useEffect } from "react";
import Matter from "matter-js";

const BouncingBalls = () => {
  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Composite, Events, Mouse, MouseConstraint } =
      Matter;

    // Create the engine and world
    const engine = Engine.create();
    const { world } = engine;

    // Create the renderer
    const render = Render.create({
      element: document.getElementById("physics-container"),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight * 0.7,
        wireframes: false, 
        background: "#1a1a2e", 
      },
    });

    // Add mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2, // Soft constraint for dragging
        render: {
          visible: false, // Hide the constraint line
        },
      },
    });
    World.add(world, mouseConstraint);

    // Add static boundaries (ground, walls)
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight * 0.7 - 10,
      window.innerWidth,
      20,
      { isStatic: true, render: { fillStyle: "#333" } }
    );

    const leftWall = Bodies.rectangle(
      10,
      (window.innerHeight * 0.7) / 2,
      20,
      window.innerHeight * 0.7,
      { isStatic: true, render: { fillStyle: "#333" } }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth - 10,
      (window.innerHeight * 0.7) / 2,
      20,
      window.innerHeight * 0.7,
      { isStatic: true, render: { fillStyle: "#333" } }
    );

    World.add(world, [ground, leftWall, rightWall]);

    // Function to create random bouncing balls
    const createBalls = () => {
      const balls = [];
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) * 0.5;
        const radius = Math.random() * 20 + 10; // Random radius between 10 and 30
        const ball = Bodies.circle(x, y, radius, {
          restitution: 0.8, // Bounciness
          friction: 0.01, // Low friction
          render: {
            fillStyle: getRandomColor(), // Random initial color
          },
        });
        balls.push(ball);
      }
      World.add(world, balls);
    };

    // Helper function to generate random colors
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Add collision event to change colors
    Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const bodyA = pair.bodyA;
        const bodyB = pair.bodyB;

        // Change colors of colliding bodies
        if (bodyA.render && bodyB.render) {
          bodyA.render.fillStyle = getRandomColor();
          bodyB.render.fillStyle = getRandomColor();
        }
      });
    });

    
    createBalls();

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div style={{ margin: 0 }}>
      <div
        id="physics-container"
        style={{
          width: "100%",
          height: "70vh",
        //   margin: "0 auto",
        }}
      ></div>
    </div>
  );
};

export default BouncingBalls;