import React, { useEffect, useRef } from 'react';
import { Box, Typography, styled } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo1 from "./logos/logo1.svg"

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeadingRoot = styled('div')({
    height: '100vh',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    marginTop:'10rem',
    lineHeight: 1,
    color: 'white',
    marginBottom: 'clamp(7.5rem, 7.9365079365vw, 9.975rem)',
    transition: 'background-color 0.5s ease',
    [`@media (max-width: 426px)`]: {
        paddingLeft: '2rem',
        paddingRight: '2rem', height: 'auto', marginTop:'0rem',
    }
});

const AnimatedHeadingTypography = styled(Typography)(() => ({
    fontSize: 'clamp(6.25rem, 6.6137566138vw, 8.3125rem)',
    fontWeight: 500,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [`@media (max-width: 426px)`]: {
        fontSize: '2rem',
    }
}));

const TextAnimateUpWord = styled('span')({
    display: 'inline-block',
    whiteSpace: 'pre',
    margin: '0 0.1rem',
    span: {
        display: 'inline-block',
        whiteSpace: 'pre',
        opacity: 0,
        transform: 'translate3d(0px, 100%, 0px)',
    },
});

const We = () => {
    const headingRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const words = headingRef.current.querySelectorAll('.word');
        gsap.set(words, { perspective: 600 });

        words.forEach((word) => {
            const letters = word.querySelectorAll('span');
            gsap.fromTo(
                letters,
                { yPercent: 100, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.03 }
            );
        });

        // gsap.to(sectionRef.current, {
        //     backgroundColor: '#b488f2',
        //     scrollTrigger: {
        //         trigger: sectionRef.current,
        //         start: 'top 60%',
        //         end: 'bottom 40%',
        //         toggleActions: 'play reverse play reverse',
        //     }
        // });
    }, []);

    const text = "We design, build and ship world-class digital products for forward-thinking brands.";
    const words = text.split(" ");

    return (
        <AnimatedHeadingRoot ref={sectionRef}>
            <AnimatedHeadingTypography component="h2" ref={headingRef}>
                {words.map((word, index) => (
                    <TextAnimateUpWord key={index} className="word">
                        {word.split(" ").map((letter, letterIndex) => (
                            <span key={letterIndex}>{letter}</span>
                        ))}
                        {index < words.length - 1 && <span>&nbsp;</span>}
                    </TextAnimateUpWord>
                ))}
            </AnimatedHeadingTypography>

            <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        paddingTop: "10rem",
        flexWrap: "wrap", 
        gap: "1rem", [`@media (max-width: 426px)`]: {
            paddingTop: "5rem",
            paddingBottom:'2rem'
        }
      }}
    >
      {[logo1, logo1, logo1, logo1].map((logo, index) => (
        <Typography
          key={index}
          sx={{
            display: index < 2 ? "block" : "none", 
            "@media (min-width: 426px)": {
              display: "block", 
            },
          }}
        >
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{
              width: "150px",
              height: "auto",
              maxWidth: "100%",
            }}
          />
        </Typography>
      ))}
    </Box>
        </AnimatedHeadingRoot>
    );
};

export default We;
