import React, { useEffect } from "react";
import Matter from "matter-js";

const TimeScale = () => {
  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Composite, Mouse, MouseConstraint } = Matter;

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
        background: "#6a0dad",
      },
    });

    // Add mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    World.add(world, mouseConstraint);

    // Add static boundaries (ground, walls, ceiling)
    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      (window.innerHeight * 0.7) - 10,
      window.innerWidth,
      20,
      { isStatic: true, render: { fillStyle: "#6a0dad", strokeStyle: "transparent" } }
    );

    const leftWall = Bodies.rectangle(
      10,
      (window.innerHeight * 0.7) / 2,
      20,
      window.innerHeight * 0.7,
      { isStatic: true, render: { fillStyle: "#6a0dad", strokeStyle: "transparent" } }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth - 10,
      (window.innerHeight * 0.7) / 2,
      20,
      window.innerHeight * 0.7,
      { isStatic: true, render: { fillStyle: "#6a0dad", strokeStyle: "transparent" } }
    );

    const ceiling = Bodies.rectangle(
      window.innerWidth / 2,
      10,
      window.innerWidth,
      20,
      { isStatic: true, render: { fillStyle: "#6a0dad", strokeStyle: "transparent" } }
    );

    World.add(world, [ground, leftWall, rightWall, ceiling]);

    // Function to create letters as physics bodies
    const createLetters = () => {
      const letters = [];
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let i = 0; i < 50; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) * 0.5;
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)];

        // Create a rectangle body with text rendered on it
        letters.push(
          Bodies.rectangle(x, y, 50, 50, {
            restitution: 0.6,
            render: {
              sprite: {
                texture: createLetterTexture(letter), // Custom function to create text texture
                xScale: 1,
                yScale: 1,
              },
            },
          })
        );
      }

      World.add(world, letters);
    };

    // Helper function to create a canvas texture with the letter
    const createLetterTexture = (letter) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Set canvas size
      canvas.width = 50;
      canvas.height = 50;

      // Draw the letter on the canvas
      context.fillStyle = "#ffffff"; // Background color
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.font = "30px Arial"; // Font size and style
      context.fillStyle = "#000000"; // Text color
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(letter, canvas.width / 2, canvas.height / 2);

      return canvas.toDataURL(); // Convert canvas to data URL
    };

    // Create and add letters to the world
    createLetters();

    // Run the renderer and engine
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Cleanup on unmount
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
          margin: "0 10",
        }}
      ></div>
    </div>
  );
};

export default TimeScale;