import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <img 
            src="https://cdn.poehali.dev/files/536b8c7e-970e-4397-a8b1-ab8dc8af0f61.jpg" 
            alt="G.Point.Travel Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="text-lg md:text-2xl font-bold text-primary">G.Point.Travel</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
          <a href="#destinations" className="text-sm hover:text-accent transition-colors">Направления</a>
          <a href="#calculator" className="text-sm hover:text-accent transition-colors">Калькулятор</a>
          <a href="#cases" className="text-sm hover:text-accent transition-colors">Кейсы</a>
          <a href="#about" className="text-sm hover:text-accent transition-colors">О нас</a>
          <a href="#faq" className="text-sm hover:text-accent transition-colors">FAQ</a>
        </nav>
        <Button 
          className="bg-accent hover:bg-accent/90 text-primary text-sm md:text-base px-3 md:px-4"
          onClick={() => window.location.href = 'tel:+79934945131'}
        >
          <Icon name="Phone" size={16} className="md:mr-2" />
          <span className="hidden md:inline">Связаться</span>
        </Button>
      </div>
    </header>
  );
}
