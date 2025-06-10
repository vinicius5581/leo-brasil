
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const QRCode = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 flex flex-col items-center justify-center p-4">
      {/* Return Button */}
      <div className="absolute top-4 left-4">
        <Link to="/">
          <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent('https://leobrasil.com')}`}
            alt="QR Code - leobrasil.com"
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Leo Brasil</h1>
          <p className="text-lg md:text-xl text-white/90">leobrasil.com</p>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
