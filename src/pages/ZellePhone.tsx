
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ZellePhone = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-6">
          Leo Brasil - Zelle
        </h1>
        
        <div className="mb-6">
          <img 
            src="/lovable-uploads/68b5f302-8c44-4b99-8514-bd8d564ec2b3.png"
            alt="Zelle QR Code with Phone"
            className="w-full max-w-sm mx-auto"
          />
        </div>
        
        <div className="space-y-3 mb-6">
          <p className="text-lg font-semibold text-gray-800">
            Phone: 415-724-1085
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

export default ZellePhone;
