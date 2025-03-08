import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const { 
  Engine, 
  Render, 
  World, 
  Bodies, 
  Runner, 
  Mouse,
  MouseConstraint
} = Matter;

const InteractiveSimulation = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const engine = Engine.create();
    const { world } = engine;

    // Create renderer without debug numbers
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#f4f4f4',
        showAngleIndicator: false, // Disable angle indicators
        showCollisions: false,     // Disable collision overlay
        showVelocity: false        // Disable velocity vectors
      }
    });

    // Set up mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(world, mouseConstraint);
    render.mouse = mouse; 

    // Create environment
    const ground = Bodies.rectangle(400, 610, 810, 60, { 
      isStatic: true,
      render: { fillStyle: '#333' }
    });

    // Create sample objects
    const createShape = (x, y) => {
      return Bodies.polygon(x, y, 6, 30, {
        restitution: 0.7,
        friction: 0.1,
        render: { 
          fillStyle: '#4a90e2',
          strokeStyle: '#2a6dc2',
          lineWidth: 2
        }
      });
    };

    // Add bodies to world
    World.add(world, [
      ground,
      createShape(200, 200),
      createShape(400, 100),
      createShape(600, 200)
    ]);

    // Click to add objects
    const handleClick = (event) => {
      const pos = mouse.position;
      const newShape = createShape(pos.x, pos.y);
      World.add(world, newShape);
    };

    render.canvas.addEventListener('click', handleClick);

    // Run the engine
    Runner.run(engine);
    Render.run(render);

    // Cleanup
    return () => {
      render.canvas.removeEventListener('click', handleClick);
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div 
      ref={sceneRef}
      style={{ 
        width: '800px', 
        height: '600px', 
        margin: '20px auto',
        border: '2px solid #666',
        borderRadius: '8px',
        touchAction: 'none'
      }}
    />
  );
};

export default InteractiveSimulation;