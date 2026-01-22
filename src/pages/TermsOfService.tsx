import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function TermsOfService() {
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
                  <Icon name="FileText" className="text-accent" size={32} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary">
                    Пользовательское соглашение
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Условия использования услуг G.Point.Travel
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">1. Общие положения</h2>
                  <p className="leading-relaxed mb-3">
                    Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между туристической компанией <strong className="text-primary">G.Point.Travel</strong> (далее — Исполнитель, Компания) и физическим или юридическим лицом (далее — Заказчик, Пользователь, Клиент), использующим услуги Компании.
                  </p>
                  <p className="leading-relaxed">
                    Использование сайта и услуг Компании означает полное и безоговорочное принятие Пользователем условий настоящего Соглашения. Если Пользователь не согласен с условиями Соглашения, он обязан прекратить использование услуг Компании.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">2. Предмет соглашения</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">2.1.</strong> Предметом настоящего Соглашения является предоставление Исполнителем Заказчику следующих услуг:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Организация индивидуальных туристических поездок по России и за рубежом</li>
                    <li>Бронирование гостиниц, отелей, апартаментов</li>
                    <li>Бронирование авиабилетов, железнодорожных билетов</li>
                    <li>Организация трансферов и экскурсионного обслуживания</li>
                    <li>Оформление туристической страховки</li>
                    <li>Визовая поддержка и консультации</li>
                    <li>Персональное сопровождение на всех этапах путешествия</li>
                    <li>Консультационные услуги по туристическим направлениям</li>
                  </ul>
                  <p className="leading-relaxed mt-3">
                    <strong className="text-primary">2.2.</strong> Конкретный перечень услуг, их стоимость и условия оказания определяются в индивидуальном договоре или заявке Заказчика.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">3. Порядок оказания услуг</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">3.1. Подача заявки:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Заказчик подает заявку через сайт, по телефону, email или мессенджеры</li>
                    <li>В заявке указываются: направление, даты, количество туристов, пожелания</li>
                    <li>Менеджер Компании связывается с Заказчиком для уточнения деталей</li>
                  </ul>

                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">3.2. Формирование программы:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Исполнитель разрабатывает индивидуальную программу тура</li>
                    <li>Программа согласовывается с Заказчиком и может корректироваться</li>
                    <li>После согласования формируется окончательная стоимость</li>
                  </ul>

                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">3.3. Заключение договора:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Стороны заключают договор на оказание туристических услуг</li>
                    <li>Договор может быть заключен в электронной форме или на бумажном носителе</li>
                    <li>К договору прилагается программа тура и условия оплаты</li>
                  </ul>

                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">3.4. Оплата:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Оплата производится в соответствии с условиями договора</li>
                    <li>Возможна частичная предоплата и полная оплата до начала тура</li>
                    <li>Способы оплаты: банковский перевод, наличные, электронные платежи</li>
                  </ul>

                  <p className="leading-relaxed">
                    <strong className="text-primary">3.5. Оказание услуг:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Исполнитель осуществляет бронирование и подтверждение всех услуг</li>
                    <li>Заказчик получает все необходимые документы (ваучеры, билеты)</li>
                    <li>В течение поездки Заказчик получает круглосуточную поддержку</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">4. Права и обязанности Исполнителя</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">4.1. Исполнитель обязуется:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Оказывать услуги качественно и в согласованные сроки</li>
                    <li>Предоставлять полную и достоверную информацию об услугах</li>
                    <li>Информировать Заказчика обо всех существенных изменениях</li>
                    <li>Обеспечить круглосуточную поддержку во время тура</li>
                    <li>Соблюдать конфиденциальность персональных данных Заказчика</li>
                    <li>Действовать в интересах Заказчика при решении возникающих вопросов</li>
                  </ul>

                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">4.2. Исполнитель имеет право:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Отказать в оказании услуг при предоставлении недостоверной информации</li>
                    <li>Изменить условия тура при изменении обстоятельств третьими лицами</li>
                    <li>Привлекать третьих лиц для исполнения обязательств</li>
                    <li>Требовать своевременной оплаты услуг</li>
                    <li>Расторгнуть договор в случае нарушения Заказчиком условий</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">5. Права и обязанности Заказчика</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">5.1. Заказчик обязуется:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Предоставлять полную и достоверную информацию о туристах</li>
                    <li>Своевременно оплачивать услуги согласно договору</li>
                    <li>Предоставлять необходимые документы (паспорта, визы, справки)</li>
                    <li>Соблюдать правила поведения в отелях и общественных местах</li>
                    <li>Соблюдать законодательство страны пребывания</li>
                    <li>Информировать Исполнителя о медицинских противопоказаниях</li>
                    <li>Бережно относиться к имуществу отелей и партнеров</li>
                  </ul>

                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">5.2. Заказчик имеет право:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Получать качественные услуги в соответствии с договором</li>
                    <li>Получать полную информацию об условиях тура</li>
                    <li>Вносить изменения в программу до начала поездки</li>
                    <li>Отказаться от услуг с соблюдением условий договора</li>
                    <li>Получать компенсацию при ненадлежащем оказании услуг</li>
                    <li>Обращаться за помощью в любое время во время поездки</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">6. Стоимость услуг и порядок оплаты</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">6.1.</strong> Стоимость услуг определяется индивидуально и указывается в договоре или счете.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">6.2.</strong> Стоимость может включать:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Проживание в отелях</li>
                    <li>Авиа- или железнодорожные билеты</li>
                    <li>Трансферы и экскурсии</li>
                    <li>Страховку</li>
                    <li>Визовую поддержку</li>
                    <li>Услуги менеджера и сопровождение</li>
                  </ul>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">6.3.</strong> Оплата производится в российских рублях, если иное не указано в договоре.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">6.4.</strong> Стандартные условия оплаты:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>30-50% предоплата при бронировании</li>
                    <li>Полная оплата не позднее чем за 14 дней до начала тура</li>
                    <li>Для туров с экспресс-бронированием — полная оплата в день заказа</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">7. Отказ от услуг и возврат средств</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">7.1.</strong> Заказчик имеет право отказаться от услуг в любое время до начала тура.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">7.2.</strong> При отказе удерживаются фактически понесенные расходы:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Более 30 дней до начала — фактические расходы (обычно 10-20%)</li>
                    <li>От 15 до 30 дней — 30-50% от стоимости тура</li>
                    <li>От 7 до 14 дней — 50-70% от стоимости тура</li>
                    <li>Менее 7 дней — 70-100% от стоимости тура</li>
                    <li>Невозвратные билеты и бронирования удерживаются полностью</li>
                  </ul>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">7.3.</strong> Возврат средств производится в течение 10 рабочих дней после расторжения договора.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-primary">7.4.</strong> При отказе по причине форс-мажора стороны согласовывают условия индивидуально.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">8. Ответственность сторон</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">8.1.</strong> Исполнитель несет ответственность за:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Качество оказанных услуг</li>
                    <li>Соответствие услуг согласованной программе</li>
                    <li>Действия привлеченных партнеров (отелей, перевозчиков)</li>
                  </ul>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">8.2.</strong> Исполнитель не несет ответственность за:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Задержки рейсов по вине авиакомпаний</li>
                    <li>Отказ в визе консульствами</li>
                    <li>Форс-мажорные обстоятельства (стихийные бедствия, войны, эпидемии)</li>
                    <li>Утерю документов или ценностей Заказчиком</li>
                    <li>Нарушение Заказчиком законодательства страны пребывания</li>
                    <li>Действия третьих лиц, не находящихся под контролем Исполнителя</li>
                  </ul>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">8.3.</strong> Заказчик несет ответственность за:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Предоставление недостоверной информации</li>
                    <li>Нарушение правил отелей и общественных мест</li>
                    <li>Несвоевременную оплату услуг</li>
                    <li>Ущерб, причиненный третьим лицам</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">9. Форс-мажор</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">9.1.</strong> Стороны освобождаются от ответственности за неисполнение обязательств при наступлении форс-мажорных обстоятельств:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4 mb-3">
                    <li>Стихийные бедствия (землетрясения, наводнения, ураганы)</li>
                    <li>Военные действия, теракты, массовые беспорядки</li>
                    <li>Эпидемии, пандемии, карантинные меры</li>
                    <li>Запреты властей на выезд или въезд</li>
                    <li>Банкротство авиакомпаний или отелей</li>
                  </ul>
                  <p className="leading-relaxed">
                    <strong className="text-primary">9.2.</strong> При наступлении форс-мажора Стороны согласовывают дальнейшие действия: перенос тура, замена направления или возврат средств за неоказанные услуги.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">10. Конфиденциальность</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">10.1.</strong> Исполнитель обязуется не разглашать персональные данные Заказчика третьим лицам, за исключением случаев, необходимых для исполнения обязательств (передача данных отелям, авиакомпаниям, консульствам).
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-primary">10.2.</strong> Подробная информация об обработке персональных данных содержится в <a href="/privacy-policy" className="text-accent hover:underline font-semibold">Политике конфиденциальности</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">11. Разрешение споров</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">11.1.</strong> Все споры и разногласия решаются путем переговоров.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">11.2.</strong> При невозможности достижения согласия спор передается в суд по месту нахождения Исполнителя в соответствии с законодательством Российской Федерации.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-primary">11.3.</strong> До обращения в суд обязательно направление претензии в письменном виде. Срок рассмотрения претензии — 10 рабочих дней.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">12. Заключительные положения</h2>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">12.1.</strong> Настоящее Соглашение вступает в силу с момента начала использования услуг Компании.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">12.2.</strong> Исполнитель имеет право вносить изменения в Соглашение. Новая редакция вступает в силу с момента размещения на сайте.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-primary">12.3.</strong> Действующая редакция Соглашения всегда доступна по адресу: <a href="/terms-of-service" className="text-accent hover:underline font-semibold">poehali.dev/terms-of-service</a>
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-primary">12.4.</strong> Продолжение использования услуг после внесения изменений означает согласие с новыми условиями.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-3">13. Контактная информация</h2>
                  <div className="bg-accent/5 p-6 rounded-lg space-y-3">
                    <p className="leading-relaxed">
                      <strong className="text-primary">Исполнитель:</strong><br/>
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
                    <p className="leading-relaxed">
                      <strong className="text-primary">Режим работы:</strong><br/>
                      Круглосуточная поддержка клиентов
                    </p>
                  </div>
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
