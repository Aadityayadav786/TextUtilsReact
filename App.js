import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleStyle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Navbar title="TextUtils" aboutText="About" toggleStyle={toggleStyle} isDarkMode={isDarkMode} />
            <div className={`container my-3 ${isDarkMode ? 'text-light bg-dark' : 'text-dark bg-light'}`}>
                <TextForm heading="Enter the text to analyze below" toggleStyle={toggleStyle} isDarkMode={isDarkMode} />
            </div>
            <About toggleStyle={toggleStyle} isDarkMode={isDarkMode} />
        </>
    );
}

export default App;
