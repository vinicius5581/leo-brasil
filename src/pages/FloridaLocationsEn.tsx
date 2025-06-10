
import { MapPin, Music, Calendar, Phone, Mail, ArrowLeft, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FloridaLocationsEn = () => {
  const locations = [
    "Miami Bay Area",
    "Orlando Area", 
    "Fort Lauderdale",
    "Pompano Beach",
    "Deerfield Beach",
    "Coconut Creek",
    "Boca Raton",
    "Delray Beach",
    "South Florida"
  ];

  const musicStyles = [
    { name: "Samba", description: "Traditional Brazilian dance music" },
    { name: "Sertanejo", description: "Brazilian country music" },
    { name: "MPB", description: "Música Popular Brasileira" },
    { name: "Forró", description: "Northeastern Brazilian folk music" },
    { name: "Pop Brasileiro", description: "Contemporary Brazilian pop" }
  ];

  const handleWhatsAppClick = () => {
    const message = 'Hello Leo! I found you through your Florida locations page and would like to book Brazilian music for my event.';
    window.open(`https://wa.me/14157241085?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header with Back Button and Language Switcher */}
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        {/* Language Switcher */}
        <div className="flex gap-2 bg-white/20 rounded-full p-1 backdrop-blur-sm">
          <Link to="/pt/florida-locations">
            <button className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 text-gray-600 hover:bg-white/20">
              PT
            </button>
          </Link>
          <button className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 bg-white text-gray-800 shadow-lg">
            EN
          </button>
          <Link to="/es/florida-locations">
            <button className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 text-gray-600 hover:bg-white/20">
              ES
            </button>
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Brazilian Musician in Florida
          </h1>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the vibrant rhythms of Brazil with a professional Brazilian musician available across Florida. 
            Specializing in Samba, Sertanejo, MPB, Forró, and more, offering live performances and entertainment 
            for events, weddings, and celebrations.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp: (415) 724-1085
            </Button>
            
            <Button 
              onClick={() => window.open('mailto:usagoiania@hotmail.com', '_blank')}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: usagoiania@hotmail.com
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Locations Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Serving Key Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional Brazilian music services available throughout Florida's major cities and regions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Brazilian Musician {location}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Professional Brazilian Music Services
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Music Styles Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Authentic Brazilian Music Styles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicStyles.map((style, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Music className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-600">
                    {style.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-emerald-600 mb-4">Brazilian Musician in Florida</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience authentic Brazilian music for special events across Florida. 
                Professional performances for weddings, parties, corporate events, and celebrations.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Book Your Brazilian Music Experience Today!
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp: (415) 724-1085
              </Button>
              
              <Button 
                onClick={() => window.open('mailto:usagoiania@hotmail.com', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email: usagoiania@hotmail.com
              </Button>
            </div>
            
            <div>
              <Link to="/">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                  Visit Main Website
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FloridaLocationsEn;
