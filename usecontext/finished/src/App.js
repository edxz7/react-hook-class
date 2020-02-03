import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import ThemeContextProvider from './contexts/context';
function App() {
  return (
    <div className="App"> 
    <ThemeContextProvider>
      <Main/>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
