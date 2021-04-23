import { Children } from 'react';
import NavBarTop from './NavBarTop';
import Head from 'next/head'; 
import ReactGA from 'react-ga';
// import React, { useEffect } from 'react';




  

function Layout(props) {    


    ReactGA.initialize('UA-108419756-6');
    ReactGA.pageview('/`');
  
  
  
    useEffect(() => {
        
  
    }, [])
  
  


  return (
    <div className="min-h-screen">
        <Head>
            <title>M8 Software</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}

        </Head>
        <meta name="description" content="Web Apps.  Websites.  Web Services."/>
        <NavBarTop> </NavBarTop>
        
            {props.children}
        <footer  className="self-center text-center">
                    <hr></hr>
                    copyright M8 Software 2021.
   
      </footer>
    </div>)
    
  };

export default Layout;