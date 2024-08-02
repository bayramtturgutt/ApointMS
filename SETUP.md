# Proje Kurulum ve Çalıştırma Rehberi

Bu belge, **Appointment Management System** projesinin kurulumunu ve çalıştırılmasını adım adım açıklamaktadır. Proje, Java Spring Boot (backend) ve React (frontend) kullanılarak geliştirilmiştir.

## Gereksinimler

- **Java**: 11 veya daha yeni bir sürüm
- **Maven**: 3.6 veya daha yeni bir sürüm
- **Node.js**: LTS sürümü
- **npm**: Node.js ile birlikte gelir

## Adımlar

### 1. Backend Kurulumu

#### a. Java ve Maven Kurulumunu Kontrol Etme

Terminal veya komut istemcisinde aşağıdaki komutları kullanarak Java ve Maven sürümlerinizi kontrol edin:
```bash
java -version
mvn -version
```


#### b. .env Dosyasını Oluşturma ve Yapılandırma

backend/.env dosyasını oluşturun:
```bash
touch backend/.env
```
##### Database configuration
DB_URL=jdbc:postgresql://localhost:5432/appointment_management_system
DB_USERNAME=your_username
DB_PASSWORD=your_password

##### Server configuration
SERVER_PORT=8080

##### JWT configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=3600000

##### Example of another environment variable
APP_NAME=AppointmentManagementSystem


#### c. Bağımlılıkları Yükleyin

Backend dizinine gidin ve Maven bağımlılıklarını yükleyin:

```bash
cd backend
mvn install
```

#### d. Backend'i Başlatın

Spring Boot uygulamanızı başlatın:

```bash
mvn spring-boot:run
```
Uygulama genellikle http://localhost:8080 adresinde çalışacaktır.



### 2. Frontend Kurulumu
#### a. Node.js ve npm Kurulumunu Kontrol Etme

Node.js ve npm'in kurulu olduğundan emin olun:
```bash
node -v
npm -v
```


#### b. Bağımlılıkları Yükleyin

Frontend dizinine gidin ve npm paketlerini yükleyin:
```bash
cd ../frontend
npm install
```
#### c. Frontend'i Başlatın

React uygulamanızı başlatın:

```bash
npm start
```
#### 3. Test Etme ve Doğrulama

   Backend: Postman veya cURL gibi araçlar kullanarak API uç noktalarınızı test edin. Örneğin, http://localhost:8080/api/appointments gibi bir URL ile randevu verilerini çekebilirsiniz.
   Frontend: Web tarayıcınızı açarak http://localhost:3000 adresine gidin ve arayüzün düzgün çalıştığını doğrulayın.


***https://github.com/bayramtturgutt