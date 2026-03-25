import { Linkedin, Github} from 'lucide-react';
import './HeroSection.css' 

function HeroSection() {
    return(
        <div className="HeroSection">
            <div className='HeroName'>
                Julius Lam
            </div>
            <div className='HeroEmail'>
                
            </div>
            <div className='HeroLogos'>
                <a href="https://github.com/lamjulius"
                   target="_blank"
                   rel="noopener noreferrer">
                    <Github></Github>
                </a>
                <a href="https://www.linkedin.com/in/lamjulius/"
                   target="_blank"
                   rel="noopener noreferrer">
                    <Linkedin></Linkedin> 
                </a>
            </div>
            
        </div>
    )
}

export default HeroSection