import React, { useEffect } from "react";
import Matter from "matter-js";

const Work = () => {
  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const { world } = engine;

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

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    Matter.World.add(world, mouseConstraint);

    // Add touch support for mobile devices
    render.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      Matter.Mouse.setOffset(mouse, render.canvas.getBoundingClientRect());
      Matter.Mouse.setPosition(mouse, { x: touch.clientX, y: touch.clientY });
    });

    render.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      Matter.Mouse.setPosition(mouse, { x: touch.clientX, y: touch.clientY });
    });

    render.canvas.addEventListener('touchend', () => {
      document.body.style.overflow = 'auto';
    });

    // Scroll handling
    let isDragging = false;

    render.canvas.addEventListener('mousedown', () => {
      isDragging = true;
      document.body.style.overflow = 'hidden';
    });

    render.canvas.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.style.overflow = 'auto';
    });

    // Ensure scrolling works when not interacting
    render.canvas.addEventListener('wheel', (e) => {
      if (!isDragging) {
        document.body.style.overflow = 'auto';
      }
    });

    // Mobile scroll handling
    let lastTouchY = 0;
    render.canvas.addEventListener('touchstart', (e) => {
      lastTouchY = e.touches[0].clientY;
    });

    render.canvas.addEventListener('touchmove', (e) => {
      const touchY = e.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      
      if (!isDragging && Math.abs(deltaY) > 5) { // Threshold to distinguish from dragging
        document.body.style.overflow = 'auto';
      }
      lastTouchY = touchY;
    });

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      (window.innerHeight * 0.7) - 10,
      window.innerWidth,
      20,
      {
        isStatic: true,
        render: {
          fillStyle: "#6a0dad",
          strokeStyle: "transparent",
        },
      }
    );

    const leftWall = Bodies.rectangle(
      10,
      (window.innerHeight * 0.7) / 2,
      20,
      window.innerHeight * 0.7,
      {
        isStatic: true,
        render: {
          fillStyle: "#6a0dad",
          strokeStyle: "transparent",
        },
      }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth - 10,
      (window.innerHeight * 0.7) / 2,
      20,
      window.innerHeight * 0.7,
      {
        isStatic: true,
        render: {
          fillStyle: "#6a0dad",
          strokeStyle: "transparent",
        },
      }
    );

    const ceiling = Bodies.rectangle(
      window.innerWidth / 2,
      10,
      window.innerWidth,
      20,
      {
        isStatic: true,
        render: {
          fillStyle: "#6a0dad",
          strokeStyle: "transparent",
        },
      }
    );

    World.add(world, [ground, leftWall, rightWall, ceiling]);

    const createMixedShapes = () => {
      const shapes = [];
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) * 0.5;
        const size = Math.random() * 50 + 20;

        if (i % 3 === 0) {
          shapes.push(Bodies.circle(x, y, size / 2, { restitution: 0.8 }));
        } else if (i % 3 === 1) {
          shapes.push(Bodies.rectangle(x, y, size, size / 2, { restitution: 0.6 }));
        } else {
          const sides = Math.floor(Math.random() * 5) + 3;
          shapes.push(Bodies.polygon(x, y, sides, size / 2, { restitution: 0.7 }));
        }
      }
      World.add(world, shapes);
    };

    createMixedShapes();

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Handle window resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight * 0.7;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ 
      margin: 0,
      width: '100vw',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <div 
        id="physics-container" 
        style={{ 
          width: "100%", 
          height: "70vh",
          margin: "0 auto",
          touchAction: 'auto' // Ensures touch events work properly
        }}
      ></div>
    </div>
  );
};

export default Work;