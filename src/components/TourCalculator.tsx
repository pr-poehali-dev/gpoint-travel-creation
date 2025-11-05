import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

interface TourPrices {
  [key: string]: {
    economy: number;
    comfort: number;
    premium: number;
  };
}

export default function TourCalculator() {
  const [destination, setDestination] = useState<string>("maldives");
  const [serviceClass, setServiceClass] = useState<string>("comfort");
  const [persons, setPersons] = useState<number>(2);
  const [days, setDays] = useState<number>(7);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const tourPrices: TourPrices = {
    maldives: { economy: 150000, comfort: 250000, premium: 450000 },
    europe: { economy: 80000, comfort: 150000, premium: 300000 },
    uae: { economy: 100000, comfort: 180000, premium: 350000 },
    asia: { economy: 60000, comfort: 120000, premium: 220000 },
    caribbean: { economy: 180000, comfort: 300000, premium: 500000 },
    usa: { economy: 120000, comfort: 200000, premium: 400000 }
  };

  const destinations = [
    { id: "maldives", name: "Мальдивы", emoji: "🏝️" },
    { id: "europe", name: "Европа", emoji: "🏰" },
    { id: "uae", name: "ОАЭ", emoji: "🕌" },
    { id: "asia", name: "Азия", emoji: "🎎" },
    { id: "caribbean", name: "Карибы", emoji: "🌴" },
    { id: "usa", name: "США", emoji: "🗽" }
  ];

  const calculatePrice = () => {
    const basePrice = tourPrices[destination][serviceClass as keyof typeof tourPrices.maldives];
    const dayMultiplier = days / 7;
    const personMultiplier = persons;
    const discount = persons >= 4 ? 0.9 : 1;
    
    return Math.round(basePrice * dayMultiplier * personMultiplier * discount);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const totalPrice = calculatePrice();
  const pricePerPerson = Math.round(totalPrice / persons);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-2 border-accent/20">
      <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-t-lg">
        <CardTitle className="text-3xl flex items-center gap-3">
          <Icon name="Calculator" size={32} className="text-accent" />
          Калькулятор стоимости тура
        </CardTitle>
        <p className="text-white/80 mt-2">Рассчитайте примерную стоимость вашего путешествия</p>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <Label className="text-lg font-semibold">Направление</Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-accent">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.id} className="text-lg">
                    {dest.emoji} {dest.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-lg font-semibold">Класс обслуживания</Label>
            <Select value={serviceClass} onValueChange={setServiceClass}>
              <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-accent">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy" className="text-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Circle" size={16} />
                    Эконом
                  </div>
                </SelectItem>
                <SelectItem value="comfort" className="text-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={16} />
                    Комфорт
                  </div>
                </SelectItem>
                <SelectItem value="premium" className="text-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Crown" size={16} />
                    Премиум
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold">Количество человек</Label>
            <span className="text-2xl font-bold text-accent">{persons}</span>
          </div>
          <Slider
            value={[persons]}
            onValueChange={(value) => setPersons(value[0])}
            min={1}
            max={10}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>1 человек</span>
            <span>10 человек</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-lg font-semibold">Количество дней</Label>
            <span className="text-2xl font-bold text-accent">{days}</span>
          </div>
          <Slider
            value={[days]}
            onValueChange={(value) => setDays(value[0])}
            min={3}
            max={21}
            step={1}
            className="py-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>3 дня</span>
            <span>21 день</span>
          </div>
        </div>

        {persons >= 4 && (
          <div className="bg-accent/10 border-2 border-accent rounded-lg p-4 flex items-start gap-3 animate-fade-in">
            <Icon name="Gift" className="text-accent flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-semibold text-accent">Групповая скидка 10%</p>
              <p className="text-sm text-muted-foreground">Действует при бронировании от 4 человек</p>
            </div>
          </div>
        )}

        <div className="border-t-2 border-gray-200 pt-6 mt-6">
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-xl p-8 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-sm mb-1">Общая стоимость</p>
                <p className="text-4xl md:text-5xl font-bold text-accent">
                  {formatPrice(totalPrice)} ₽
                </p>
              </div>
              <Icon name="Sparkles" className="text-accent" size={40} />
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/20">
              <span className="text-white/80">Стоимость на человека:</span>
              <span className="text-2xl font-bold text-white">{formatPrice(pricePerPerson)} ₽</span>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-white/90">
                <Icon name="Check" size={18} className="text-accent" />
                <span className="text-sm">Перелет включен</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Icon name="Check" size={18} className="text-accent" />
                <span className="text-sm">Проживание в отеле</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Icon name="Check" size={18} className="text-accent" />
                <span className="text-sm">Трансферы и страховка</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Icon name="Check" size={18} className="text-accent" />
                <span className="text-sm">Персональный менеджер 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            size="lg" 
            className="flex-1 bg-accent hover:bg-accent/90 text-primary text-lg h-14 animate-pulse-glow"
            onClick={() => setIsContactModalOpen(true)}
          >
            <Icon name="Send" size={20} className="mr-2" />
            Начать путешествие
          </Button>
          <Button size="lg" variant="outline" className="flex-1 border-2 border-accent text-accent hover:bg-accent/10 text-lg h-14">
            <Icon name="Phone" size={20} className="mr-2" />
            Консультация
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          * Цены указаны ориентировочно. Точная стоимость рассчитывается индивидуально и зависит от сезона, выбранного отеля и дополнительных услуг.
        </p>
      </CardContent>
      
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </Card>
  );
}