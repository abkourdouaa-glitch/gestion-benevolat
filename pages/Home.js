import { ArrowRight, Users, Target, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";


const Home =()=> {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image1.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-blue-600/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-100">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
           Système de gestion des bénévoles 
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            et des associations
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Participez à des projets qui changent la vie
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
          <Link to="/FormBenevolat" className="text-decoration-none">
            <button className="bg-white  hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all h-14 px-8 text-lg rounded-lg flex items-center ">
              <Users className="w-5 h-5 mr-2 text-decoration-none" />
              S'inscrire comme Bénévole
            </button>
          </Link>

          <Link to="/FormAssociation" className="text-decoration-none">
            <button className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] hover:from-[#059669] hover:to-[#2563eb] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all h-14 px-8 text-lg rounded-lg flex items-center border-0">
              <Heart className="w-5 h-5 mr-2" />
              S'inscrire comme Association
            </button>
          </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home
