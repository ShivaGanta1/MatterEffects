import React, { useEffect } from "react";
import Matter from "matter-js";
import image1 from "./logos/pngwing.com (1).png"; 
import image2 from "./logos/pngwing.com (3).png";
import image3 from "./logos/pngwing.com (2).png";
import image4 from "./logos/pngwing.com.png";

const Imge = () => {
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

    const preloadImages = async (imageUrls) => {
      const images = [];
      for (const url of imageUrls) {
        const img = new Image();
        img.src = url;
        try {
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
          });
          images.push(img);
        } catch (error) {
          console.error(error.message);
        }
      }
      return images;
    };

    const createMixedImages = async () => {
      const imageUrls = [image1, image2, image3,image3,image4];

      try {
        const loadedImages = await preloadImages(imageUrls);

        const images = [];
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * (window.innerHeight * 0.7) * 0.5;
          const size = Math.random() * 50 + 20;

          const randomImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

          images.push(
            Bodies.rectangle(x, y, size, size / 2, {
              restitution: 0.6,
              render: {
                sprite: {
                  texture: randomImage.src,
                  xScale: size / randomImage.width,
                  yScale: size / randomImage.height,
                },
              },
            })
          );
        }
        World.add(world, images);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    createMixedImages();

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
        }}
      ></div>
    </div>
  );
};

export default Imge;