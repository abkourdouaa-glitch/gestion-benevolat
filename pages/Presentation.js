import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Presentation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    const style = document.createElement('style');
    style.textContent = `
      .about-section {
        padding: 8rem 0 4rem 0; 

        overflow: visible; 
        position: relative;
      }
      
      .about-section::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        z-index: 0;
      }
      
      .about-container {
        position: relative;
        z-index: 1;
      }
      
      .image-column {
        position: relative;
        margin-top: -100px; 
      }
      
      .about-image-wrapper {
        position: relative;
        border-radius: 2rem;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
        max-width: 90%;
        margin-left: auto;
      }
      
      .about-image-wrapper:hover {
        transform: scale(1.02);
      }
      
      .about-image {
        width: 100%;
        height: 480px; /* Ajustit l'height */
        object-fit: cover;
        display: block;
      }
      
      .content-column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-right: 2rem;
      }
      
      .section-label {
        display: inline-block;
        background: linear-gradient(135deg, #10b981, #3b82f6);
        color: white;
        padding: 0.5rem 1.25rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        width: fit-content;
      }
      
      .about-heading {
        font-size: 3rem;
        font-weight: 800;
        color: #111827;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }
      
      .about-heading-gradient {
        background: linear-gradient(135deg, #10b981, #3b82f6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .about-description {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #4b5563;
        margin-bottom: 1.5rem;
      }
      
      .feature-list {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
      }
      
      .feature-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.8rem;
        font-size: 1rem;
        color: #374151;
      }
      
      .feature-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: linear-gradient(135deg, #10b981, #3b82f6);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .btn-discover {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 0.8rem 2rem;
        border-radius: 0.75rem;
        font-size: 1.1rem;
        font-weight: 600;
        border: none;
        box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        width: fit-content;
      }
      
      .btn-discover:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
        color: white;
      }

      .stats-row {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
      }
      
      .stat-number {
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(135deg, #10b981, #3b82f6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      @media (max-width: 992px) {
        .image-column {
          margin-top: 2rem;
        }
        .about-heading {
          font-size: 2.25rem;
        }
        .about-image-wrapper {
          max-width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="about-section bg-gray-100">
      <div className="container about-container">
        <div className="row align-items-start">
          {/* Left Column - Content */}
          <div className="col-lg-6">
            <div className="content-column">
              <span className="section-label">À Propos de Nous</span>
              <h2 className="about-heading">
                Qui sommes-nous <span className="about-heading-gradient">?</span>
              </h2>
              <p className="about-description">
                Notre plateforme est une solution digitale dédiée à la gestion et à l’organisation du
                bénévolat. Elle permet de connecter efficacement les associations et les bénévoles à travers
                un espace centralisé, simple et accessible.
              </p>
              <p className="about-description">
                Elle offre aux associations la possibilité de publier et gérer
                leurs missions, tout en facilitant aux bénévoles la recherche d’opportunités 
                adaptées à leurs compétences et disponibilités. L’ensemble des fonctionnalités
                est conçu pour assurer une coordination fluide, depuis l’inscription jusqu’au
                suivi des participations.
              </p>
              
             {/* Feature List */}
             <ul className="feature-list">
               <li className="feature-item">
                 <div className="feature-icon">
                   <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <span>Gestion centralisée et intuitive des activités bénévoles</span>
               </li>
               <li className="feature-item">
                 <div className="feature-icon">
                   <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                     <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <span>Gestion structurée des inscriptions et participations</span>
               </li>
               <li className="feature-item">
                 <div className="feature-icon">
                   <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                     <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <span>Suivi efficace des missions et des participations</span>
                </li>
              </ul>
                          
            </div>
          </div>

          {/* Right Column - Image (Floating) */}
          <div className="col-lg-6">
            <div className="image-column">
              <div 
                className="about-image-wrapper mt-5"
                style={{
                  transform: `translateY(${scrollY * 0.03}px)`
                }}
              >
                <img 
                  src="/images/image4.jpeg"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;