import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";

const TwoVideos = () => {
  const nameLeftRef = useRef(null);
  const nameRightRef = useRef(null);

  
  useEffect(() => {
    gsap.to(nameLeftRef.current, {
      y: -100, 
      scrollTrigger: {
        trigger: nameLeftRef.current,
        start: "top bottom", 
        end: "top top",
        scrub: true,
      },
    });
    
    gsap.to(nameRightRef.current, {
      y: -100, 
      scrollTrigger: {
        trigger: nameRightRef.current,
        start: "top bottom", 
        end: "top top", 
        scrub: true,
      },
    });
  }, []);

  return (
    <Box
      sx={{
        width: "96vw",
        height: "100vh",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        gap: "30px",
        marginTop:'2rem',
        marginBottom:'2rem',
        justifyContent: "center",
        alignItems: "center",
        [`@media (max-width: 426px)`]: {
           flexDirection:'column',gap: "50px", justifyContent: "unset",
           alignItems: "unset", height: "auto",
        }
      }}
    >
      
      {/* <Box> */}
      <Box sx={{ position: "relative", width: "50%", height: "100%", [`@media (max-width: 426px)`]: {
            width: "100%",
            
        } }}>
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/745004855/rendition/720p/file.mp4?loc=external&signature=1dd35b7b1001be056347f1aa639461cf56f40fc35b3f0ad75170809e8ca7d4e4"
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius:'20px'
          }}
        ></video>
        <Typography
          ref={nameLeftRef}
          variant="h4"
          sx={{
            position: "absolute",
            left: "13%",fontSize:'1.5rem',
            transform: "translateX(-50%)",
            color: "white",
            fontWeight: "bold",
            transition: "transform 0.5s ease-out",
            [`@media (max-width: 426px)`]: {
                display:'none'
            }
          }}
        >
          Sussex Taps
        </Typography>
      </Box>
      <Typography
        
        variant="h4"
        sx={{
       
          paddingLeft:'1rem',
        //   paddingTop:'1rem',
          color: "black",
          fontWeight: "bold",
          fontSize:'1.2rem',
          transition: "transform 0.5s ease-out",
          [`@media (min-width: 426px)`]: {
            display:'none'
        }
        }}
      >
       Sussex Taps
      </Typography>
      {/* </Box> */}

      
      {/* <Box> */}
      <Box sx={{ position: "relative", width: "50%", height: "100%",
         [`@media (max-width: 426px)`]: {
            width: "100%",
        }
       }}>
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/896099361/rendition/1080p/file.mp4?loc=external&log_user=0&signature=49e8fbb1560dccb3f536c1caad171d4f6d0f92cc8a03c7e706b7a2527814145a"
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",borderRadius:'20px'
          }}
        ></video>
        <Typography
          ref={nameRightRef}
          variant="h4"
          sx={{
            position: "absolute",
            // bottom: 5,
            left: "10%",fontSize:'1.5rem',
            transform: "translateX(-50%)",
            color: "white",
            fontWeight: "bold",
            
            transition: "transform 0.5s ease-out",
            [`@media (max-width: 426px)`]: {
                display:'none'
            }
          }}
        >
          Ferox
        </Typography>
        
      </Box>
      <Typography
        
        variant="h4"
        sx={{
       
          paddingLeft:'1rem',
        //   paddingTop:'1rem',
          
          color: "black",
          fontWeight: "bold",
          fontSize:'1.2rem',
          transition: "transform 0.5s ease-out",
          [`@media (min-width: 426px)`]: {
            display:'none'
        }
        }}
      >
       Ferox
      </Typography>
      </Box>
    // </Box>
  );
};

export default TwoVideos;