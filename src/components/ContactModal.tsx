import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleTelegram = () => {
    if (!agreedToTerms) return;
    const message = encodeURIComponent('Здравствуйте! Нужна помощь в организации поездки.');
    window.open(`https://t.me/GPointTravel?text=${message}`, '_blank');
    onOpenChange(false);
    setAgreedToTerms(false);
  };

  const handleWhatsApp = () => {
    if (!agreedToTerms) return;
    const phone = '79934945131';
    const message = encodeURIComponent('Здравствуйте! Нужна помощь в организации поездки.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    onOpenChange(false);
    setAgreedToTerms(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-primary text-center">
            Выберите удобный способ связи
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-sm md:text-base">
            Свяжитесь с нами через любимый мессенджер
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4 md:py-6">
          <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className="mt-1"
            />
            <label 
              htmlFor="terms" 
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              Я согласен на обработку моих персональных данных в соответствии с{' '}
              <a 
                href="/privacy-policy" 
                target="_blank"
                className="text-accent hover:underline font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                Политикой конфиденциальности
              </a>
              {' '}и{' '}
              <a 
                href="/terms-of-service" 
                target="_blank"
                className="text-accent hover:underline font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                Пользовательским соглашением
              </a>
            </label>
          </div>

          <Button 
            size="lg" 
            className="bg-[#0088cc] hover:bg-[#0077b3] text-white h-14 md:h-16 text-base md:text-lg transition-all hover:scale-105 active:scale-95 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleTelegram}
            disabled={!agreedToTerms}
          >
            <Icon name="Send" size={20} className="mr-2 md:mr-3" />
            Написать в Telegram
          </Button>
          
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white h-14 md:h-16 text-base md:text-lg transition-all hover:scale-105 active:scale-95 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleWhatsApp}
            disabled={!agreedToTerms}
          >
            <Icon name="MessageCircle" size={20} className="mr-2 md:mr-3" />
            Написать в WhatsApp
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-2 border-t">
          <p>+7 993 494 51 31</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}