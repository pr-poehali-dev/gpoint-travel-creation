import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import TourCalculator from "@/components/TourCalculator";
import ContactModal from "@/components/ContactModal";
import CookieConsent from "@/components/CookieConsent";

export default function Index() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/07e783d2-d0cd-4d22-b9e1-8a7f02b04473.jpg",
      location: "Москва",
      description: "Красная площадь и сердце России"
    },
    {
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/6f161b6c-4908-42cb-b7e9-e00f8d35500e.jpg",
      location: "Санкт-Петербург",
      description: "Исаакиевский собор и Медный всадник"
    },
    {
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/ae1397ef-d997-42f5-8d51-6735e83d8f56.jpg",
      location: "Сочи",
      description: "Олимпийский парк и курорт мирового уровня"
    },
    {
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/b9395910-0010-477c-96b0-307ee08a9d37.jpg",
      location: "Европа",
      description: "Эйфелева башня и романтика Парижа"
    },
    {
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/f75da763-5225-4773-a413-e04040055980.jpg",
      location: "Азия",
      description: "Небоскребы Шанхая и современный Китай"
    },
    {
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/d5e1e0a2-8acb-4ef8-8dff-6aa9e779756b.jpg",
      location: "Мальдивы",
      description: "Премиум отдых на водных виллах"
    }
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setSlideDirection('left');
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }
    if (isRightSwipe) {
      setSlideDirection('right');
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };



  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('left');
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length, currentSlide]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  const services = [
    {
      icon: "Plane",
      title: "Индивидуальные туры",
      description: "Разработка уникальных маршрутов под ваши предпочтения и бюджет"
    },
    {
      icon: "Hotel",
      title: "Бронирование отелей",
      description: "Лучшие предложения премиальных отелей по всему миру"
    },
    {
      icon: "Users",
      title: "Личный консьерж",
      description: "Круглосуточная поддержка и решение любых вопросов 24/7"
    },
    {
      icon: "MapPin",
      title: "Полное сопровождение",
      description: "Организация трансферов, экскурсий и всех деталей поездки"
    }
  ];

  const destinations = [
    { 
      name: "Россия", 
      description: "От исторических городов до природных чудес — откройте красоту родной страны", 
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/07e783d2-d0cd-4d22-b9e1-8a7f02b04473.jpg"
    },
    { 
      name: "Европа", 
      description: "Культурные столицы, горнолыжные курорты и средиземноморские побережья", 
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/b9395910-0010-477c-96b0-307ee08a9d37.jpg"
    },
    { 
      name: "Азия", 
      description: "Древние храмы, экзотическая природа и восточное гостеприимство", 
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/c842ec48-0f62-4997-a7b6-7a2d86eeb807.jpg"
    },
    { 
      name: "Мальдивы", 
      description: "Райские острова с кристальной водой и роскошные виллы на воде", 
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/d5e1e0a2-8acb-4ef8-8dff-6aa9e779756b.jpg"
    },
    { 
      name: "ОАЭ", 
      description: "Роскошь современного Востока, небоскребы Дубая и арабская культура", 
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/87c4bca4-5204-4f21-8aaf-b95965fb0104.jpg"
    },
    { 
      name: "США", 
      description: "Мегаполисы, национальные парки и деловой туризм премиум-класса", 
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/53f85314-20b5-4b69-a3f2-717f240d2c5c.jpg"
    }
  ];

  const cases = [
    {
      title: "Свадебное путешествие на Мальдивы",
      client: "Анна и Сергей",
      description: "Организовали романтическую поездку мечты с размещением в премиальном водном бунгало. Приватные ужины на закате, SPA-процедуры и подводная фотосессия — каждая деталь была продумана до мелочей.",
      result: "15 дней незабываемого медового месяца",
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/79aa5026-656d-439b-8aab-390eabb2eb1a.jpg"
    },
    {
      title: "Деловой тур в Нью-Йорк",
      client: "Руководитель IT-компании",
      description: "Полное сопровождение бизнес-делегации из 12 человек: отель в центре Манхэттена, организация встреч с партнерами, премиум-трансферы и культурная программа после переговоров.",
      result: "5 успешных контрактов заключено",
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/3239faec-7587-43ad-b3a5-9f0a08076cbe.jpg"
    },
    {
      title: "Семейный отдых в Швейцарии",
      client: "Семья Михайловых",
      description: "Разработали индивидуальный маршрут для семьи с двумя детьми: горнолыжный курорт Церматт, детский инструктор, экскурсии по шоколадным фабрикам и поездка на панорамном поезде.",
      result: "10 дней активного зимнего отдыха",
      image: "https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/f0a935ca-b845-48ac-9d34-2106f6c0c5f5.jpg"
    }
  ];

  const faqs = [
    {
      question: "Чем G.Point.Travel отличается от обычных турагентств?",
      answer: "Мы предлагаем персональный подход премиум-класса: личного менеджера на весь период путешествия, круглосуточную поддержку и решение любых вопросов, включая те, что не входят в наши услуги. Мы делаем путешествия дешевле благодаря прямым контактам с отелями и партнерами."
    },
    {
      question: "Какие направления вы организуете?",
      answer: "Мы работаем со всеми направлениями мира: от пляжного отдыха на Мальдивах до деловых поездок в США, от горнолыжных курортов Европы до экзотических туров по Азии. Подбираем идеальный вариант под ваши пожелания."
    },
    {
      question: "Сколько стоят ваши услуги?",
      answer: "Стоимость зависит от сложности тура и ваших пожеланий. Мы работаем прозрачно: вы платите только за услуги и отели по реальным ценам, а наше сопровождение часто окупается благодаря эксклюзивным предложениям партнеров."
    },
    {
      question: "Как быстро вы можете организовать поездку?",
      answer: "Благодаря эксклюзивным партнерствам и прямым контактам, мы можем организовать тур в экспресс-режиме — всего за несколько часов! Даже если в отеле нет свободных мест, наши специалисты найдут решение и откроют для вас двери лучших номеров. Невозможное становится возможным с G.Point.Travel."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in relative z-10">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-2">
                <span className="text-accent font-semibold text-sm">✨ ПРЕМИУМ ТУРАГЕНТСТВО</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Путешествуйте без забот с <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">G.Point.Travel</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Индивидуальные туры по всему миру с полным сопровождением — от идеи до возвращения домой
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-primary animate-pulse-glow shadow-xl text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Начать путешествие
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all text-sm md:text-base px-4 md:px-6 w-full sm:w-auto">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in z-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-primary/30 blur-3xl animate-pulse"></div>
              <div 
                ref={sliderRef}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {heroSlides.map((slide, index) => {
                  const isActive = index === currentSlide;
                  const isPrev = index === (currentSlide - 1 + heroSlides.length) % heroSlides.length;
                  const isNext = index === (currentSlide + 1) % heroSlides.length;
                  
                  let animationClass = '';
                  if (isActive) {
                    animationClass = slideDirection === 'left' ? 'slide-in-right' : slideDirection === 'right' ? 'slide-in-left' : '';
                  } else if (isPrev && slideDirection === 'right') {
                    animationClass = 'slide-out-right';
                  } else if (isNext && slideDirection === 'left') {
                    animationClass = 'slide-out-left';
                  }

                  return (
                  <div
                    key={index}
                    className={`absolute inset-0 ${
                      isActive ? 'z-10 opacity-100 ' + animationClass : 'z-0 opacity-0'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.location} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-4 md:p-6">
                      <div className="flex items-center gap-2 md:gap-3 text-white">
                        <Icon name="MapPin" className="text-accent flex-shrink-0" size={20} />
                        <div>
                          <div className="font-bold text-base md:text-xl">{slide.location}</div>
                          <div className="text-xs md:text-sm text-white/90">{slide.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 z-20">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-accent w-8' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-b border-accent/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="scroll-animate flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" className="text-accent" size={24} />
              </div>
              <div>
                <div className="font-bold text-primary">Безопасность</div>
                <div className="text-sm text-muted-foreground">Проверенные партнёры</div>
              </div>
            </div>
            <div className="scroll-animate flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" className="text-accent" size={24} />
              </div>
              <div>
                <div className="font-bold text-primary">24/7 поддержка</div>
                <div className="text-sm text-muted-foreground">Всегда на связи</div>
              </div>
            </div>
            <div className="scroll-animate flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Sparkles" className="text-accent" size={24} />
              </div>
              <div>
                <div className="font-bold text-primary">Индивидуально</div>
                <div className="text-sm text-muted-foreground">Только для вас</div>
              </div>
            </div>
            <div className="scroll-animate flex items-center gap-4 p-4 bg-accent/5 rounded-xl hover:bg-accent/10 transition-all">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="DollarSign" className="text-accent" size={24} />
              </div>
              <div>
                <div className="font-bold text-primary">Выгодно</div>
                <div className="text-sm text-muted-foreground">Прямые контракты</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Почему выбирают G.Point.Travel</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Мы не просто турагентство — мы ваш надежный партнер в каждом путешествии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="scroll-animate bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-6 md:p-8">
                <Icon name="Sparkles" size={40} className="text-accent mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Индивидуальный подход</h3>
                <p className="text-white/80">
                  Каждый маршрут создается персонально под ваши предпочтения и пожелания
                </p>
              </CardContent>
            </Card>
            <Card className="scroll-animate bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-6 md:p-8">
                <Icon name="Shield" size={40} className="text-accent mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Надежность</h3>
                <p className="text-white/80">
                  Полная поддержка 24/7 на всех этапах — от планирования до возвращения домой
                </p>
              </CardContent>
            </Card>
            <Card className="scroll-animate bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-6 md:p-8">
                <Icon name="DollarSign" size={40} className="text-accent mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Выгода</h3>
                <p className="text-white/80">
                  Прямые контракты с отелями и партнерами позволяют делать поездки дешевле
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-accent/5">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">ПРЕМИАЛЬНОЕ ОБСЛУЖИВАНИЕ</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4">
              Сервис G.Point.Travel — это премиальное обслуживание для каждого гостя
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы берем на себя все заботы: от поиска идеального отеля до решения непредвиденных ситуаций во время путешествия
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/5e7f9b60-3719-4363-91bb-e20ff32b2494.jpg" 
              alt="Premium Service" 
              className="scroll-animate rounded-2xl shadow-xl w-full"
            />
            <div className="scroll-animate space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Globe" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Эксклюзивные направления</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Доступ к закрытым отелям и локациям, недоступным для массового туризма
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">VIP-сопровождение</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Личный консьерж, встреча в аэропорту и приоритетный сервис на каждом этапе
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Экономия времени</h3>
                  <p className="text-muted-foreground">
                    Мы берем на себя все организационные вопросы — вам остается только наслаждаться поездкой
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для комфортного путешествия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="scroll-animate hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-4 bg-accent/5">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Популярные направления</h2>
            <p className="text-xl text-muted-foreground">
              Организуем путешествия по всему миру
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {destinations.map((dest, index) => (
              <Card key={index} className="scroll-animate group overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-accent/30">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-96">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex items-end">
                      <div className="p-8 text-white w-full">
                        <h3 className="text-3xl font-bold mb-3 text-accent">{dest.name}</h3>
                        <p className="text-white/90 text-lg leading-relaxed">{dest.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">ИСТОРИИ УСПЕХА</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Реальные путешествия наших клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждая поездка — это уникальная история, которую мы создаем вместе с вами
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="scroll-animate group overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-accent/30">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="User" className="text-accent" size={16} />
                      <span className="text-sm font-semibold text-accent">{caseItem.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">{caseItem.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{caseItem.description}</p>
                    <div className="flex items-center gap-2 pt-4 border-t border-accent/20">
                      <Icon name="CheckCircle" className="text-accent flex-shrink-0" size={20} />
                      <span className="text-sm font-semibold text-primary">{caseItem.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-white to-accent/5">
        <div className="container mx-auto">
          <div className="scroll-animate text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Рассчитайте стоимость тура</h2>
            <p className="text-xl text-muted-foreground">
              Узнайте примерную цену вашего путешествия за пару кликов
            </p>
          </div>
          <div className="scroll-animate">
            <TourCalculator />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании G.Point.Travel</h2>
              <p className="text-xl text-white/90 mb-6">
                Мы — команда профессионалов с многолетним опытом в индустрии туризма. Наша миссия — сделать каждое путешествие незабываемым, комфортным и доступным.
              </p>
              <p className="text-lg text-white/80 mb-6">
                G.Point.Travel специализируется на премиальном обслуживании: от организации индивидуальных туров до деловых поездок. Мы работаем напрямую с лучшими отелями мира, что позволяет предлагать выгодные цены без потери качества.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2"></div>
                  <div className="text-white/80"></div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2"></div>
                  <div className="text-white/80"></div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2"></div>
                  <div className="text-white/80"></div>
                </div>
              </div>
            </div>
            <div className="scroll-animate relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl"></div>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Наши преимущества</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                      <span className="text-white/90">Персональный менеджер на весь период путешествия</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                      <span className="text-white/90">Эксклюзивные предложения от партнеров</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                      <span className="text-white/90">Поддержка 24/7 в любой точке мира</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                      <span className="text-white/90">Решение любых вопросов во время поездки</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="Check" className="text-accent flex-shrink-0" size={24} />
                      <span className="text-white/90">Оптимизация расходов без потери качества</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на часто задаваемые вопросы
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="scroll-animate border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Готовы начать путешествие?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и наш менеджер подберет идеальный тур специально для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm md:text-base lg:text-lg">
              <Icon name="Phone" className="text-accent flex-shrink-0" size={20} />
              <span className="font-semibold break-all">+7 (993) 494-51-31</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base lg:text-lg">
              <Icon name="Mail" className="text-accent flex-shrink-0" size={20} />
              <span className="font-semibold break-all">g.point.travel@yandex.ru</span>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary text-base md:text-lg px-6 md:px-8 animate-pulse-glow w-full sm:w-auto max-w-sm"
              onClick={() => setIsContactModalOpen(true)}
            >
              <Icon name="Send" size={18} className="mr-2" />
              Начать путешествие
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
      <CookieConsent />

      <footer className="bg-primary text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/536b8c7e-970e-4397-a8b1-ab8dc8af0f61.jpg" 
                  alt="G.Point.Travel Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold">G.Point.Travel</span>
              </div>
              <p className="text-white/70">
                Ваш надежный партнер в мире премиальных путешествий
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-base md:text-lg">Услуги</h3>
              <ul className="space-y-2 text-white/70 text-sm md:text-base">
                <li><a href="#" className="hover:text-accent transition-colors">Индивидуальные туры</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Бронирование отелей</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Деловые поездки</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">VIP-сервис</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-base md:text-lg">Компания</h3>
              <ul className="space-y-2 text-white/70 text-sm md:text-base">
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-accent transition-colors">Кейсы</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="/privacy-policy" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-base md:text-lg">Контакты</h3>
              <ul className="space-y-2 text-white/70 text-sm md:text-base">
                <li className="flex items-center gap-2 break-all">+7 (993) 494-51-31</li>
                <li className="flex items-center gap-2 break-all">g.point.travel@yandex.ru</li>
                <li className="flex items-center gap-2">Санкт-Петербург, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 md:pt-8 text-center text-white/60 text-sm">
            <p>© 2026 G.Point.Travel. Все права защищены.</p>
            <p className="mt-2">
              <a href="/privacy-policy" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}