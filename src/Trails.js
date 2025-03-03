import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";

const Trails = () => {
  const nameRef = useRef(null);
  const boxRef = useRef(null);


  useEffect(() => {
    gsap.to(nameRef.current, {
      y: -100, 
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top bottom", 
        end: "top top", 
        scrub: true,
      },
      
    });
    gsap.to(boxRef.current, {
        backgroundPositionY: "-50%", 
        scrollTrigger: {
            trigger: boxRef.current, 
            start: "top bottom", 
            end: "bottom top", 
            scrub: true,
            markers:false,
        },
    });
  }, []);

  return (
    <Box>
    <Box ref={boxRef}
      sx={{ 
        width: "96vw",
        height: "100vh",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/450x330/filters:quality(80)')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",borderRadius:'20px',
        [`@media (max-width: 426px)`]: {
            height: "40vh", 
        }
      }}
    >
      
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/900035513/rendition/720p/file.mp4?loc=external&log_user=0&signature=e9ef6806c16b6f3f049770fa1807499bcb704855df7554226bff097394cbde8c" // Replace with your video link
        autoPlay
        muted
        loop
        style={{
          width: "70%", 
          height: "70%", 
          objectFit: "cover",
          position: "absolute",
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
        //   opacity: 0.7, 
        borderRadius:'20px'
        }}
      ></video>

      
      <Typography
        ref={nameRef}
        variant="h4"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          color: "white",
          fontWeight: "bold",
          fontSize:'1.5rem',
          transition: "transform 0.5s ease-out",
           [`@media (max-width: 426px)`]: {
            display:'none'
        }
        }}
      >
      TrailsWA
      </Typography>
    </Box>
    <Typography
        
        variant="h4"
        sx={{
       
          paddingLeft:'1.4rem',
          paddingTop:'1rem',
          color: "black",
          fontWeight: "bold",
          fontSize:'1.2rem',
          transition: "transform 0.5s ease-out",
          [`@media (min-width: 426px)`]: {
            display:'none'
        }
        }}
      >
      TrailsWA
      </Typography>
    </Box>
  );
};

export default Trails;
