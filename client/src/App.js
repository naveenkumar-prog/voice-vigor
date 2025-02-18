import {ThemeProvider, styled} from 'styled-components'
import {lightTheme} from './utils/Themes'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Authentication from './pages/Authentication';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import Tutorial from './pages/Tutorial';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const Container = styled.div`
  
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${( {theme} ) => theme.bg};
  color: ${( {theme} ) => theme.text_primary};
  overflow: hidden;
  transition: all 0.25s ease;
  
` 

function App() {

  const {currentUser} = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {currentUser ? (
        <Container>
          <Navbar currentUser = {currentUser}/>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/workouts" exact element={<Workout/>} />
            <Route path="/tutorials" exact element={<Tutorial />} />
            <Route path="/blogs" exact element={<Blog />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </Container>
      ) : (
        <Container>
          <Authentication />
      </Container>
      )}
      
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
