import React, { useEffect } from 'react';
import { Grommet, Box, Button, Image } from 'grommet';
import { AppBar } from './components/AppBar/AppBar'
import { Outlet } from 'react-router-dom';
import { BottomNav } from './components/BottomNav/BottomNav'

const theme = {
  global: {
    colors: {
      brand: '#8e9e66'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px'
    }
  }
}



function App() {

  /*useEffect(()=>{
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log('👍', 'beforeinstallprompt', event);
      // Stash the event so it can be triggered later.
      //window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      //divInstall.classList.toggle('hidden', false);
    });
  }, [])*/

  return (
    <Grommet theme={theme} full>
      <Box fill justify='around'>
        <AppBar logo={require('./assets/logo_nav_bar.png')}  />
        <Box direction='row' align='baseline' flex overflow={{ horizontal: 'hidden' }}>
          <Outlet />
        </Box>
        <BottomNav />
      </Box>
    </Grommet>
  );
}

export default App;
