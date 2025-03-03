import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
  "/logo7.svg",
  "/logo8.svg",
  "/logo9.svg",
  "/logo10.svg",
];

const LogoAnimation = () => {
  const logoRef = useRef(null);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const changeLogo = () => {
      gsap.to(logoRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
          gsap.to(logoRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    };

    tl.to({}, { duration: 1.5, repeat: -1, onRepeat: changeLogo });

    return () => tl.kill();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Box
        ref={logoRef}
        component="img"
        src={logos[currentLogoIndex]}
        sx={{ width: 100, height: 100, opacity: 1, transition: "opacity 0.5s" }}
      />
    </Box>
  );
};

export default LogoAnimation;
