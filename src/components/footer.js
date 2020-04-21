import React from 'react'
import footerStyles from './footer.module.scss'

const Footer =()=>{
    return(
        <footer className = {footerStyles.footer} >
                <div className="footer-p-div">
                <p>Copyright Alexander's Website, © 2020 </p>
                </div>
                <div className={footerStyles.social} >
                    <div className={footerStyles.github}>
                       <a href="https://github.com/alexjungaalto" target="_blank" rel="noopener noreferrer" className="g" >
                           <i className="fab fa-github fa-2x"></i></a>
                    </div>

                    <div className={footerStyles.twitter}>
                        <a href="https://twitter.com/alexjungaalto" target="_blank" rel="noopener noreferrer" className="t">
                            <i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                    <div className={footerStyles.youtube}>
                        <a href="https://www.youtube.com/user/alexjung111" target="_blank" rel="noopener noreferrer" className="y" >
                            <i className="fab fa-youtube fa-2x"></i></a>
                    </div>
                    <div className={footerStyles.linkedin}>
                    <a href="https://www.linkedin.com/in/aljung/" target="_blank" rel="noopener noreferrer" className="l" >
                        <i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                </div>
        </footer>
    )
}
export default Footer 


/* import React from 'react'
import footerStyles from './footer.module.scss'

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">Code Blog</h4>
    <p className="text-center">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="google"
          >
            <i className="fab fa-google fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer */