import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
        <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-accent/20">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-accent" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                  Согласие на обработку персональных данных
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{' '}
                  <button 
                    onClick={() => setShowDetails(true)}
                    className="text-accent hover:underline font-semibold"
                  >
                    политикой обработки персональных данных
                  </button>
                  {' '}в соответствии с ФЗ-152 "О персональных данных".
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button 
                  onClick={handleAccept}
                  className="bg-accent hover:bg-accent/90 text-primary w-full sm:w-auto"
                >
                  <Icon name="Check" size={16} className="mr-2" />
                  Принять
                </Button>
                <Button 
                  onClick={handleDecline}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-primary w-full sm:w-auto"
                >
                  Отклонить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Политика обработки персональных данных
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              В соответствии с Федеральным законом №152-ФЗ "О персональных данных"
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h3 className="font-bold text-primary mb-2">1. Общие положения</h3>
              <p>
                Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных G.Point.Travel (далее — Оператор).
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">2. Какие данные мы собираем</h3>
              <p className="mb-2">Мы можем собирать следующие персональные данные:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>ФИО</li>
                <li>Контактные данные (телефон, email)</li>
                <li>Данные паспорта (для оформления туров)</li>
                <li>Информация о предпочтениях и пожеланиях к поездкам</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">3. Цели обработки данных</h3>
              <p className="mb-2">Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Организация индивидуальных туров</li>
                <li>Бронирование отелей и билетов</li>
                <li>Консультации и поддержка клиентов</li>
                <li>Информирование о специальных предложениях</li>
                <li>Исполнение договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">4. Правовые основания</h3>
              <p>
                Обработка персональных данных осуществляется на основании согласия субъекта персональных данных, а также для исполнения договора на оказание туристических услуг.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">5. Передача данных третьим лицам</h3>
              <p>
                Персональные данные могут быть переданы партнерам (отелям, авиакомпаниям, страховым компаниям) исключительно для исполнения договорных обязательств по организации вашего путешествия.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">6. Срок хранения данных</h3>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не менее срока, установленного законодательством РФ.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">7. Ваши права</h3>
              <p className="mb-2">Вы имеете право:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Получать информацию об обработке ваших данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Обжаловать действия Оператора в Роскомнадзоре или суде</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">8. Безопасность данных</h3>
              <p>
                Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-primary mb-2">9. Контакты</h3>
              <p>
                По вопросам обработки персональных данных обращайтесь:<br/>
                Email: g.point.travel@yandex.ru<br/>
                Телефон: +7 (993) 494-51-31
              </p>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Дата последнего обновления: 22 января 2026 г.
              </p>
            </section>
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              onClick={() => {
                handleAccept();
                setShowDetails(false);
              }}
              className="bg-accent hover:bg-accent/90 text-primary flex-1"
            >
              Принять
            </Button>
            <Button 
              onClick={() => setShowDetails(false)}
              variant="outline"
              className="flex-1"
            >
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
