# React + Vite

## Grup Bilgileri

| Öğrenci No  | Adı Soyadı          | Bölüm          		|   Grup Üyelerinin Github Profilleri            |
|-------------|---------------------|--------------------------|------------------------------------------------|
| 5190505058  | Kais Al Husrom		| Yazılım Mühendisliği | [Github](https://github.com/KaisAlHusrom)     	|
| 5190505067  | ABDULLAH ALHASAN   	| Yazılım Mühendisliği | [Github](https://github.com/abdllah07)     	|
| 5190505084  | Abdalla youssef   	| Yazılım Mühendisliği | [Github](https://github.com/AbdallaYoussef1)  	|
| 5200505054  | MUHAMMED HATTAB   	| Yazılım Mühendisliği | [Github](https://github.com/muhammadkhatab)	|

# Proje Açıklaması
Genel Bakış: CCServices web uygulaması ile sanal bir dünya turuna çıkın. Bu özellik zengin uygulama, React, React Router DOM, Material-UI, Axios, Redux Toolkit teknolojilerini kullanmaktadır ve GeoDB Cities API, Currency Conversion and Exchange Rates API ve WeatherAPI.com API entegrasyonu ile kullanıcılara sorunsuz ve bilgilendirici bir deneyim sunmaktadır.
Ana Özellikler:
1.	Şehir Keşfi:
•	GeoDB Cities API kullanılarak, kullanıcılar dünya genelinde şehirler hakkında detaylı bilgiler arayabilir ve keşfedebilir.
•	Uygulama, kullanıcıların şehirleri keşfetmelerine, coğrafi konumlarını görmelerine ve nüfus, ülke ve saat dilimi gibi önemli detaylara erişmelerine olanak tanır.
2.	Hava Durumu Güncellemeleri:
•	WeatherAPI.com API ile entegre edilen uygulama, aranan şehirler için gerçek zamanlı hava durumu güncellemeleri sunar.
•	Kullanıcılar, mevcut hava koşulları, sıcaklık, nem ve diğer önemli meteorolojik detaylar hakkında bilgi sahibi olabilirler.
3.	Para Birimi Dönüşümü:
•	Döviz kurları API'ları ile özelleştirilmiş entegrasyonu kullanılan Para Birimi Dönüşümü özelliği, kullanıcıların kolayca para birimleri dönüştürmelerine olanak tanır.
•	Gerçek zamanlı döviz kurları sağlanır, böylece kullanıcılar en son piyasa verilerine dayanarak doğru para birimi dönüşümleri gerçekleştirebilirler.
4.	Duyarlı Tasarım:
•	Uygulama, Material-UI kullanılarak duyarlı bir düzenle tasarlanmıştır, böylece masaüstü bilgisayarlar, tabletler ve mobil telefonlar dahil olmak üzere çeşitli cihazlarda sorunsuz bir deneyim sağlanır.
5.	Redux Durum Yönetimi:
•	Redux Toolkit, karmaşık uygulama mantığı için merkezi ve öngörülebilir bir durum sağlamak için kullanılır.
•	Küresel durumlar, kullanıcı tercihleri, mod seçimi (açık / koyu) gibi verilerin yönetiminde kullanılır.

# Project Dosya Yapısı
|--node_modules
|--src/
|-- Assets/
|     |-- city.jpg
|	|-- currencies.jpg
|-- Components/
|   |-- AdminMainButton/
|       |-- AdminMainButton.jsx
|   |-- CustomModal/
|       |-- CustomModal.jsx
|   |-- CustomDrawer/
|       |-- CustomDrawer.jsx
|   |--AppCard.jsx
|   |--CityCard.jsx
|   |--CityDetailsCard.jsx
|   |--ContentComponent.jsx
|   |--Links.jsx
|   |--LocationSection.jsx
|   |--MainMenuList.jsx
|   |--NearCities.jsx
|   |--NearCitiesPopover.jsx
|   |--SearchSection.jsx
|   |--SettingsDrawer.jsx
|   |--WeatherCard.jsx
|
|-- Helpers/
|   |-- countriesName.json
|   |-- DateHelpers.js
|
|-- Pages/
|   |-- MainPage/
|   |  |--MainPage.jsx
|   |-- CitiesPage/
|   |  |--CitiesPage.jsx
|   |-- ErrorPage/
|   |  |--ErrorPage.jsx
|   |-- MainPage/
|   |  |--MainPage.jsx
|   |-- NotFoundPage/
|   |  |-- NotFoundPage.jsx
|   |-- index.jsx
|-- Redux/
|   |-- Slices/
|       |-- langSlice.js
|       |-- modeSlice.js
|   |-- Store.js
|
|-- Routers/
|   |-- Links/
|   |   |--MainMenu.jsx
|   |-- CustomRouterProvider.jsx
|
|-- Services/
|   |-- citiesService.js
|   |-- currencyService.js
|   |-- weatherService.js
|
|-- Theme/
|   |-- CustomThemeProvider.jsx
|-- App.jsx
|-- App.css
|-- main.jsx
|-- index.html
|-- vite.config.js
|-- package.json
|-- package-lock.json
|-- README.md

# Kurulum ve Başlatma
Github’tan yüklendiğinde: (npm install) komutunu çalıştırınız.
Projeyi başlatmak için: (npm run dev) komutunu çalıştırınız.

