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
        width: window.innerWidth  ,
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
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) * 0.5; 
        const size = Math.random() * 50 + 20; 

        if (i % 3 === 0) {
          // Circle
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

    
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div style={{ margin: 0, 
    // padding: "2rem",
     }}>
     

      <div id="physics-container" style={{ width: "100%", height: "70vh", 
        margin: "0 10",
        }}></div>

      
    </div>
  );
};

export default Work;