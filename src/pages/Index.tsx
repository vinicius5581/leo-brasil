import { useState } from 'react';
import { Music, Instagram, Facebook, DollarSign, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

const translations = {
  pt: {
    title: "Leo Brasil",
    subtitle: "Músico Brasileiro",
    description: "MPB • Sertanejo • Pop • Música Brasileira",
    bio: "Trazendo os sons autênticos do Brasil para o mundo. Conectando corações através da música.",
    instagram: "Instagram",
    facebook: "Facebook", 
    venmo: "Gorjeta Venmo",
    zelle: "Gorjeta Zelle",
    whatsapp: "WhatsApp",
    contact: "Entre em Contato",
    tipVenmo: "Apoie via Venmo",
    tipZelle: "Apoie via Zelle",
    followInstagram: "Siga no Instagram",
    followFacebook: "Siga no Facebook",
    chatWhatsapp: "Converse no WhatsApp"
  },
  en: {
    title: "Leo Brasil", 
    subtitle: "Brazilian Musician",
    description: "MPB • Sertanejo • Pop • Brazilian Music",
    bio: "Bringing authentic Brazilian sounds to the world. Connecting hearts through music.",
    instagram: "Instagram",
    facebook: "Facebook",
    venmo: "Tip Venmo", 
    zelle: "Tip Zelle",
    whatsapp: "WhatsApp",
    contact: "Get in Touch",
    tipVenmo: "Support via Venmo",
    tipZelle: "Support via Zelle", 
    followInstagram: "Follow on Instagram",
    followFacebook: "Follow on Facebook",
    chatWhatsapp: "Chat on WhatsApp"
  },
  es: {
    title: "Leo Brasil",
    subtitle: "Músico Brasileño", 
    description: "MPB • Sertanejo • Pop • Música Brasileña",
    bio: "Llevando los sonidos auténticos de Brasil al mundo. Conectando corazones a través de la música.",
    instagram: "Instagram",
    facebook: "Facebook",
    venmo: "Propina Venmo",
    zelle: "Propina Zelle", 
    whatsapp: "WhatsApp",
    contact: "Contactar",
    tipVenmo: "Apoyar vía Venmo",
    tipZelle: "Apoyar vía Zelle",
    followInstagram: "Seguir en Instagram", 
    followFacebook: "Seguir en Facebook",
    chatWhatsapp: "Chatear en WhatsApp"
  }
};

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt');
  const [isZelleModalOpen, setIsZelleModalOpen] = useState(false);
  const t = translations[language];

  const handleVenmoClick = () => {
    window.open('https://account.venmo.com/u/leonel-rocha', '_blank');
  };

  const handleZelleClick = () => {
    setIsZelleModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    const message = language === 'pt'
      ? 'Olá Leo! Vi seu site e gostaria de conversar sobre música.'
      : language === 'en' 
      ? 'Hello Leo! I saw your website and would like to talk about music.'
      : '¡Hola Leo! Vi tu sitio web y me gustaría hablar sobre música.';
    
    window.open(`https://wa.me/14157241085?text=${encodeURIComponent(message)}`, '_blank');
  };

  const socialButtons = [
    {
      icon: Facebook,
      label: t.followFacebook, 
      href: 'https://www.facebook.com/leo.brasil.547',
      className: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
    },
    {
      icon: Instagram,
      label: t.followInstagram,
      href: 'https://www.instagram.com/leobrasil.usa',
      className: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  const contactButtons = [
    {
      icon: DollarSign,
      label: t.tipVenmo,
      onClick: handleVenmoClick,
      className: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: DollarSign, 
      label: t.tipZelle,
      onClick: handleZelleClick,
      className: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
    },
    {
      icon: MessageCircle,
      label: t.chatWhatsapp,
      onClick: handleWhatsAppClick,
      className: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
    }
  ];

  const zelleInstructions = {
    pt: {
      title: "Enviar Gorjeta via Zelle",
      instruction: "Escaneie o código QR no seu app bancário ou use:",
      phone: "Telefone: 415-724-1085",
      email: "Email: usagoiania@hotmail.com",
      phoneSlide: "QR Code com Telefone",
      emailSlide: "QR Code com Email"
    },
    en: {
      title: "Send Tip via Zelle", 
      instruction: "Scan the QR code in your banking app or use:",
      phone: "Phone: 415-724-1085",
      email: "Email: usagoiania@hotmail.com",
      phoneSlide: "QR Code with Phone",
      emailSlide: "QR Code with Email"
    },
    es: {
      title: "Enviar Propina vía Zelle",
      instruction: "Escanea el código QR en tu app bancaria o usa:",
      phone: "Teléfono: 415-724-1085",
      email: "Email: usagoiania@hotmail.com",
      phoneSlide: "QR Code con Teléfono",
      emailSlide: "QR Code con Email"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 flex flex-col relative overflow-hidden">
      {/* Animated Musical Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Staff Lines */}
        <div className="absolute top-1/4 left-0 right-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={`staff-${i}`}
              className="h-px bg-white mb-4 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        
        {/* Floating Musical Notes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`note-${i}`}
            className="absolute text-white/20 text-2xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ♪
          </div>
        ))}
        
        {/* Additional Musical Symbols */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute text-white/15 text-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {i % 2 === 0 ? '♫' : '𝄞'}
          </div>
        ))}
      </div>

      {/* Language Switcher */}
      <div className="flex justify-end p-4 relative z-10">
        <div className="flex gap-2 bg-white/20 rounded-full p-1 backdrop-blur-sm">
          {(['pt', 'en', 'es'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                language === lang
                  ? 'bg-white text-gray-800 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {lang === 'pt' ? 'PT' : lang === 'en' ? 'EN' : 'ES'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-8 relative z-10">
        <div className="text-center max-w-md w-full space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm mb-4">
                <img 
                  src="/lovable-uploads/22b3817e-cb20-4aa0-9a0f-99d729eb4eb4.png" 
                  alt="Leo Brasil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-green-400/30 rounded-full blur-xl"></div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-2">{t.title}</h1>
            <p className="text-xl text-white/90 font-medium">{t.subtitle}</p>
            <p className="text-lg text-white/80">{t.description}</p>
            <p className="text-base text-white/70 px-4">{t.bio}</p>
          </div>

          {/* All Buttons with Equal Spacing */}
          <div className="space-y-3">
            {socialButtons.map((button, index) => (
              <Button
                key={`social-${index}`}
                onClick={() => window.open(button.href, '_blank')}
                className={`${button.className} text-white border-0 w-full h-12 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <button.icon className="w-4 h-4 mr-2" />
                {button.label}
              </Button>
            ))}
            
            {contactButtons.map((button, index) => (
              <Button
                key={`contact-${index}`}
                onClick={button.onClick}
                className={`${button.className} text-white border-0 w-full h-12 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <button.icon className="w-4 h-4 mr-2" />
                {button.label}
              </Button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-white/60 text-sm">
            <p>Leonel Rocha • 415-724-1085</p>
            <p>usagoiania@hotmail.com</p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center pt-4">
            <Link to="/qrcode" className="block">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent('https://leobrasil.com')}`}
                  alt="QR Code - leobrasil.com"
                  className="w-30 h-30"
                />
                <p className="text-xs text-gray-600 mt-2 text-center">leobrasil.com</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Zelle Modal */}
      <Dialog open={isZelleModalOpen} onOpenChange={setIsZelleModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-purple-700">
              {zelleInstructions[language].title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 p-4">
            <p className="text-center text-gray-700 mb-4">
              {zelleInstructions[language].instruction}
            </p>
            
            {/* Zelle QR Code Carousel */}
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {/* Phone QR Code Slide */}
                <CarouselItem>
                  <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-lg font-semibold text-purple-600">
                      {zelleInstructions[language].phoneSlide}
                    </h3>
                    <a 
                      href="/lovable-uploads/68b5f302-8c44-4b99-8514-bd8d564ec2b3.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img 
                          src="/lovable-uploads/68b5f302-8c44-4b99-8514-bd8d564ec2b3.png"
                          alt="Zelle QR Code with Phone"
                          className="w-48 h-48 object-contain"
                        />
                      </div>
                    </a>
                    <p className="font-semibold text-gray-800 text-center">
                      {zelleInstructions[language].phone}
                    </p>
                  </div>
                </CarouselItem>
                
                {/* Email QR Code Slide */}
                <CarouselItem>
                  <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-lg font-semibold text-purple-600">
                      {zelleInstructions[language].emailSlide}
                    </h3>
                    <a 
                      href="/lovable-uploads/658cef87-6c95-4c9c-980e-5df3a9c2e6d1.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img 
                          src="/lovable-uploads/658cef87-6c95-4c9c-980e-5df3a9c2e6d1.png"
                          alt="Zelle QR Code with Email"
                          className="w-48 h-48 object-contain"
                        />
                      </div>
                    </a>
                    <p className="font-semibold text-gray-800 text-center">
                      {zelleInstructions[language].email}
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
