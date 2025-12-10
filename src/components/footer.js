import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer">
        <div className="footer-diagonal-accent"></div>
        <div className="footer-content-wrapper">
          <div className="footer-main-section">
            <div className="footer-brand-column">
              <div className="footer-logo">
                <span className="footer-logo-text">VividResume</span>
                <div className="footer-logo-underline"></div>
              </div>
              <p className="footer-tagline">
                {' '}
                Crafting bold, interactive resume experiences that make lasting
                impressions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-social-column">
              <h3 className="footer-social-title">Connect With Me</h3>
              <div className="footer-social-grid">
                <a href="https://linkedin.com">
                  <div aria-label="LinkedIn" className="footer-social-link">
                    <div className="footer-social-icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-social-label">LinkedIn</span>
                  </div>
                </a>
                <a href="https://github.com">
                  <div aria-label="GitHub" className="footer-social-link">
                    <div className="footer-social-icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-social-label">GitHub</span>
                  </div>
                </a>
                <a href="https://twitter.com">
                  <div aria-label="Twitter" className="footer-social-link">
                    <div className="footer-social-icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-social-label">Twitter</span>
                  </div>
                </a>
                <a href="https://instagram.com">
                  <div aria-label="Instagram" className="footer-social-link">
                    <div className="footer-social-icon-wrapper">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-social-label">Instagram</span>
                  </div>
                </a>
              </div>
              <a href="mailto:contact@vividresume.com?subject=">
                <div className="footer-email-cta">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <span>contact@vividresume.com</span>
                </div>
              </a>
            </div>
            <div className="footer-links-column">
              <h3 className="footer-links-title">Quick Links</h3>
              <nav aria-label="Footer navigation" className="footer-nav">
                <a href="#about">
                  <div className="footer-nav-link">
                    <span>About Me</span>
                  </div>
                </a>
                <a href="#skills">
                  <div className="footer-nav-link">
                    <span>Skills</span>
                  </div>
                </a>
                <a href="#experience">
                  <div className="footer-nav-link">
                    <span>Experience</span>
                  </div>
                </a>
                <a href="#projects">
                  <div className="footer-nav-link">
                    <span>Projects</span>
                  </div>
                </a>
                <a href="#education">
                  <div className="footer-nav-link">
                    <span>Education</span>
                  </div>
                </a>
                <a href="#certifications">
                  <div className="footer-nav-link">
                    <span>Certifications</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="footer-nav-link">
                    <span>Contact</span>
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                <span>© 2025 VividResume. Made with</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="footer-footer-heart-icon"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>and passion</span>
              </p>
              <button aria-label="Scroll to top" className="footer-scroll-top">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m5 12l7-7l7 7m-7 7V5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes heartbeat {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-scroll-top">
(function(){
  const scrollTopButton = document.querySelector(".footer-scroll-top")

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
