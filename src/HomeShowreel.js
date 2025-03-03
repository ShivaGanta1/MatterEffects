import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, styled } from "@mui/material";
import { PlayArrow, Pause, VolumeUp, VolumeOff } from "@mui/icons-material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowreelContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
//   padding: "20px",
}));

const ShowreelInner = styled(Box)(() => ({
  borderRadius: "30px",
  overflow: "hidden",
  position: "relative",
  width: "96%", 
//   maxWidth: "900px",
  transform: "scale(0.7)", 
  opacity: 0.7, 
}));

const ShowreelVideo = styled("video")(() => ({
  width: "100%",
  borderRadius: "20px",
  display: "block",
  [`@media (max-width: 426px)`]: {
    width: "110%",
    height:'100%'
  }
}));

const ShowreelControls = styled(Box)(() => ({
  position: "absolute",
  bottom: "16px",
  left: "85rem",
  display: "flex",
  flexDirection: "row", backgroundColor: "rgba(255, 255, 255, 0.7)",borderRadius:'50px',
  "& button": {
    // backgroundColor: "rgba(255, 255, 255, 0.7)",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius:'50px',
    },
    "& svg": {
      width: "26px",
      height: "26px",
      fill: "#333",
    },
  },
}));

const HomepageShowreel = () => {
  const videoRef = useRef(null);
  const showreelRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.to(showreelRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: showreelRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  return (
    <ShowreelContainer>
      <ShowreelInner ref={showreelRef}>
        <ShowreelVideo
          src="https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&log_user=0&signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902"
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          muted={isMuted}
          ref={videoRef}
        />
        <ShowreelControls>
          <IconButton aria-label={isPlaying ? "Pause" : "Play"} onClick={handlePlayPause}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton aria-label={isMuted ? "Unmute" : "Mute"} onClick={handleMuteUnmute}>
            {isMuted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
        </ShowreelControls>
      </ShowreelInner>
    </ShowreelContainer>
  );
};

export default HomepageShowreel;
