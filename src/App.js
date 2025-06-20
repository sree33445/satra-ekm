import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Code,
  Cloud,
  Cog,
  Users,
  Globe,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="service-icon" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
    },
    {
      icon: <Cloud className="service-icon" />,
      title: "Cloud Solutions & Migration",
      description:
        "Seamless cloud transformation with enhanced scalability, security, and cost optimization.",
    },
    {
      icon: <Cog className="service-icon" />,
      title: "Business Process Automation",
      description:
        "Streamline operations and boost efficiency through intelligent automation solutions.",
    },
    {
      icon: <Users className="service-icon" />,
      title: "IT Strategy & Consulting",
      description:
        "Strategic technology roadmaps aligned with your business objectives and growth plans.",
    },
    {
      icon: <Globe className="service-icon" />,
      title: "Web & Mobile Development",
      description:
        "Responsive, user-centric applications that deliver exceptional digital experiences.",
    },
    {
      icon: <BarChart3 className="service-icon" />,
      title: "Data Analytics & BI",
      description:
        "Transform data into actionable insights for informed decision-making and competitive advantage.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>

        {/* Animated background elements */}
        <div className="hero-bg">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
        </div>

        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-inner">
            <div className="hero-badge">
              <CheckCircle className="badge-icon" />
              Trusted IT Partner Since 2019
            </div>

            <h1 className="hero-title">
              <span className="title-line">Net Solve</span>
              <span className="title-gradient">Training Consulting Solutions Pvt Ltd</span>
            </h1>

            <p className="hero-subtitle">
              Empowering businesses with innovative IT solutions that drive
              digital transformation and accelerate growth
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary">
                Get Started Today
                <ArrowRight className="btn-icon" />
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="hero-scroll">
          <ChevronRight className="scroll-icon" />
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="main">
        {/* About Section */}
        <section className="about">
          <div className="about-content">
            <div className="section-badge">About Our Company</div>
            <h2 className="section-title">
              Leading the Digital
              <span className="title-gradient"> Revolution</span>
            </h2>
            <p className="section-description">
              Sathra Consulting Services Pvt Ltd is a leading provider of IT
              consulting, software development, and digital transformation
              services. We help organizations harness technology to drive
              growth, efficiency, and innovation in today's rapidly evolving
              digital landscape.
            </p>
            <div className="values">
              {["Innovation", "Excellence", "Reliability", "Growth"].map(
                (value, index) => (
                  <span key={index} className="value-tag">
                    {value}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="services-header">
            <div className="section-badge section-badge-indigo">
              Our Expertise
            </div>
            <h2 className="section-title">
              Comprehensive IT
              <span className="title-gradient"> Solutions</span>
            </h2>
            <p className="section-description">
              From strategy to implementation, we deliver end-to-end technology
              solutions that transform businesses and create competitive
              advantages.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${
                  activeService === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-link">
                  Learn More
                  <ArrowRight className="link-icon" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery">
          <div className="gallery-header">
            <h2 className="section-title">
              <span className="title-gradient">Gallery</span>
            </h2>
            <p className="section-description">
              Explore our office environment and workspace facilities.
            </p>
          </div>
          <div className="gallery-grid">
            {/* Replace src with your actual image paths or URLs */}
            <img
              src="/images/1.jpg"
              alt="Office View 1"
              className="gallery-img"
            />
            <img
              src="/images/2.jpg"
              alt="Office View 2"
              className="gallery-img"
            />
            <img
              src="/images/3.jpg"
              alt="Office View 3"
              className="gallery-img"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <div className="contact-card">
            <div className="contact-overlay"></div>
            <div className="contact-bg-circle"></div>

            <div className="contact-content">
              <div className="contact-header">
                <h2 className="contact-title">
                  Ready to Transform
                  <span className="title-gradient-light"> Your Business?</span>
                </h2>
                <p className="contact-subtitle">
                  Get in touch with our experts to discuss your next project and
                  discover how we can help you achieve your goals.
                </p>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail className="icon" />
                  </div>
                  <h3 className="contact-item-title">Email Us</h3>
                  <a
                    href="mailto:info@sathraconsulting.com"
                    className="contact-link"
                  >
                    info@sathraconsulting.com
                  </a>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone className="icon" />
                  </div>
                  <h3 className="contact-item-title">Call Us</h3>
                  <p className="contact-text">
                    0484-3526142
                    <br />
                    +91-6238797751
                  </p>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin className="icon" />
                  </div>
                  <h3 className="contact-item-title">Visit Us</h3>
                  <p className="contact-text">
                    <a
                      href="https://maps.app.goo.gl/Pvo675E6e8S7CJDPA"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        font: "inherit",
                      }}
                    >
                      3rd floor, Chammany Tower,
                      <br />
                      Kaloor Junction, Cochin-682017
                    </a>
                  </p>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock className="icon" /> {/* Clock icon */}
                  </div>
                  <h3 className="contact-item-title">Office Timings</h3>
                  <p className="contact-text">9:30 AM – 5:30 PM</p>
                </div>
              </div>

              <div className="contact-action">
                <button className="btn btn-primary">Start Your Project</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Net Solve Training Consulting Solutions Pvt
              Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
