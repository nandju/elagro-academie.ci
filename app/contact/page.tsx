import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/backgrounds/background_contact_mobile.png')"
        }}
      >
        {/* Image pour desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/background_contact_desktop&tablette.png')"
          }}
        />
        
        {/* Overlay avec les codes couleurs */}
        <div className="absolute inset-0 bg-[#001A3B]/80" />
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#001A3B] mb-6">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#E0AB6C]/10 p-3 rounded-full mr-4">
                    <MapPin className="text-[#E0AB6C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001A3B]">Adresse</h3>
                    <p className="text-gray-600">Rue des Entrepreneurs, Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E0AB6C]/10 p-3 rounded-full mr-4">
                    <Mail className="text-[#E0AB6C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001A3B]">Email</h3>
                    <p className="text-gray-600">contact@elagro-academy.ci</p>
                    <p className="text-gray-600">support@elagro-academy.ci</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E0AB6C]/10 p-3 rounded-full mr-4">
                    <Phone className="text-[#E0AB6C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001A3B]">Téléphone</h3>
                    <p className="text-gray-600">+225 XX XX XX XX</p>
                    <p className="text-gray-600">+225 XX XX XX XX (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E0AB6C]/10 p-3 rounded-full mr-4">
                    <Clock className="text-[#E0AB6C] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#001A3B]">Heures d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 8h00 - 18h00</p>
                    <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-[#001A3B] mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', icon: 'f', bg: '#3b5998' },
                    { name: 'Twitter', icon: '𝕏', bg: '#1da1f2' },
                    { name: 'LinkedIn', icon: 'in', bg: '#0077b5' },
                    { name: 'Instagram', icon: '📷', bg: '#e1306c' },
                    { name: 'YouTube', icon: '▶️', bg: '#ff0000' },
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: social.bg }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#001A3B] mb-6">Envoyez-nous un message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <Input type="text" id="first-name" className="w-full" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <Input type="text" id="last-name" className="w-full" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" id="email" className="w-full" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <select 
                    id="subject" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="partnership">Partenariats</option>
                    <option value="press">Presse</option>
                    <option value="course-suggestion">Suggestion de cours</option>
                    <option value="careers">Carrières</option>
                    <option value="other">Autre demande</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="h-4 w-4 text-[#E0AB6C] focus:ring-[#E0AB6C] border-gray-300 rounded mt-1" 
                    required 
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    J'accepte la politique de confidentialité et les conditions d'utilisation
                  </label>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6 w-full">
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-0 lg:py-0 bg-gray-100">
        <div className="h-96 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1532541890026!2d-4.0236639255831!3d5.35950343467412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb7f5a7f3c9f%3A0x2f8b5a5a5a5a5a5a!2sAbidjan%2C%20C%C3%B4te%20d%27Ivoire!5e0!3m2!1sfr!2s!4v1620000000000!5m2!1sfr!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Carte de localisation"
          ></iframe>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 text-white">
        {/* Image pour mobile */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/background_contact_mobile.png')"
          }}
        />
        
        {/* Image pour desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/background_contact_desktop&tablette.png')"
          }}
        />
        
        {/* Overlay avec les codes couleurs */}
        <div className="absolute inset-0 bg-[#001A3B]/85" />
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez des questions ?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Notre équipe est disponible pour vous aider du lundi au vendredi de 8h à 18h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-white/10 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Nous appeler
            </Button>
            <Button className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un email
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
