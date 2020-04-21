import React from 'react'
import footerStyles from './footer.module.scss'
import { FaTwitter, FaGithub,FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer =()=>{
    return(
        <footer className = {footerStyles.footer} >
                <div className="footer-p-div">
                <p>Copyright Alexander's Website, © 2020 </p>
                </div>
                <div className={footerStyles.social} >
                    <div className={footerStyles.github}>
                       <a href="https://github.com/alexjungaalto" target="_blank" rel="noopener noreferrer" className={footerStyles.gitColor} >
                           <FaGithub/></a>
                    </div>

                    <div className={footerStyles.twitter}>
                        <a href="https://twitter.com/alexjungaalto" target="_blank" rel="noopener noreferrer" className={footerStyles.twitterColor}>
                            <FaTwitter/></a>
                    </div>
                    <div className={footerStyles.youtube}>
                        <a href="https://www.youtube.com/user/alexjung111" target="_blank" rel="noopener noreferrer" className={footerStyles.youtubeColor} >
                            <FaYoutube/></a>
                    </div>
                    <div className={footerStyles.linkedin}>
                    <a href="https://www.linkedin.com/in/aljung/" target="_blank" rel="noopener noreferrer" className={footerStyles.linkedinColor} >
                        <FaLinkedin/></a>
                    </div>
                </div>

        </footer>
    )
}
export default Footer 
