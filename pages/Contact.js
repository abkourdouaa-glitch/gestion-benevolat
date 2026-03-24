import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, User, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    toast.success("Message envoyé avec succès !", {
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-gray-900" style={{fontSize: '3rem', fontWeight: 800,color: '#111827', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, un problème ou besoin d'aide ? Notre équipe est là pour vous répondre rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 d-flex justify-content-center mx-20">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-black-900 mb-6" style={{ display: 'inline-block',
                background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing:' 0.5px',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                width: 'fitContent'}}
            >
                Envoyez-nous un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <User className="w-4 h-4 text-green-600" />
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <Mail className="w-4 h-4 text-green-600" />
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande en détail..."
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                  <p className="text-sm text-gray-500">
                    Minimum 10 caractères
                  </p>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#10b981] via-[#10b981] via-[40%] to-[#3b82f6] text-white shadow-xl hover:shadow-2xl h-14 text-lg rounded-lg border-0 w-full flex items-center justify-center gap-2 transform hover:scale-[1.02] transition-all"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Nous nous engageons à répondre à toutes les demandes dans les 24 heures ouvrables.
                    Vos informations sont confidentielles et ne seront jamais partagées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
