import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Courageous Fatherly Spoonbill</title>
        <meta property="og:title" content="Courageous Fatherly Spoonbill" />
        <link
          rel="canonical"
          href="https://courageous-fatherly-spoonbill-drawwp.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <video
          src="https://videos.pexels.com/video-files/35085208/14863297_640_360_24fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/35085208/pictures/preview-0.jpg"
          autoPlay="true"
          playsInline="true"
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-name hero-title">Alex Rivera</h1>
          <div className="hero-subtitle-wrapper">
            <span className="home-hero-subtitle hero-subtitle">
              Creative Full-Stack Developer
            </span>
          </div>
          <p className="hero-tagline">
            {' '}
            Transforming ideas into stunning digital experiences with
            cutting-edge technology and vibrant design
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="hero-cta-group">
            <button className="btn hero-cta-primary btn-lg btn-primary">
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
                  <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10l5 5l5-5"></path>
                </g>
              </svg>
              <span>View Resume</span>
            </button>
            <button className="btn btn-outline btn-lg hero-cta-secondary">
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
              <span>Contact Me</span>
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="hero-scroll-text">Scroll to explore</span>
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 9l6 6l6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </section>
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-header">
            <h2 className="section-title">Welcome to My World</h2>
            <p className="section-subtitle">
              {' '}
              Passionate about creating innovative digital solutions
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="about-timeline">
            <div className="about-timeline-line"></div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">Who I Am</h3>
                <p className="section-content">
                  {' '}
                  I&apos;m a creative full-stack developer with a passion for
                  building beautiful, functional, and user-centric digital
                  experiences. With expertise spanning modern web technologies,
                  I thrive on turning complex problems into elegant solutions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">What I Do</h3>
                <p className="section-content">
                  {' '}
                  From responsive web applications to interactive user
                  interfaces, I specialize in crafting seamless experiences that
                  blend aesthetics with performance. My work spans front-end
                  development, back-end architecture, and everything in between.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="about-timeline-item">
              <div className="about-timeline-marker"></div>
              <div className="about-timeline-content">
                <h3 className="about-timeline-title">My Approach</h3>
                <p className="section-content">
                  {' '}
                  I believe in continuous learning, attention to detail, and
                  building with purpose. Every project is an opportunity to push
                  boundaries, embrace new technologies, and deliver results that
                  exceed expectations.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <nav className="about-nav">
            <a href="#skills">
              <div className="about-nav-link">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>Skills</span>
              </div>
            </a>
            <a href="#projects">
              <div className="about-nav-link">
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
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
                <span>Projects</span>
              </div>
            </a>
            <a href="#contact">
              <div className="about-nav-link">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>Contact</span>
              </div>
            </a>
          </nav>
        </div>
      </section>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="section-title">Skills &amp; Expertise</h2>
            <p className="section-subtitle">
              A glimpse into my technical arsenal
            </p>
          </div>
          <div className="skills-grid">
            <div className="skills-card">
              <div className="skills-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="skills-card-title">Front-End Development</h3>
              <p className="section-content">
                {' '}
                React, Vue.js, Next.js, TypeScript, Tailwind CSS, SASS
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="skills-progress-bar">
                <div className="home-skills-progress-fill1 skills-progress-fill"></div>
              </div>
              <span className="skills-progress-label">Expert 95%</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
              </div>
              <h3 className="skills-card-title">Back-End Engineering</h3>
              <p className="section-content">
                {' '}
                Node.js, Python, Django, PostgreSQL, MongoDB, REST APIs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="skills-progress-bar">
                <div className="home-skills-progress-fill2 skills-progress-fill"></div>
              </div>
              <span className="skills-progress-label">Advanced 88%</span>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle
                      r=".5"
                      cx="13.5"
                      cy="6.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="17.5"
                      cy="10.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="6.5"
                      cy="12.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="8.5"
                      cy="7.5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
              </div>
              <h3 className="skills-card-title">UI/UX Design</h3>
              <p className="section-content">
                {' '}
                Figma, Adobe XD, Prototyping, Responsive Design, Accessibility
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="skills-progress-bar">
                <div className="home-skills-progress-fill3 skills-progress-fill"></div>
              </div>
              <span className="skills-progress-label">Expert 90%</span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="portfolio-section">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              {' '}
              Showcasing my best work and creative solutions
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="portfolio-carousel">
            <button
              aria-label="Previous project"
              className="portfolio-nav-prev portfolio-nav-btn"
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="m12 19l-7-7l7-7m7 7H5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="portfolio-carousel-track">
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img
                    alt="E-Commerce Platform"
                    src="https://images.pexels.com/photos/27086215/pexels-photo-27086215.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-tag">Web App</span>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">E-Commerce Platform</h3>
                  <p className="section-content">
                    {' '}
                    Full-stack marketplace with real-time inventory, secure
                    payments, and responsive design. Built with React, Node.js,
                    and MongoDB.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <a href="#">
                    <div className="portfolio-card-link">
                      <span>View Case Study</span>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img
                    alt="Creative Portfolio Site"
                    src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-tag">Design</span>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">
                    Creative Portfolio Site
                  </h3>
                  <p className="section-content">
                    {' '}
                    Award-winning portfolio showcasing interactive animations,
                    scroll-triggered effects, and stunning visual storytelling
                    for a design agency.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <a href="#">
                    <div className="portfolio-card-link">
                      <span>View Case Study</span>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img
                    alt="Project Management Dashboard"
                    src="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-tag">SaaS</span>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">
                    Project Management Dashboard
                  </h3>
                  <p className="section-content">
                    {' '}
                    Comprehensive task tracking system with real-time
                    collaboration, data visualization, and team management
                    features using Vue.js and Firebase.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <a href="#">
                    <div className="portfolio-card-link">
                      <span>View Case Study</span>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img
                    alt="Mobile Fitness App"
                    src="https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-tag">Mobile</span>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">Mobile Fitness App</h3>
                  <p className="section-content">
                    {' '}
                    Cross-platform fitness tracking application with workout
                    plans, progress analytics, and social features. Built with
                    React Native and GraphQL.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                  <a href="#">
                    <div className="portfolio-card-link">
                      <span>View Case Study</span>
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h14m-7-7l7 7l-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <button
              aria-label="Next project"
              className="portfolio-nav-next portfolio-nav-btn"
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="portfolio-indicators">
            <button
              aria-label="Go to project 1"
              className="portfolio-indicator-active portfolio-indicator"
            ></button>
            <button
              aria-label="Go to project 2"
              className="portfolio-indicator"
            ></button>
            <button
              aria-label="Go to project 3"
              className="portfolio-indicator"
            ></button>
            <button
              aria-label="Go to project 4"
              className="portfolio-indicator"
            ></button>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="process-wrapper">
          <div className="process-header">
            <h2 className="section-title">My Workflow</h2>
            <p className="section-subtitle">How I bring your vision to life</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-number">
                <span>01</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="process-step-content">
                <h3 className="process-step-title">Discovery &amp; Planning</h3>
                <p className="section-content">
                  {' '}
                  Understanding your goals, target audience, and project
                  requirements through collaborative discussions and research.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="process-connector"></div>
            </div>
            <div className="process-step">
              <div className="process-step-number">
                <span>02</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle
                      r=".5"
                      cx="13.5"
                      cy="6.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="17.5"
                      cy="10.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="6.5"
                      cy="12.5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      r=".5"
                      cx="8.5"
                      cy="7.5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="process-step-content">
                <h3 className="process-step-title">Design &amp; Prototype</h3>
                <p className="section-content">
                  {' '}
                  Creating wireframes, mockups, and interactive prototypes to
                  visualize the final product before development begins.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="process-connector"></div>
            </div>
            <div className="process-step">
              <div className="process-step-number">
                <span>03</span>
              </div>
              <div className="process-step-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="process-step-content">
                <h3 className="process-step-title">
                  Development &amp; Delivery
                </h3>
                <p className="section-content">
                  {' '}
                  Building with clean code, rigorous testing, and continuous
                  communication to ensure quality and on-time delivery.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">What Clients Say</h2>
            <p className="section-subtitle">
              Trusted by professionals worldwide
            </p>
          </div>
          <div className="testimonials-spotlight">
            <div className="testimonials-dimmed testimonials-card-left testimonials-card">
              <div className="testimonials-card-content">
                <div className="testimonials-rating">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="testimonials-quote">
                  {' '}
                  Working with Alex was seamless. The attention to detail and
                  technical expertise brought our vision to life perfectly.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="Maria Chen"
                    src="https://images.pexels.com/photos/27086176/pexels-photo-27086176.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <span className="testimonials-author-name">Maria Chen</span>
                    <span className="testimonials-author-role">
                      {' '}
                      Product Manager, TechStart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card-center testimonials-card">
              <div className="testimonials-card-content">
                <div className="testimonials-rating">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="testimonials-quote">
                  {' '}
                  Exceptional work! Alex delivered a stunning website that
                  exceeded all expectations. The design is modern, responsive,
                  and performs flawlessly across all devices. Highly
                  recommended!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="Sarah Johnson"
                    src="https://images.pexels.com/photos/27086273/pexels-photo-27086273.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <span className="testimonials-author-name">
                      Sarah Johnson
                    </span>
                    <span className="testimonials-author-role">
                      {' '}
                      CEO, DesignHub Studios
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-card-right testimonials-dimmed testimonials-card">
              <div className="testimonials-card-content">
                <div className="testimonials-rating">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="testimonials-quote">
                  {' '}
                  Outstanding technical skills combined with creative vision.
                  The project was completed ahead of schedule with remarkable
                  quality.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="testimonials-author">
                  <img
                    alt="David Park"
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                    className="testimonials-avatar"
                  />
                  <div className="testimonials-author-info">
                    <span className="testimonials-author-name">David Park</span>
                    <span className="testimonials-author-role">
                      {' '}
                      Founder, InnovateTech
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-nav">
            <button
              aria-label="Previous testimonial"
              className="testimonials-nav-prev testimonials-nav-btn"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="m12 19l-7-7l7-7m7 7H5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              className="testimonials-nav-next testimonials-nav-btn"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7l7 7l-7 7"
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
      </section>
      <section id="contact" className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="section-title cta-title">
                Let&apos;s Create Something Amazing
              </h2>
              <p className="cta-description section-content">
                {' '}
                Ready to bring your vision to life? Whether you need a stunning
                website, a powerful web application, or a complete digital
                transformation, I&apos;m here to help. Let&apos;s collaborate
                and build something extraordinary together.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="cta-buttons">
                <button className="btn cta-button-primary btn-xl btn-primary">
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
                  <span>Get In Touch</span>
                </button>
                <button className="cta-button-secondary btn btn-secondary btn-xl">
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
                      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10l5 5l5-5"></path>
                    </g>
                  </svg>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
            <div className="cta-decorative">
              <div className="cta-circle-1 cta-decorative-circle"></div>
              <div className="cta-decorative-circle cta-circle-2"></div>
              <div className="cta-decorative-circle cta-circle-3"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
        @keyframes heroFadeIn {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes heroTitleSlide {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes heroSubtitleSlide {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes heroTaglineSlide {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 0.95;
transform: translateY(0);}}@keyframes heroCTASlide {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes scrollBounce {0%,100% {transform: translateX(-50%) translateY(0);}
50% {transform: translateX(-50%) translateY(10px);}}@keyframes timelineFadeIn {from {opacity: 0;
transform: translateX(-30px);}
to {opacity: 1;
transform: translateX(0);}}@keyframes skillsFadeIn {from {opacity: 0;
transform: translateY(40px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes processStepFadeIn {from {opacity: 0;
transform: translateY(40px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes ctaFadeIn {from {opacity: 0;
transform: translateY(40px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes ctaFloating {0%,100% {transform: translate(0, 0) scale(1);}
50% {transform: translate(20px, 20px) scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="portfolio-carousel">
(function(){
  const portfolioCarousel = document.querySelector(".portfolio-carousel-track")
  const portfolioCards = document.querySelectorAll(".portfolio-card")
  const portfolioPrevBtn = document.querySelector(".portfolio-nav-prev")
  const portfolioNextBtn = document.querySelector(".portfolio-nav-next")
  const portfolioIndicators = document.querySelectorAll(".portfolio-indicator")

  let currentPortfolioIndex = 0

  function scrollToPortfolioCard(index) {
    const cardWidth = portfolioCards[0].offsetWidth
    const gap = parseInt(getComputedStyle(portfolioCarousel).gap)
    const scrollPosition = (cardWidth + gap) * index

    portfolioCarousel.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    })

    updatePortfolioIndicators(index)
    currentPortfolioIndex = index
  }

  function updatePortfolioIndicators(index) {
    portfolioIndicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("portfolio-indicator-active")
      } else {
        indicator.classList.remove("portfolio-indicator-active")
      }
    })
  }

  portfolioPrevBtn.addEventListener("click", () => {
    const newIndex =
      currentPortfolioIndex > 0
        ? currentPortfolioIndex - 1
        : portfolioCards.length - 1
    scrollToPortfolioCard(newIndex)
  })

  portfolioNextBtn.addEventListener("click", () => {
    const newIndex =
      currentPortfolioIndex < portfolioCards.length - 1
        ? currentPortfolioIndex + 1
        : 0
    scrollToPortfolioCard(newIndex)
  })

  portfolioIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      scrollToPortfolioCard(index)
    })
  })

  portfolioCarousel.addEventListener("scroll", () => {
    const scrollLeft = portfolioCarousel.scrollLeft
    const cardWidth = portfolioCards[0].offsetWidth
    const gap = parseInt(getComputedStyle(portfolioCarousel).gap)
    const index = Math.round(scrollLeft / (cardWidth + gap))

    if (index !== currentPortfolioIndex) {
      updatePortfolioIndicators(index)
      currentPortfolioIndex = index
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="testimonials-carousel">
(function(){
  const testimonialsSpotlight = document.querySelector(
    ".testimonials-spotlight"
  )
  const testimonialsCards = Array.from(
    document.querySelectorAll(".testimonials-card")
  )
  const testimonialsPrevBtn = document.querySelector(".testimonials-nav-prev")
  const testimonialsNextBtn = document.querySelector(".testimonials-nav-next")

  let currentTestimonialIndex = 1

  function rotateTestimonials(direction) {
    if (direction === "next") {
      currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonialsCards.length
    } else {
      currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonialsCards.length) %
        testimonialsCards.length
    }

    updateTestimonialsLayout()
  }

  function updateTestimonialsLayout() {
    testimonialsCards.forEach((card, index) => {
      card.classList.remove(
        "testimonials-card-center",
        "testimonials-card-left",
        "testimonials-card-right",
        "testimonials-dimmed"
      )

      if (index === currentTestimonialIndex) {
        card.classList.add("testimonials-card-center")
      } else {
        card.classList.add("testimonials-dimmed")

        if (
          index ===
          (currentTestimonialIndex - 1 + testimonialsCards.length) %
            testimonialsCards.length
        ) {
          card.classList.add("testimonials-card-left")
        } else if (
          index ===
          (currentTestimonialIndex + 1) % testimonialsCards.length
        ) {
          card.classList.add("testimonials-card-right")
        }
      }
    })

    testimonialsSpotlight.innerHTML = ""

    const leftIndex =
      (currentTestimonialIndex - 1 + testimonialsCards.length) %
      testimonialsCards.length
    const rightIndex = (currentTestimonialIndex + 1) % testimonialsCards.length

    testimonialsSpotlight.appendChild(
      testimonialsCards[leftIndex].cloneNode(true)
    )
    testimonialsSpotlight.appendChild(
      testimonialsCards[currentTestimonialIndex].cloneNode(true)
    )
    testimonialsSpotlight.appendChild(
      testimonialsCards[rightIndex].cloneNode(true)
    )
  }

  testimonialsPrevBtn.addEventListener("click", () => {
    rotateTestimonials("prev")
  })

  testimonialsNextBtn.addEventListener("click", () => {
    rotateTestimonials("next")
  })

  updateTestimonialsLayout()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon199"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text24">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
