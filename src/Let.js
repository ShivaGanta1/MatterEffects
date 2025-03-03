import React, { useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Link } from '@mui/material';
import gsap from 'gsap';

const PageHomepageBottom = styled(Box)(() => ({
    padding: '60px 20px',
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft:'2rem',
    marginBottom:'6rem'
    // alignItems: 'center',
}));

const PageHomepageBottomHeading = styled('h2')(() => ({
    fontFamily: "'archivo-black', sans-serif",
    // fontSize: '80px',
    fontSize:" clamp(6.125rem, 5.5978835979vw, 2.80625rem)",
    lineHeight: '1',
    textAlign: 'left',
    color: '#000',
    marginBottom: '50px',
    // maxWidth: '820px',
    width: '100%',
    // padding: '0 0 0 20px',
    opacity: 0,
    transform: 'translateY(50px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    '@media (max-width: 768px)': {
        fontSize: '60px',
        padding: '0',
    },
    '@media (max-width: 426px)': {
        fontSize:'2rem'
    }
}));

const ContentWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    // gap:50,
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    // maxWidth: '1200px',
    width: '100%',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
    },
}));

const PageHomepageBottomContent = styled(Box)(() => ({
    maxWidth: '45%',
    textAlign: 'left',
    '@media (max-width: 768px)': {
        maxWidth: '100%',
        marginBottom: '40px',
    },
}));

const WYSIWYGWysiwyg = styled(Typography)(() => ({
    fontSize: '1.5rem',
    lineHeight: '1.6',
    color: '#000',
    opacity: 0, 
        transform: 'translateY(50px)',
    //     transition: 'opacity 0.3s ease, transform 0.3s ease',
    marginBottom: '20px',
    '& p': {
        marginBottom: '20px',
    },
    [`@media (max-width: 426px)`]: {
        fontSize: '1rem',
    }
}));

const PageHomepageBottomLink = styled(Link)(() => ({
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '40px',
    opacity: 0,
        transform: 'translateY(50px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
}));

const ButtonWrapper = styled('span')(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '50px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#91f288',
        color: 'black',
    },
    '& svg': {
        width: '14px',
        height: '13px',
        marginLeft: '10px',
        verticalAlign: 'middle',  fill: '#91f288', 
        
    }, '&:hover svg': { 
        fill: 'black',
        color:'black',
        stroke:"black",
        color:'black'
        
    },
}));

const PageHomepageBottomImageWrapper = styled(Box)(() => ({
    maxWidth: '50%',
    opacity: 0, 
     transform: 'translateY(50px)',
     transition: 'opacity 0.3s ease, transform 0.3s ease',
    '@media (max-width: 768px)': {
        maxWidth: '100%',
    },
    
    '& picture img': {
        maxWidth: '120%', 
        height: 'auto',    
    },
   '@media (max-width: 426px)': {
       '& picture img': {
        maxWidth: '100%', 
        height: 'auto',     
    },
    },
}));

const PicturePicture = styled('picture')(() => ({
    display: 'block',
    maxWidth: '100%',
    '& img': {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
    },
    '@media (max-width: 426px)': {
    paddingLeft:'0rem'
    }
}));

const StatsSection = styled(Box)(() => ({
    width: '100%',
    marginTop: '6rem',
    [`@media (max-width: 426px)`]: {
        marginTop: '2rem',
    }
}));

const StatItem = styled(Box)(() => ({
    display: 'flex',
    padding: '20px 0',
    // gap:'90px',
    justifyContent: 'space-between',
    borderTop: '1px solid #ddd',
    alignItems:'center',
    '&:last-child': {
        borderBottom: '1px solid #ddd',
    }
}));

const StatValue = styled(Typography)(() => ({
    fontFamily: "'archivo-black', sans-serif",
    fontSize: '90px',
    lineHeight: '1',
    color: '#000',
    marginRight: '20px',
    minWidth: '120px',
    fontWeight: 'bold',
    [`@media (max-width: 426px)`]: {
        fontSize: '3rem',
    }
}));

const StatLabel = styled(Typography)(() => ({
    fontSize: '30px',
    color: 'black',
    fontWeight:550,
    paddingTop: '10px',
    width:'20rem',
    [`@media (max-width: 426px)`]: {
        fontSize: '1.5rem', 
        width:'13rem',
    }
    // paddingLeft:'10rem'
}));
const animateValue = (targetRef, startValue, endValue, suffix = "") => {
                gsap.to(targetRef.current, {
                    innerText: endValue + suffix, 
                    duration: 1.5,
                    snap: { innerText: 1 },
                    ease: "power3.out",
                    onUpdate: function() {
                        targetRef.current.innerText =  parseInt(this.targets()[0].innerText) + suffix;
                    }
                });
            };

const Let = () => {
    const contentRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const contentsRef = useRef(null);
    const statValueRef1 = useRef(null);
        const statValueRef2 = useRef(null);
        const statValueRef3 = useRef(null);
    const wysiwygRef = useRef(null);
    useEffect(() => {
        // gsap.to(contentsRef.current, {
        //     opacity: 1,
        //     y: 0,
        //     duration: 1,
        //     ease: 'power2.out'
        // });
        animateValue(statValueRef1, 0, 100, '%');
                animateValue(statValueRef2, 0, 13);
                animateValue(statValueRef3, 0, 80, '+');

        gsap.to([contentsRef.current,contentRef.current, imageWrapperRef.current, wysiwygRef.current], { 
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        stagger: 0.2,
                    });
    }, []);
    return (
        <PageHomepageBottom>
            <PageHomepageBottomHeading ref={contentsRef}>
                Great work for<br />great 
        <Box component="span" sx={{ display: "inline-block",
            //    width: 44, height: 44,
            width:'5rem', height: '5rem',paddingX:'1rem',
                   [`@media (max-width: 426px)`]: {
                    //    width:'24',
                    //    height:'24',
                    //    fontSize:'1rem',
                    width:'2rem', height: '2rem',paddingX:'0.5rem',
                       "& svg":{
                        //    width: '60%', 
                        //    height: '50%', 

                         
                       }
                   }
               }}>
       
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" style={{ }}>
    <path fill="currentColor" fill-rule="evenodd" d="M50 2.93C24.005 2.93 2.93 24.005 2.93 50S24.005 97.07 50 97.07 97.07 75.995 97.07 50 75.995 2.93 50 2.93ZM9.18 50C9.18 27.456 27.456 9.18 50 9.18S90.82 27.456 90.82 50 72.544 90.82 50 90.82 9.18 72.544 9.18 50Zm29.417-14.964a4.59 4.59 0 1 0-6.491 6.491 4.59 4.59 0 0 0 6.491-6.491Zm29.297 0a4.59 4.59 0 1 0-6.491 6.492 4.59 4.59 0 0 0 6.491-6.492ZM29.167 60.33a3.125 3.125 0 0 0-5.6 2.777 29.505 29.505 0 0 0 52.866 0 3.125 3.125 0 0 0-5.6-2.777 23.253 23.253 0 0 1-41.666 0Z" clip-rule="evenodd"></path>
</svg>
       </Box>




{/*                 
                <span role="img"  aria-label="smiling face"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" style={{width:'5rem', height: '5rem', }}>
    <path fill="currentColor" fill-rule="evenodd" d="M50 2.93C24.005 2.93 2.93 24.005 2.93 50S24.005 97.07 50 97.07 97.07 75.995 97.07 50 75.995 2.93 50 2.93ZM9.18 50C9.18 27.456 27.456 9.18 50 9.18S90.82 27.456 90.82 50 72.544 90.82 50 90.82 9.18 72.544 9.18 50Zm29.417-14.964a4.59 4.59 0 1 0-6.491 6.491 4.59 4.59 0 0 0 6.491-6.491Zm29.297 0a4.59 4.59 0 1 0-6.491 6.492 4.59 4.59 0 0 0 6.491-6.492ZM29.167 60.33a3.125 3.125 0 0 0-5.6 2.777 29.505 29.505 0 0 0 52.866 0 3.125 3.125 0 0 0-5.6-2.777 23.253 23.253 0 0 1-41.666 0Z" clip-rule="evenodd"></path>
</svg></span>  */}
people.
            </PageHomepageBottomHeading>

            <ContentWrapper>
                <PageHomepageBottomContent >
                    <WYSIWYGWysiwyg  ref={wysiwygRef}>
                        <p>We put people first, understanding that a well-crafted product
                            significantly impacts the lives of those who use it. By
                            empowering users, we're able to solve unique problems,
                            accelerate progress and unlock potential for our clients.</p>
                        <p>Our independent spirit drives our creative energy and approach
                            to technology, allowing us to ensure quality and consistently
                            deliver outstanding outcomes.</p>
                    </WYSIWYGWysiwyg>

                    <PageHomepageBottomLink href="/about" ref={contentRef}>
                        <ButtonWrapper>
                            About Us
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" strokeWidth="0.5" viewBox="0 0 14 13">
                                <path  d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z" vectorEffect="non-scaling-stroke"/>
                            </svg>
                        </ButtonWrapper>
                    </PageHomepageBottomLink>

                    <StatsSection>
                        <StatItem>
                            <StatValue  ref={statValueRef1}>0%</StatValue>
                            <StatLabel>In-house & independent</StatLabel>
                        </StatItem>
                        <StatItem>
                            <StatValue ref={statValueRef2}>0</StatValue>
                            <StatLabel>Years crafting digital experiences</StatLabel>
                        </StatItem>
                        <StatItem>
                            <StatValue ref={statValueRef3}>0+</StatValue>
                            <StatLabel>Awards from AWA, FWA, and Awwwards</StatLabel>
                        </StatItem>
                    </StatsSection>
                </PageHomepageBottomContent>

                <PageHomepageBottomImageWrapper ref={imageWrapperRef}>
                    <PicturePicture sx={{paddingLeft:'2rem', '@media (max-width: 426px)': {
    paddingLeft:'0rem'
    }}} >
                        <source
                            media="(min-width: 0px) and (max-width: 479px)"
                            srcSet="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/450x548/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/900x1096/filters:quality(80) 2x"
                        />
                        <source
                            media="(min-width: 480px) and (max-width: 991px)"
                            srcSet="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/912x1111/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/1824x2222/filters:quality(80) 2x"
                        />
                        <source
                            media="(min-width: 992px)"
                            srcSet="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/838x1021/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/1676x2042/filters:quality(80) 2x"
                        />
                        <img
                            src="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/450x548/filters:quality(80)"
                            loading="lazy"
                            width="750"
                            height="548"
                            alt="Two people having a conversation"
                            draggable="false"
                        />
                    </PicturePicture>
                </PageHomepageBottomImageWrapper>
            </ContentWrapper>
        </PageHomepageBottom>
    );
};

export default Let;