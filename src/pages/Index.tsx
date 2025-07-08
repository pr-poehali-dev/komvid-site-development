import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">КОМВИД</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#rental"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Аренда
              </a>
              <a
                href="#objects"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Наши объекты
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Команда
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Коммерческая недвижимость
              <span className="block text-blue-600">премиум-класса</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Офисные и торговые помещения формата street retail на первых
              линиях жилых домов в пешей доступности от метро. Работаем с 2004
              года.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Посмотреть объекты
              </Button>
              <Button size="lg" variant="outline">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="MapPin"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle>Близость к метро</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все объекты расположены в пешей доступности от станций метро
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle>Высокий трафик</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Интенсивный пешеходный и автомобильный поток 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Clock"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle>Круглосуточный доступ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Возможность работы и доступа к помещениям в любое время
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Section */}
      <section id="rental" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Аренда коммерческой недвижимости
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предлагаем в аренду офисные и торговые помещения различной площади
              и конфигурации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Building" size={24} className="text-blue-600" />
                    <span>Офисные помещения</span>
                  </CardTitle>
                  <Badge variant="secondary">Street Retail</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Различная площадь и конфигурация</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Первые линии жилых домов</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Комфортные условия работы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Icon
                      name="ShoppingBag"
                      size={24}
                      className="text-blue-600"
                    />
                    <span>Торговые помещения</span>
                  </CardTitle>
                  <Badge variant="secondary">Street Retail</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Максимальная видимость</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Высокий пешеходный трафик</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Выгодное расположение</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objects Section */}
      <section id="objects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши объекты
            </h2>
            <p className="text-xl text-gray-600">
              Портфель качественной коммерческой недвижимости
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src="/img/df9fc9ec-5dc8-4b08-ab37-4acb9aec9c58.jpg"
                  alt="Офисное помещение"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Офисное помещение 150 м²</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Современный офис в центре города, 5 минут от метро
                </p>
                <div className="flex items-center justify-between">
                  <Badge>Доступно</Badge>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src="/img/1cfddc30-24ab-4b63-b8c9-cc67aedb05f9.jpg"
                  alt="Торговое помещение"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Торговое помещение 80 м²</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Витрина на первой линии, высокий пешеходный трафик
                </p>
                <div className="flex items-center justify-between">
                  <Badge>Доступно</Badge>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src="/img/ee6f6447-3fbc-4e17-bf6d-2a405b97803e.jpg"
                  alt="Офисное помещение"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Офисное помещение 200 м²</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Просторный офис с панорамными окнами
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Арендовано</Badge>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                О компании КОМВИД
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Компания «КОМВИД» основана в 2004 году и специализируется на
                управлении собственной коммерческой недвижимостью разного
                целевого назначения.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Портфель компании преимущественно составляют офисные и торговые
                помещения различной площади и конфигурации, находящиеся на
                первых линиях жилых домов в пешей доступности от метро.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Наши преимущества
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mt-1"
                  />
                  <span className="text-gray-700">
                    Собственная недвижимость высокого качества
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mt-1"
                  />
                  <span className="text-gray-700">
                    Формат street retail с максимальной видимостью
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mt-1"
                  />
                  <span className="text-gray-700">
                    Близость к станциям метро
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500 mt-1"
                  />
                  <span className="text-gray-700">
                    Круглосуточный доступ для арендаторов
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600">
              Профессионалы с многолетним опытом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-gray-400" />
                </div>
                <CardTitle>Иван Петров</CardTitle>
                <p className="text-gray-600">Генеральный директор</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  15 лет опыта в управлении коммерческой недвижимостью
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-gray-400" />
                </div>
                <CardTitle>Анна Сидорова</CardTitle>
                <p className="text-gray-600">Коммерческий директор</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Специалист по работе с арендаторами и развитию бизнеса
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-gray-400" />
                </div>
                <CardTitle>Михаил Козлов</CardTitle>
                <p className="text-gray-600">Технический директор</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Отвечает за техническое обслуживание и эксплуатацию объектов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для консультации
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-700">
                    Москва, ул. Тверская, д. 1, офис 100
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-700">info@komvid.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-gray-700">Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Расскажите о ваших потребностях"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">КОМВИД</h3>
              </div>
              <p className="text-gray-400">
                Управление коммерческой недвижимостью с 2004 года
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аренда офисов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аренда торговых помещений
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Управление недвижимостью
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@komvid.ru</p>
                <p>Москва, ул. Тверская, д. 1</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 КОМВИД. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
