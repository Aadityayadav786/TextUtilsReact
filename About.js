import React, { useState } from 'react';

export default function About() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleStyle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const accordionStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        border: isDarkMode ? '1px solid white' : '1px solid black',
    };

    return (
        <div className="container" style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={accordionStyle}>
                            Features``
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={accordionStyle}>
                            <strong>Welcome to our website! We are dedicated to simplifying your text editing experience with our innovative features. With our text capitalization tool, transform your text effortlessly with a single click. Whether it's making your headings stand out or ensuring proper capitalization in your documents, we've got you covered. Say goodbye to manual formatting and let us streamline your writing process.</strong>
                        </div>
                    </div>

                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={accordionStyle}>
                            Features
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={accordionStyle}>
                            <strong>
Experience the power of anticipation with our text preview feature. See how your text will appear before finalizing it, ensuring coherence and aesthetics in your documents. Whether it's crafting compelling social media posts or drafting professional emails, our preview function empowers you to fine-tune your message with confidence.

</strong>
                        </div>
                    </div>
                </div>
                
                
            </div>

            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">
                    {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
                </button>
            </div>
        </div>
    );
}
