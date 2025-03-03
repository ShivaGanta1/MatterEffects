import React, { useEffect, useRef } from 'react';
import { Box, Typography, styled, useMediaQuery } from '@mui/material';
import gsap from 'gsap';

const HeroContainer = styled(Box)(() => ({
    padding: '32px',
    paddingTop: '5rem',
    paddingBottom: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    
}));

const Heading = styled(Typography)(({ isLargeScreen }) => ({
    fontSize: '7rem',
    fontWeight: 'bold',
    color: '#0f1c07',
    lineHeight: '1',
    margin: 0, 
    padding: 0, 
    ...(isLargeScreen ? {} : {
        fontSize: '6rem',
        lineHeight: '1',
    }),
    [`@media (max-width: 426px)`]: {
        fontSize: '3rem',
    },
    [`@media (max-width: 350px)`]: {
        fontSize: '2rem',
    }
}));

const WordSpan = styled('span')({
    display: 'inline-block',
    whiteSpace: 'pre',
    opacity: 0,
    transform: 'translateY(100%)',
    overflow: 'hidden',
    span: {
        display: 'inline-block',
        whiteSpace: 'pre',
    }
});

const Nav = () => {
    const headingLine1Ref = useRef(null);
    const headingLine2Ref = useRef(null);
    const headingLine3Ref = useRef(null);
    const wordsLine1Ref = useRef([]);
    const wordsLine2Ref = useRef([]);
    const wordsLine3Ref = useRef([]);
    const isLargeScreen = useMediaQuery('(min-width: 960px)');

    useEffect(() => {
        const animateWords = (wordElements, delay = 0) => {
            if (wordElements.length > 0) {
                gsap.fromTo(
                    wordElements,
                    {
                        y: "100%",
                        opacity: 0,
                    },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        stagger: 0.1,
                        delay: delay,
                    }
                );
            }
        };

        animateWords(wordsLine1Ref.current);
        animateWords(wordsLine2Ref.current, 0.1);
        if (!isLargeScreen) {
            animateWords(wordsLine3Ref.current, 0.2);
        }
    }, [isLargeScreen]);

    const textLargeScreenLine1 = "Extraordinary";
    const textLargeScreenLine2 = "Digital Experiences";

    const textSmallScreenLine1 = "Extraordinary";
    const textSmallScreenLine2 = "Digital";
    const textSmallScreenLine3 = "Experiences";

    const wordsLine1 = isLargeScreen ? textLargeScreenLine1.split(' ') : textSmallScreenLine1.split(' ');
    const wordsLine2 = isLargeScreen ? textLargeScreenLine2.split(' ').slice(0, 2) : textSmallScreenLine2.split(' ');
    const wordsLine3 = isLargeScreen ? textLargeScreenLine2.split(' ').slice(2) : textSmallScreenLine3.split(' ');

    return (
        <HeroContainer>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <Heading ref={headingLine1Ref} isLargeScreen={isLargeScreen}>
                    {wordsLine1.map((word, index) => (
                        <WordSpan key={index} ref={(el) => (wordsLine1Ref.current[index] = el)}>
                            {word.split('').map((letter, letterIndex) => (
                                <span key={letterIndex}>{letter}</span>
                            ))}
                        </WordSpan>
                    ))}
                </Heading>

                <Heading ref={headingLine2Ref} isLargeScreen={isLargeScreen}>
                    {wordsLine2.map((word, index) => (
                        <WordSpan key={index} ref={(el) => (wordsLine2Ref.current[index] = el)}>
                            {word.split('').map((letter, letterIndex) => (
                                <span key={letterIndex}>{letter}</span>
                            ))}
                        </WordSpan>
                    ))}
                </Heading>

                {!isLargeScreen && (
                    <Heading ref={headingLine3Ref} isLargeScreen={isLargeScreen}>
                        {wordsLine3.map((word, index) => (
                            <WordSpan key={index} ref={(el) => (wordsLine3Ref.current[index] = el)}>
                                {word.split('').map((letter, letterIndex) => (
                                    <span key={letterIndex}>{letter}</span>
                                ))}
                            </WordSpan>
                        ))}
                    </Heading>
                )}
            </Box>
        </HeroContainer>
    );
};

export default Nav;
