const APIKey = '89a828a6427dbfe875625255fc1014e1'; 
export const getCurrentWheatherApi = (cityName) => `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKey}&units=metric`;
export const getForecastWheatherApi = (cityName) => `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${APIKey}&units=metric`;