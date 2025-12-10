import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-logo, .navigation-link, .navigation-link::before, .navigation-link-cta, .navigation-toggle, .navigation-close, .navigation-mobile-overlay, .navigation-mobile-link, .navigation-mobile-link::before {
  transition: none;
  animation: none;
}
.navigation-mobile-item {
  opacity: 1;
  transform: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-container">
          <a href="#">
            <div className="navigation-logo">
              <span className="navigation-logo-text">Vivid</span>
              <span className="navigation-logo-accent">Resume</span>
            </div>
          </a>
          <ul className="navigation-links">
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link">
                  <span>About Me</span>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link">
                  <span>Skills</span>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link">
                  <span>Experience</span>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link">
                  <span>Projects</span>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link">
                  <span>Education</span>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link">
                  <span>Certifications</span>
                </div>
              </a>
            </li>
            <li className="navigation-link-item">
              <a href="#">
                <div className="navigation-link navigation-link-cta">
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="#">
              <div className="navigation-logo">
                <span className="navigation-logo-text">Vivid</span>
                <span className="navigation-logo-accent">Resume</span>
              </div>
            </a>
            <button
              aria-label="Close navigation menu"
              className="navigation-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>About Me</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Skills</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Experience</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Projects</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Education</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link">
                  <span>Certifications</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="#">
                <div className="navigation-mobile-link navigation-mobile-link-cta">
                  <span>
                    {' '}
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes slideInMobile {to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-mobile-toggle">
(function(){
  const navToggle = document.querySelector(".navigation-toggle")
  const navClose = document.querySelector(".navigation-close")
  const navOverlay = document.querySelector(".navigation-mobile-overlay")
  const navMobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function openMobileNav() {
    navOverlay.classList.add("navigation-active")
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  function closeMobileNav() {
    navOverlay.classList.remove("navigation-active")
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMobileNav)
  navClose.addEventListener("click", closeMobileNav)

  navMobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav)
  })

  navOverlay.addEventListener("click", (e) => {
    if (e.target === navOverlay) {
      closeMobileNav()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      navOverlay.classList.contains("navigation-active")
    ) {
      closeMobileNav()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
