import { useState } from 'react';
import { Moon } from 'lucide-react';
import './DarkModeToggle.css';  


function DarkModeToggle() {
    const [isDarkModeActive, setIsDarkModeActive] = useState(false)

    return(
        <button 
            onClick={() => switchModes(setIsDarkModeActive)}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px'
            }}
        >

            <Moon></Moon>
        </button>
    )
}

const switchModes = (setIsDarkModeActive) => {
    console.log("clicked");
    const body = document.body;
    setIsDarkModeActive(prev => {
        const newMode = !prev;

        if (newMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }

        return newMode;
    });
}

export default DarkModeToggle