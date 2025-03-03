import React, { useRef, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, styled } from '@mui/material';
import { gsap, Draggable } from 'gsap/all';

gsap.registerPlugin(Draggable);

const StyledFeedSlider = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: theme.spacing(2),
    // position: "sticky",
    // top: 0,
    // zIndex: 2,
}));

const FeedHeading = styled(Typography)(({ theme }) => ({
    fontFamily: 'Arial, sans-serif',
    fontSize: "4rem",
    fontWeight: theme.typography.h5.fontWeight,
    marginBottom: theme.spacing(2),
    // opacity: 1,
    // transform: 'translateY(0px)',
    opacity: 0,
    transform: 'translateY(50px)',
    paddingLeft: '2rem',
    paddingBottom: '2rem',
    // textAlign: 'center',
    [`@media (max-width: 376px)`]: {
        fontSize: "3rem",
    }
}));

const FeedInner = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    /* Remove gap between items */
    touchAction: 'pan-y',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    WebkitTouchCallout: 'none',
    padding: theme.spacing(0, 2),
}));

const FeedArticle = styled(Box)(({ theme }) => ({
    flex: '0 0 auto',
    width: 300,
    maxWidth: '100%',
    marginRight: theme.spacing(2), 
    '&:last-child': {
        marginRight: 0,
    }
}));


const FeedItem = styled(Card)(({ theme }) => ({
    opacity: 1,
    transform: 'translateX(0px)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: 'transparent', 
    boxShadow: 'none', 
}));

const FeedImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
}));

const FeedImage = styled(CardMedia)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    aspectRatio: '300/390',
    objectFit: 'cover',
    display: 'block',
    draggable: 'false', borderRadius: "30px",
}));

const FeedTag = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: "22rem",
    left: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    // borderRadius: theme.shape.borderRadius,
    color: 'white',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.body2.fontSize,
    borderRadius: '50px',
    [`@media (max-width: 350px)`]: {
        top: "21rem",
    }
}));

const FeedDate = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1, 2, 0, 2),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
}));

const FeedContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2),
    '&:last-child': {
        paddingBottom: theme.spacing(2),
    }
}));

const FeedTitle = styled(Typography)(({ theme }) => ({
    fontSize: "0.9rem",
    fontWeight: 550,
    marginBottom: theme.spacing(1),




}));


const ExploreButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 2),
    textDecorationLine: 'underline',
    borderRadius: '50px',
    borderColor: theme.palette.text.primary,
    textTransform: 'none',
    color: '#787873',
    transition: theme.transitions.create(['transform', 'opacity'], {
        duration: theme.transitions.duration.short,
    }),
    '&:hover': {
        transform: 'scale(1.05)',
        backgroundColor: 'black',
        color: 'white',

        borderRadius: '50px', textDecorationLine: 'none',
    },
}));
const StyledFirstWord = styled("span")(({ theme }) => ({
    color: 'black',
}));

const StyledRemainingText = styled("span")(({ theme }) => ({
    color: "#7d7d78",
}));



const FeedSlider = () => {
    const sliderRef = useRef(null);
    const feedInnerRef = useRef(null);
    const headingRef = useRef(null);
    useEffect(() => {
        gsap.to(headingRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    }, []);
    const articles = [
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/2ef84dad83/surveillance-watch.jpg/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#1b2237',
            date: '28.08.24',
            title: 'Surveillance Watch: An interactive data visualisation highlighting global surveillance connections',
            link: '#',
            linkText: 'Explore',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/2b0e547469/unearthed.jpg/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#f68738',
            date: '30.07.24',
            title: 'Unearthed: An all new website to showcase the teams expertise across innovation in the resources sector.',
            link: 'https://unearthed.solutions/',
            linkText: 'Check it out',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/17b3d35e06/humaans.jpg/m/300x390/filters:quality(80)',
            tag: 'Milestone',
            tagColor: '#28221e',
            date: '01.07.24',
            title: 'Humaaniversary: Celebrating 14 years of making extraordinary digital products with our incredible team.',
            link: null,
            linkText: null,
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/e4a71105cb/mymindcheck.png/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#ff6465',
            date: '30.05.24',
            title: 'My Mind Check: An evidence-based digital mental health and wellbeing check-in for Australian schools.',
            link: 'https://mymindcheck.org.au/',
            linkText: 'Visit website',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/2fbc3c1071/awa.jpg/m/300x390/filters:quality(80)',
            tag: 'Awards',
            tagColor: '#361f0f',
            date: '22.05.24',
            title: 'Australian Web Awards: 15 nominations and 2 wins, including Best in show: Design.',
            link: null,
            linkText: null,
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#39D25D',
            date: '17.04.24',
            title: 'Fair Go Finance: Flexible personal finance has an all new website.',
            link: 'https://www.fairgofinance.com.au/',
            linkText: 'Let\'s go',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/770x1000/f7a8833cb1/niaal.jpeg/m/300x390/filters:quality(80)',
            tag: 'New Humaan',
            tagColor: '#97A1C2',
            date: '26.03.24',
            title: 'Welcome Niaal: Long time friend of the team, Niaal Holder joins as our new Agency Director.',
            link: null,
            linkText: null,
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/600x790/f48bc1ea20/humaan.jpg/m/300x390/filters:quality(80)',
            tag: 'Brand New',
            tagColor: '#7c4ace',
            date: '22.12.23',
            title: 'Headless Humaan: A fresh new look for humaan.com – our sixth iteration. Please, take a look around.',
            link: null,
            linkText: null,
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/600x790/4c3962aae5/xmas.jpg/m/300x390/filters:quality(80)',
            tag: 'Festive',
            tagColor: '#1d8c4a',
            date: '18.12.23',
            title: 'Season\'s Greenthings: 2023, the year we embraced the morph suit... We hope you have a safe festive season!',
            link: '/xmas',
            linkText: 'Humaan Christmas',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/600x790/167932ea15/cocos.jpg/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#038B99',
            date: '28.11.23',
            title: 'Cocos Keeling Islands: A beautiful new website for Australia\'s last unspoilt paradise.',
            link: 'https://cocoskeelingislands.com.au/',
            linkText: 'Go explore',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/600x790/b2eda5d803/frame-1728.jpg/m/300x390/filters:quality(80)',
            tag: 'Recognition',
            tagColor: '#353537',
            date: '23.11.23',
            title: 'Access Awards: Talk n Walk wins Not-for-profit App of the Year by the Centre for Accessibility Australia.',
            link: null,
            linkText: null,
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/601x780/7ecf7ab961/alder-feed.jpg/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#000000',
            date: '31.10.23',
            title: 'Alder Tapware: Inspiration, innovation, design. An all new website for Alder tapware.',
            link: 'https://aldertapware.com.au',
            linkText: 'Check it out',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/1200x1580/23137800a3/humaan-annotations.png/m/300x390/filters:quality(80)',
            tag: 'Figma',
            tagColor: '#a25aff',
            date: '28.10.23',
            title: 'Humaan Annotations: A handy little tool from the labs that extends Figma\'s built in commenting functionality.',
            link: 'https://www.figma.com/community/widget/1253154577300925316',
            linkText: 'Try it out',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/600x790/d28f4d34ae/loam2.jpg/m/300x390/filters:quality(80)',
            tag: 'Site Launch',
            tagColor: '#46651A',
            date: '26.10.23',
            title: 'Loam Bio: Putting agriculture at the forefront of addressing climate change.',
            link: 'https://loambio.com',
            linkText: 'Visit Loam',
        },
        {
            imageUrl: 'https://a-us.storyblok.com/f/1017006/600x790/6a408c2c00/loudshirtday.jpg/m/300x390/filters:quality(80)',
            tag: 'Get Loud',
            tagColor: '#EE8D5A',
            date: '20.10.23',
            title: 'Loud Shirt Day: Proudly ‘wearing it loud’ today for Loud Shirt Day - supporting children with hearing loss.',
            link: null,
            linkText: null,
        },
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        const feedInner = feedInnerRef.current;
        const cards = feedInner?.children;
        const feedItems = gsap.utils.toArray('.FeedSlider_feed__item__w7WSY');

        if (!slider || !feedInner || !cards || !feedItems) return;

        let xPercent = 0;
        let currentXPercent = 0;



        gsap.set(feedItems, { scale: 1, xPercent: (i) => i * 1, opacity: 0, x: -500 });
        gsap.set(feedInner, { xPercent: 0 });

        
        gsap.to(feedItems, {
            opacity: 1,
            x: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out",
        });


        const dragInstance = Draggable.create(feedInner, {
            type: "xPercent",
            trigger: slider,
            inertia: true,
            dragResistance: 0.2,
            snap: (value) => {
                return Math.round(value / 100) * 100;
            },
            onDrag: function () {
                xPercent = currentXPercent + this.xPercent;
                gsap.to(feedInner, {
                    xPercent: xPercent,
                    duration: 0,
                    ease: "power2.out"
                });
               
                gsap.to(feedItems, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: "power2.out"
                });
            },
            onDragEnd: function () {
                currentXPercent = xPercent;
               
                gsap.to(feedItems, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        })[0];
        // gsap.to(slider, { 
        //     yPercent: -100, // Move it up by 100% of its own height
        //     scrollTrigger: {
        //         trigger: slider, // Use the slider as the trigger
        //         start: "top top",   // when the top of the slider hits the top of the viewport
        //         end: "+=100", // Animation ends after scrolling down 300px from the start
        //         pin: false,       // No pinning, just move up
        //         scrub: 1,        // 1 second scrub for smooth animation
        //         markers: false,    // Markers for debugging, set to false for production
        //     }
        // });

        return () => {
            dragInstance?.kill();
        };
      
    
    }, []);
    


    return (
        <StyledFeedSlider ref={sliderRef} >
            <FeedHeading variant="h2" ref={headingRef}>What's New</FeedHeading>
            <FeedInner ref={feedInnerRef}>
                {articles.map((article, index) => (
                    <FeedArticle key={index} className="FeedSlider_feed__shrink-drag__4j3XZ">
                        <FeedItem className="FeedSlider_feed__item__w7WSY">
                            <FeedImageContainer className="FeedSlider_feed__image__4qcgY">
                                <FeedImage
                                    className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI FeedSlider_feed__picture__BGkOi"
                                    component="img"
                                    src={article.imageUrl}
                                    alt=""
                                    loading="eager"
                                />
                                {article.tag && (
                                    <FeedTag className="FeedSlider_feed__tag__F9f_h" style={{ backgroundColor: article.tagColor }}>
                                        {article.tag}
                                    </FeedTag>
                                )}
                            </FeedImageContainer>
                            <FeedDate className="FeedSlider_feed__date__pEv67">{article.date}</FeedDate>
                            <FeedContent className="FeedSlider_feed__content__spbob">
                                {/* <FeedTitle className="FeedSlider_feed__title__sGhl7">
        {article.title}
    </FeedTitle> */}
                                <FeedTitle>
                                    {article.title.includes(':') ? (
                                        <>
                                            <StyledFirstWord>{article.title.split(':')[0]}:</StyledFirstWord>{" "}
                                            <StyledRemainingText>{article.title.split(':').slice(1).join(':')}</StyledRemainingText>
                                        </>
                                    ) : (
                                        article.title
                                    )}
                                </FeedTitle>
                                {article.link && (
                                    <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: '8px', display: 'inline-block' }}>
                                        <ExploreButton
                                            component="span"
                                            className="Button_button__lQZdm Button_button--bg-transparent__4_NCr FeedSlider_feed__link__Rku_S"
                                            style={{

                                                borderColor: 'inherit',
                                                padding: '3px 10px',

                                                // backgroundColor: 'transparent',
                                                transition: 'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease', 
                                                display: 'inline-block',
                                                cursor: 'pointer',

                                                '&:hover': {
                                                    // transform: 'scale(1.05)',
                                                    // backgroundColor: 'black', 
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            {article.linkText}
                                        </ExploreButton>
                                    </a>
                                )}
                            </FeedContent>
                        </FeedItem>
                    </FeedArticle>
                ))}
            </FeedInner>
        </StyledFeedSlider>
    );
};

export default FeedSlider;