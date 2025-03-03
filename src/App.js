// import './App.css';
// import FooterInternationalContents from './FooterInternationalContents';
// import Nav from './Nav';
// import Header from './Header';
// import HomepageShowreel from './HomeShowreel';
// import We from './We';
// import { Work } from '@mui/icons-material';
// import Let from './Let';
// import Open from './Open';
// import Trails from './Trails';
// import TwoVideos from './TwoVideos';
// import FeedSlider from './FeedSlider';
// import Footer from './Footer';
// import Homelogos from './Homelogos';
// import { Box } from '@mui/material';

// function App() {
//   return (
//     <div  style={{backgroundColor:'#f2f2e9'}}>
      
//       <Header/>
//       <Nav/>
//       <Box>
//       <HomepageShowreel/>

//       <We/>
//       {/* <Homelogos/> */}
//       <Open/> 
//       </Box>
//       <TwoVideos/>
//       <Trails/>
//       {/* <Work/> */}
//       <Let/>
//       <FeedSlider/>
//       <Footer/>
//       <FooterInternationalContents/>
  
    
//     </div>
//   );
// }

// export default App;






import './App.css';
import FooterInternationalContents from './FooterInternationalContents';
import Nav from './Nav';
import Header from './Header';
import HomepageShowreel from './HomeShowreel';
import We from './We';
import { Work } from '@mui/icons-material';
import Let from './Let';
import Open from './Open';
import Trails from './Trails';
import TwoVideos from './TwoVideos';
import FeedSlider from './FeedSlider';
import Footer from './Footer';
import Homelogos from './Homelogos';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react'; 
import { gsap, ScrollTrigger } from 'gsap/all'; 

gsap.registerPlugin(ScrollTrigger); 

function App() {
  const boxSectionRef = useRef(null); 

  useEffect(() => {
    ScrollTrigger.create({
      trigger: boxSectionRef.current, 
      start: "top 80%", 
      end: "bottom 90%", 
      scrub: true, 
      markers: false, 
      onEnter: () => gsap.to('body', { backgroundColor: '#b488f2', duration: 0.5, overwrite: "auto" }),
      onLeave: () => gsap.to('body', { backgroundColor: '#f2f2e9', duration: 0.5, overwrite: "auto" }), 
      onEnterBack: () => gsap.to('body', { backgroundColor: '#b488f2', duration: 0.5, overwrite: "auto" }), 
      onLeaveBack: () => gsap.to('body', { backgroundColor: '#f2f2e9', duration: 0.5, overwrite: "auto" }), 
    });
  }, []);

  return (
    <div  
// style={{backgroundColor:'#f2f2e9'}}
>

      <Header/>
      <Nav/>
      <Box ref={boxSectionRef}> 
      <HomepageShowreel/>

      <We/>
      {/* <Homelogos/> */}
      <Open/>
      </Box>
      <TwoVideos/>
      <Trails/>
      {/* <Work/> */}
      <Let/>
<Box sx={{ 
  // position: "relative", height: "200vh", 
   }}>
      <FeedSlider/>
      <Footer/>
</Box>
      <FooterInternationalContents/>


    </div>
  );
}

export default App;
