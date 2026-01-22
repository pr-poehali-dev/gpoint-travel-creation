import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://cdn.poehali.dev/files/536b8c7e-970e-4397-a8b1-ab8dc8af0f61.jpg" 
              alt="G.Point.Travel Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="text-lg md:text-2xl font-bold text-primary">G.Point.Travel</span>
          </a>
          <Button 
            className="bg-accent hover:bg-accent/90 text-primary"
            onClick={() => window.location.href = '/'}
          >
            <Icon name="Home" size={16} className="md:mr-2" />
            <span className="hidden md:inline">На главную</span>
          </Button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-xl border-2 border-accent/20">
            <CardContent className="p-6 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-accent" size={32} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary">
                    Политика конфиденциальности
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    В соответствии с Федеральным законом №152-ФЗ "О персональных данных"
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">1. Общие положения</h2>
                  <p className="leading-relaxed">
                    Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую туристическая компания <strong className="text-primary">G.Point.Travel</strong> (далее — Оператор), может получить о Пользователе во время использования сайта, программ и продуктов Оператора.
                  </p>
                  <p className="leading-relaxed mt-2">
                    Использование услуг Оператора означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации. В случае несогласия с этими условиями Пользователь должен воздержаться от использования услуг.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">2. Определения терминов</h2>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li><strong className="text-primary">Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                    <li><strong className="text-primary">Оператор</strong> — G.Point.Travel, организующий и/или осуществляющий обработку персональных данных, а также определяющий цели и содержание обработки персональных данных.</li>
                    <li><strong className="text-primary">Обработка персональных данных</strong> — любое действие или совокупность действий с персональными данными, совершаемых с использованием средств автоматизации или без их использования.</li>
                    <li><strong className="text-primary">Конфиденциальность</strong> — обязательное требование не раскрывать третьим лицам персональные данные субъекта без его согласия.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">3. Какие персональные данные мы собираем</h2>
                  <p className="leading-relaxed mb-3">
                    Оператор может обрабатывать следующие персональные данные Пользователя:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Фамилия, имя, отчество</li>
                    <li>Дата рождения</li>
                    <li>Контактный телефон</li>
                    <li>Адрес электронной почты (e-mail)</li>
                    <li>Паспортные данные (для оформления туристических путевок)</li>
                    <li>Загранпаспортные данные (для оформления виз и международных поездок)</li>
                    <li>Адрес регистрации и фактического проживания</li>
                    <li>Информация о предпочтениях в путешествиях</li>
                    <li>История заказов и бронирований</li>
                    <li>Данные об использовании сайта (cookies, IP-адрес, информация браузера)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">4. Цели обработки персональных данных</h2>
                  <p className="leading-relaxed mb-3">
                    Персональные данные Пользователя обрабатываются Оператором в следующих целях:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Организация и проведение индивидуальных туристических поездок</li>
                    <li>Бронирование отелей, авиабилетов, трансферов и экскурсий</li>
                    <li>Оформление туристических путевок и договоров</li>
                    <li>Получение виз и разрешительных документов для поездок</li>
                    <li>Оформление туристической страховки</li>
                    <li>Предоставление консультационных услуг</li>
                    <li>Обработка запросов и обращений Пользователя</li>
                    <li>Информирование о новых услугах и специальных предложениях</li>
                    <li>Улучшение качества обслуживания</li>
                    <li>Исполнение договорных обязательств</li>
                    <li>Соблюдение требований законодательства РФ</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">5. Правовые основания обработки</h2>
                  <p className="leading-relaxed">
                    Обработка персональных данных Пользователя осуществляется на основании:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mt-3">
                    <li>Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных»</li>
                    <li>Согласия Пользователя на обработку персональных данных</li>
                    <li>Договора на оказание туристических услуг между Оператором и Пользователем</li>
                    <li>Федерального закона от 24.11.1996 №132-ФЗ «Об основах туристской деятельности в Российской Федерации»</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">6. Способы и сроки обработки данных</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">Способы обработки:</strong> Оператор обрабатывает персональные данные как с использованием средств автоматизации (электронные базы данных), так и без использования таких средств (бумажные документы).
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">Сроки обработки:</strong> Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не менее:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>5 лет — для договоров и документов об оказании услуг (в соответствии с требованиями налогового законодательства)</li>
                    <li>3 года — для согласий на обработку персональных данных</li>
                    <li>До момента отзыва согласия Пользователем или до достижения целей обработки</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">7. Передача данных третьим лицам</h2>
                  <p className="leading-relaxed mb-3">
                    Персональные данные Пользователя могут быть переданы третьим лицам в следующих случаях:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li><strong className="text-primary">Отели и курорты</strong> — для бронирования номеров</li>
                    <li><strong className="text-primary">Авиакомпании</strong> — для оформления авиабилетов</li>
                    <li><strong className="text-primary">Страховые компании</strong> — для оформления туристической страховки</li>
                    <li><strong className="text-primary">Визовые центры и консульства</strong> — для получения виз</li>
                    <li><strong className="text-primary">Транспортные компании</strong> — для организации трансферов</li>
                    <li><strong className="text-primary">Туроператоры и партнеры</strong> — для организации экскурсий и услуг</li>
                  </ul>
                  <p className="leading-relaxed mt-3">
                    Все третьи лица, получающие доступ к персональным данным, обязаны соблюдать конфиденциальность и обеспечивать их защиту.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">8. Трансграничная передача данных</h2>
                  <p className="leading-relaxed">
                    В связи со спецификой туристической деятельности, персональные данные могут передаваться в иностранные государства, которые обеспечивают адекватную защиту прав субъектов персональных данных. Трансграничная передача осуществляется на основании согласия Пользователя и в соответствии с требованиями законодательства РФ.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">9. Права субъектов персональных данных</h2>
                  <p className="leading-relaxed mb-3">
                    В соответствии с Федеральным законом №152-ФЗ, Пользователь имеет право:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Получать информацию, касающуюся обработки его персональных данных</li>
                    <li>Требовать уточнения своих персональных данных, их блокирования или уничтожения</li>
                    <li>Отозвать согласие на обработку персональных данных</li>
                    <li>Получать информацию о сроках обработки и хранения данных</li>
                    <li>Обжаловать действия или бездействие Оператора в Роскомнадзоре или в судебном порядке</li>
                    <li>Требовать возмещения убытков в случае нарушения прав</li>
                    <li>На защиту своих прав и законных интересов, в том числе на компенсацию морального вреда</li>
                  </ul>
                  <p className="leading-relaxed mt-3">
                    Для реализации своих прав Пользователь может направить письменный запрос на адрес электронной почты <a href="mailto:g.point.travel@yandex.ru" className="text-accent hover:underline font-semibold">g.point.travel@yandex.ru</a> или по телефону <a href="tel:+79934945131" className="text-accent hover:underline font-semibold">+7 (993) 494-51-31</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">10. Меры по защите персональных данных</h2>
                  <p className="leading-relaxed mb-3">
                    Оператор принимает необходимые и достаточные организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Использование защищенных каналов связи (SSL/TLS шифрование)</li>
                    <li>Ограничение доступа к персональным данным</li>
                    <li>Применение средств защиты информации</li>
                    <li>Обучение сотрудников требованиям законодательства о защите данных</li>
                    <li>Регулярное резервное копирование данных</li>
                    <li>Антивирусная защита и мониторинг безопасности</li>
                    <li>Физическая защита помещений, где хранятся персональные данные</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">11. Использование файлов cookie</h2>
                  <p className="leading-relaxed">
                    Сайт использует файлы cookie для улучшения работы сайта и персонализации пользовательского опыта. Cookie — это небольшие текстовые файлы, которые сохраняются на устройстве Пользователя. Пользователь может настроить свой браузер для отклонения всех или некоторых cookie, однако это может ограничить функциональность сайта.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">12. Изменение Политики конфиденциальности</h2>
                  <p className="leading-relaxed">
                    Оператор имеет право вносить изменения в настоящую Политику конфиденциальности. Новая редакция Политики вступает в силу с момента ее размещения на сайте. Действующая редакция всегда находится на странице по адресу: <a href="/privacy-policy" className="text-accent hover:underline font-semibold">poehali.dev/privacy-policy</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">13. Обратная связь и контакты</h2>
                  <div className="bg-accent/5 p-6 rounded-lg space-y-3">
                    <p className="leading-relaxed">
                      <strong className="text-primary">Оператор персональных данных:</strong><br/>
                      G.Point.Travel
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-primary">Адрес:</strong><br/>
                      Санкт-Петербург, Россия
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-primary">Телефон:</strong><br/>
                      <a href="tel:+79934945131" className="text-accent hover:underline">+7 (993) 494-51-31</a>
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-primary">Email:</strong><br/>
                      <a href="mailto:g.point.travel@yandex.ru" className="text-accent hover:underline">g.point.travel@yandex.ru</a>
                    </p>
                  </div>
                  <p className="leading-relaxed mt-4">
                    Все предложения и вопросы по настоящей Политике следует направлять на указанные контакты. Оператор обязуется рассмотреть обращение в течение 30 дней с момента получения.
                  </p>
                </section>

                <section className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Дата последнего обновления:</strong> 22 января 2026 г.<br/>
                    <strong className="text-primary">Дата вступления в силу:</strong> 22 января 2026 г.
                  </p>
                </section>
              </div>

              <div className="mt-8 pt-6 border-t flex gap-4">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-accent hover:bg-accent/90 text-primary flex-1"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Вернуться на главную
                </Button>
                <Button 
                  onClick={() => window.print()}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-primary"
                >
                  <Icon name="Printer" size={16} className="mr-2" />
                  Печать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2026 G.Point.Travel. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
