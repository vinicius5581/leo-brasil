import { useState } from 'react';
import { Music, Instagram, Youtube, DollarSign, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const translations = {
  pt: {
    title: "Leo Brasil",
    subtitle: "Músico Brasileiro",
    description: "MPB • Sertanejo • Pop • Música Brasileira",
    bio: "Trazendo os sons autênticos do Brasil para o mundo. Conectando corações através da música.",
    instagram: "Instagram",
    youtube: "YouTube", 
    venmo: "Gorjeta Venmo",
    zelle: "Gorjeta Zelle",
    whatsapp: "WhatsApp",
    contact: "Entre em Contato",
    tipVenmo: "Apoie via Venmo",
    tipZelle: "Apoie via Zelle",
    followInstagram: "Siga no Instagram",
    subscribeYoutube: "Inscreva-se no YouTube",
    chatWhatsapp: "Converse no WhatsApp"
  },
  en: {
    title: "Leo Brasil", 
    subtitle: "Brazilian Musician",
    description: "MPB • Sertanejo • Pop • Brazilian Music",
    bio: "Bringing authentic Brazilian sounds to the world. Connecting hearts through music.",
    instagram: "Instagram",
    youtube: "YouTube",
    venmo: "Tip Venmo", 
    zelle: "Tip Zelle",
    whatsapp: "WhatsApp",
    contact: "Get in Touch",
    tipVenmo: "Support via Venmo",
    tipZelle: "Support via Zelle", 
    followInstagram: "Follow on Instagram",
    subscribeYoutube: "Subscribe on YouTube",
    chatWhatsapp: "Chat on WhatsApp"
  },
  es: {
    title: "Leo Brasil",
    subtitle: "Músico Brasileño", 
    description: "MPB • Sertanejo • Pop • Música Brasileña",
    bio: "Llevando los sonidos auténticos de Brasil al mundo. Conectando corazones a través de la música.",
    instagram: "Instagram",
    youtube: "YouTube",
    venmo: "Propina Venmo",
    zelle: "Propina Zelle", 
    whatsapp: "WhatsApp",
    contact: "Contactar",
    tipVenmo: "Apoyar vía Venmo",
    tipZelle: "Apoyar vía Zelle",
    followInstagram: "Seguir en Instagram", 
    subscribeYoutube: "Suscribirse en YouTube",
    chatWhatsapp: "Chatear en WhatsApp"
  }
};

const Index = () => {
  const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt');
  const t = translations[language];

  const handleVenmoClick = () => {
    window.open('https://account.venmo.com/u/leonel-rocha', '_blank');
  };

  const handleZelleClick = () => {
    const message = language === 'pt' 
      ? 'Olá! Gostaria de enviar uma gorjeta via Zelle para Leo Brasil.'
      : language === 'en'
      ? 'Hello! I would like to send a tip via Zelle to Leo Brasil.'
      : '¡Hola! Me gustaría enviar una propina vía Zelle a Leo Brasil.';
    
    window.open(`sms:415-724-1085?body=${encodeURIComponent(message)}`, '_blank');
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
      icon: Instagram,
      label: t.followInstagram,
      href: 'https://www.instagram.com/leobrasil.usa',
      className: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      icon: Youtube,
      label: t.subscribeYoutube, 
      href: 'https://youtube.com/@leobrasil100',
      className: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
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
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent('https://leobrasil.com')}`}
                alt="QR Code - leobrasil.com"
                className="w-30 h-30"
              />
              <p className="text-xs text-gray-600 mt-2 text-center">leobrasil.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
