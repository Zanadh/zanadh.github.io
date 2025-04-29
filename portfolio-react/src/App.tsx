import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Global styles={globalStyles} />
      <ThemeToggle />
      <main>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </ThemeProvider>
  );
};

export default App;
