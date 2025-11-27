# 101512887_comp3123_labtest2 - Weather App

## App hosted in vercel 
**Deployed App:** https://101512887-comp3123-labtest2.vercel.app/

## 1. Project Overview
This app allows the user to:
- Search for the current weather by city name.
- View weather details like temperature, description, etc...
- Toggle between Celsius and fahrenheit.
- See weather icon that changes depending of the current weather condition.

---

## 2. Technologies Used
- **React**
- **JavaScript**
- **OpenWeatherMap**
- **CSS**

---

## 3. API Used
**OpenWeatherMap – Current Weather Data**
Endpoint used: https://api.openweathermap.org/data/2.5/weather?q=<CITY>&appid=<API_KEY>&units=<metric|imperial>

Example API call (metric): https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=<API_KEY>&units=metric

---

## Screenshots
1. **Vercel Toronto weather**
![Vercel App Toronto Weather](/screenshots/app-vercel.png)
2. New York in Fahrenheit
![New York fahrenheit](/screenshots/new-york-f.png)
3. City not found.
![City Not Found](/screenshots/city-not-found.png)
4. Postman API result
![Postman](/screenshots/postman.png)

---

## How to run
### 1. Clone the repository
```bash
git clone https://github.com/ShadowK4t/101512887_comp3123_labtest2.git
cd 101512887_comp3123_labtest2

npm install

npm start
```
App runs at: http://localhost:3000