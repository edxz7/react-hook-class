import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        theme:{
            light: { text: '#555', ui: '#ddd', bg: '#eee' },
            dark: { text: '#ddd', ui: '#333', bg: '#555'},
        },
        selectedTheme:{ text: '#555', ui: '#ddd', bg: '#eee' }
    }

    toggleTheme= () => {
        this.setState({ 
            isLightTheme: !this.state.isLightTheme,
            selectedTheme: this.state.isLightTheme ? this.state.theme.light : this.state.theme.dark
         });
      }
    render() {
        return (
            <div>
           <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
              {this.props.children}
            </ThemeContext.Provider>           
            </div>
        )
    }
}

export default ThemeContextProvider;
