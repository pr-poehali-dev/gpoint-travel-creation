import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import TourCalculator from "@/components/TourCalculator";
import ContactModal from "@/components/ContactModal";

export default function Index() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
      description: "Организация романтической поездки для пары с размещением в премиальном водном бунгало, приватными ужинами и SPA-процедурами"
    },
    {
      title: "Деловой тур в Нью-Йорк",
      description: "Полное сопровождение бизнес-делегации: бронирование отеля, организация встреч, трансферы и культурная программа"
    },
    {
      title: "Семейный отдых в Швейцарии",
      description: "Индивидуальный маршрут для семьи с детьми: горнолыжный курорт, экскурсии и детские развлечения"
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
      answer: "При наличии свободных мест можем организовать тур за 24-48 часов. Для сложных индивидуальных маршрутов рекомендуем обращаться за 2-4 недели до планируемой даты выезда."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Compass" className="text-accent" size={32} />
            <span className="text-2xl font-bold text-primary">G.Point.Travel</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
            <a href="#destinations" className="text-sm hover:text-accent transition-colors">Направления</a>
            <a href="#calculator" className="text-sm hover:text-accent transition-colors">Калькулятор</a>
            <a href="#cases" className="text-sm hover:text-accent transition-colors">Кейсы</a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">О нас</a>
            <a href="#faq" className="text-sm hover:text-accent transition-colors">FAQ</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-primary">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 -z-10"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Ваш личный помощник в мире путешествий
              </h1>
              <p className="text-xl text-muted-foreground">
                Премиум турагентство G.Point.Travel организует индивидуальные туры и бронирование отелей с полным сопровождением 24/7
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-primary animate-pulse-glow"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Начать путешествие
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl -z-10"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/2e0538a6-e170-4369-90ee-6412f9b7bb33.jpg" 
                alt="Luxury Travel" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают G.Point.Travel</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Мы не просто турагентство — мы ваш надежный партнер в каждом путешествии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-8">
                <Icon name="DollarSign" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">Выгода</h3>
                <p className="text-white/80">
                  Прямые контракты с отелями и партнерами позволяют делать поездки дешевле
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-8">
                <Icon name="Shield" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">Надежность</h3>
                <p className="text-white/80">
                  Полная поддержка 24/7 на всех этапах — от планирования до возвращения домой
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all">
              <CardContent className="p-8">
                <Icon name="Sparkles" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">Индивидуальный подход</h3>
                <p className="text-white/80">
                  Каждый маршрут создается персонально под ваши предпочтения и пожелания
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">ПРЕМИАЛЬНОЕ ОБСЛУЖИВАНИЕ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Сервис G.Point.Travel — это премиальное обслуживание для каждого гостя
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы берем на себя все заботы: от поиска идеального отеля до решения непредвиденных ситуаций во время путешествия
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/c34f9502-5541-4bdb-ae0c-1fde58b31779/files/5e7f9b60-3719-4363-91bb-e20ff32b2494.jpg" 
              alt="Premium Service" 
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Globe" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Эксклюзивные направления</h3>
                  <p className="text-muted-foreground">
                    Доступ к закрытым отелям и локациям, недоступным для массового туризма
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">VIP-сопровождение</h3>
                  <p className="text-muted-foreground">
                    Личный консьерж, встреча в аэропорту и приоритетный сервис на каждом этапе
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="BadgeCheck" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Гарантия лучшей цены</h3>
                  <p className="text-muted-foreground">
                    Прямые контракты с отелями и авиакомпаниями — цены ниже, чем у конкурентов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг для комфортного путешествия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-accent/20">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Популярные направления</h2>
            <p className="text-xl text-muted-foreground">
              Организуем путешествия по всему миру
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {destinations.map((dest, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-accent/30">
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

      <section id="cases" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Реальные кейсы нашей работы</h2>
            <p className="text-xl text-muted-foreground">
              Истории успешных путешествий наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании G.Point.Travel</h2>
              <p className="text-xl text-white/90 mb-6">
                Мы — команда профессионалов с многолетним опытом в индустрии туризма. Наша миссия — сделать каждое путешествие незабываемым, комфортным и доступным.
              </p>
              <p className="text-lg text-white/80 mb-6">
                G.Point.Travel специализируется на премиальном обслуживании: от организации индивидуальных туров до деловых поездок. Мы работаем напрямую с лучшими отелями мира, что позволяет предлагать выгодные цены без потери качества.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">10+</div>
                  <div className="text-white/80">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-white/80">стран</div>
                </div>
              </div>
            </div>
            <div className="relative">
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

      <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Рассчитайте стоимость тура</h2>
            <p className="text-xl text-muted-foreground">
              Узнайте примерную цену вашего путешествия за пару кликов
            </p>
          </div>
          <TourCalculator />
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на часто задаваемые вопросы
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
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

      <section className="py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Готовы начать путешествие?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и наш менеджер подберет идеальный тур специально для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Phone" className="text-accent" size={24} />
              <span className="font-semibold">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Icon name="Mail" className="text-accent" size={24} />
              <span className="font-semibold">info@gpoint.travel</span>
            </div>
          </div>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary text-lg px-8 animate-pulse-glow"
              onClick={() => setIsContactModalOpen(true)}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Начать путешествие
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Compass" className="text-accent" size={32} />
                <span className="text-xl font-bold">G.Point.Travel</span>
              </div>
              <p className="text-white/70">
                Ваш надежный партнер в мире премиальных путешествий
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Индивидуальные туры</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Бронирование отелей</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Деловые поездки</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">VIP-сервис</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-accent transition-colors">Кейсы</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  info@gpoint.travel
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2024 G.Point.Travel. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}