import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const handleTelegram = () => {
    window.open('https://t.me/GPointTravel', '_blank');
    onOpenChange(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/qr/JWZYO6VW2UQMC1', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center">
            Выберите удобный способ связи
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Свяжитесь с нами через любимый мессенджер
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-6">
          <Button 
            size="lg" 
            className="bg-[#0088cc] hover:bg-[#0077b3] text-white h-16 text-lg"
            onClick={handleTelegram}
          >
            <Icon name="Send" size={24} className="mr-3" />
            Написать в Telegram
          </Button>
          
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white h-16 text-lg"
            onClick={handleWhatsApp}
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Написать в WhatsApp
          </Button>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-center text-muted-foreground mb-3">
            Или отсканируйте QR-код для WhatsApp
          </p>
          <div className="flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/e55f65fc-3b07-472c-9d2b-4493d76cbf73.jpg" 
              alt="WhatsApp QR Code" 
              className="w-48 h-48 rounded-lg"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
