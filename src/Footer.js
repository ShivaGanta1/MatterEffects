import React, { useRef, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import gsap from 'gsap';

const Footer = () => {
  const wordTickerRef = useRef(null);
  const words = ["epic", "fun", "delightful", "beautiful", "original", "extraordinary", "engaging", "click", "wonderful"];

  useEffect(() => {
    let currentWordIndex = 0;
    const ticker = wordTickerRef.current;
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: false });

    tl.to(ticker, { opacity: 0, yPercent: 25, duration: 0.6, ease: "power2.inOut", onComplete: () => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      ticker.textContent = words[currentWordIndex];
    }}).to(ticker, { opacity: 1, yPercent: 0, duration: 0.6, ease: "power2.inOut" });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box component="footer" sx={{ px: 8, py: 3, [`@media (max-width: 426px)`]: {
        px: 2,
       }, }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{fontSize:'4rem', paddingBottom:"4rem", fontWeight:'semibold' ,
      
      [`@media (max-width: 426px)`]: {
        fontSize:'2rem',
        '& svg': {
            width:'24',
            height:'24'
        }
       },
       [`@media (max-width: 426px)`]: {
        fontSize:'1.5rem',
        '& svg': {
            width:'24',
            height:'24'
        }
       },
      '&:hover': { 
      color: '#91f288', 
      '& svg': { transform: 'translateX(10px)' } 
    }}}>
        <a href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span>Let’s make </span>
          
          <Box component="span" sx={{ display: "inline-block",
        width: 44, height: 44,
            [`@media (max-width: 426px)`]: {
                width:'24',
                height:'24',
                fontSize:'1rem',
                "& svg":{
                    width: '60%', 
                    height: '50%', 
                  
                }
            }
        }}>

    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 34 33"  strokeWidth="0.5" viewBox="0 0 14 13" style={{ marginLeft: 8 }}>
        <path fill="#91f288" stroke="#91f288" d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z" vectorEffect="non-scaling-stroke"></path>
    </svg>
</Box>

          
           {/* <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 34 33" fill="none" strokeWidth="0.5" viewBox="0 0 14 13" style={{ marginLeft: 8 }}>
              <path fill="#91f288" stroke="#91f288" d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z" vectorEffect="non-scaling-stroke"></path>
            </svg> */}
            <br />
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            something 
            <Box ref={wordTickerRef} sx={{ display: 'inline-block', ml: 1, overflow: 'hidden' }}>epic</Box>
           
          </Box>
        </a>
      </Typography>
      
      <Box sx={{ mt: 9,  paddingBottom:"4rem",
        [`@media (max-width: 426px)`]: {
            mt: 1,
           },
       }}>
     
        <Typography variant="h6" sx={{color:'black'}}> <span style={{ marginRight: 8 }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="" style={{ '--width': '16', '--height': '16' }}>
                <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" d="M.8 8a7.2 7.2 0 1 0 14.4 0A7.2 7.2 0 0 0 .8 8Z"></path>
                <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.64" d="M6.643 15.072c-1.005-1.408-1.683-4.051-1.683-7.04S5.638 2.336 6.643.96M9.357 15.072c1.005-1.408 1.683-4.051 1.683-7.04S10.362 2.336 9.357.96M.8 8h14.4M1.632 11.36h12.736M1.632 4.64h12.736"></path>
              </svg></span>We work globally</Typography>
        <Button
          sx={{ color: 'inherit', padding: 0, minWidth: 0, fontWeight: 'normal', borderRadius: 0, textTransform: 'none', '&:hover': {backgroundColor:'none' ,
      
      '& svg': { transform: 'translateX(10px)' } } }}
        >
          Submit a brief
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" fill="none" strokeWidth="0.5" viewBox="0 0 14 13" style={{ marginLeft: 8 }}>
            <path fill="currentColor" stroke="currentColor" d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z" vectorEffect="non-scaling-stroke"></path>
          </svg>
        </Button>
        <Typography variant="body1" sx={{'&:hover': { textDecorationLine: 'underline'}}} >
          <a href="" style={{ textDecoration: 'none', color: 'black', }}>
            contact@humaan.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
