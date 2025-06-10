
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ZelleEmail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-6">
          Zelle - Email
        </h1>
        
        <div className="mb-6">
          <img 
            src="/lovable-uploads/658cef87-6c95-4c9c-980e-5df3a9c2e6d1.png"
            alt="Zelle QR Code with Email"
            className="w-full max-w-sm mx-auto"
          />
        </div>
        
        <div className="space-y-3 mb-6">
          <p className="text-lg font-semibold text-gray-800">
            Email: usagoiania@hotmail.com
          </p>
          <p className="text-sm text-gray-600">
            Scan the QR code above in your banking app to send a tip via Zelle
          </p>
        </div>

        <Link to="/">
          <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ZelleEmail;
