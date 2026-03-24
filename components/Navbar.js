import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html { scroll-behavior: smooth; }
      .custom-nav {
        position: fixed; 
        top: 0;
        width: 100%;
        z-index: 9999;
        background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%) ;
        min-height: 70px;
        display: flex;
        align-items: center;
      }
      .nav-link-custom {
        color: white ;
        font-weight: 500;
        padding: 0.5rem 1.5rem ;
        text-decoration: none ;
        transition: 0.3s;
      }
      .nav-link-custom:hover {
        color:   #00c684;
      }
      .side-menu {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100vh;
        background: #111827;
        z-index: 10000;
        transition: 0.4s ease-in-out;
      }
      .side-menu.active { right: 0; }
      .overlay {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        display: ${open ? 'block' : 'none'};
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [open]);

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-nav">
        <div className="container d-flex justify-content-between align-items-center">
    
          <a className="navbar-brand text-white fw-bold fs-3" href="#home">
            G-Asso<span style={{color: '#D1FAE5'}}>.</span>
          </a>

          <div className="d-none d-lg-block">
            <ul className="navbar-nav d-flex flex-row gap-2">
              <li className="nav-item"><a href="/#home" className="nav-link-custom">Accueil</a></li>
              <li className="nav-item"><a href="/#presentation" className="nav-link-custom">Présentation</a></li>
              <li className="nav-item"><a href="/#contact" className="nav-link-custom">Contact</a></li>
            </ul>
          </div>

      
          <button className="btn d-lg-none text-white border-0" onClick={openMenu}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile */}
      <div className="overlay" onClick={closeMenu}></div>
      <div className={`side-menu ${open ? "active" : ""}`}>
        <div className="text-end p-4">
          <button className="border-0 bg-transparent text-white" onClick={closeMenu}><X size={35} /></button>
        </div>
        <ul className="list-unstyled p-5">
          <li className="mb-4"><a href="/#home" className="text-white text-decoration-none fs-4" onClick={closeMenu}>Accueil</a></li>
          <li className="mb-4"><a href="/#presentation" className="text-white text-decoration-none fs-4" onClick={closeMenu}>Présentation</a></li>
          <li className="mb-4"><a href="/#contact" className="text-white text-decoration-none fs-4" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;