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
    const phone = '79939745131';
    const message = encodeURIComponent('Здравствуйте! Хочу узнать больше о турах');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
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
            className="bg-[#0088cc] hover:bg-[#0077b3] text-white h-16 text-lg transition-all hover:scale-105"
            onClick={handleTelegram}
          >
            <Icon name="Send" size={24} className="mr-3" />
            Написать в Telegram
          </Button>
          
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white h-16 text-lg transition-all hover:scale-105"
            onClick={handleWhatsApp}
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Написать в WhatsApp
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-2 border-t">
          <p>+7 993 974 51 31</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
