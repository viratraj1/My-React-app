

import { useEffect, useState } from "react";
import "./weather.css";
import axios from "axios";

const WeatherApp = () => {
    const [myweather, setMyweather] = useState(null);

    const allIcons = {
       
        "01d": "https://media.istockphoto.com/id/2152312930/video/scenic-view-of-wheat-crop-during-day-time.jpg?s=640x640&k=20&c=03-HLV-5QfUTXu555k2QYnodikzvluzMfu3jYl5WtaE= ",
        "01n": "https://media.istockphoto.com/id/2152312930/video/scenic-view-of-wheat-crop-during-day-time.jpg?s=640x640&k=20&c=03-HLV-5QfUTXu555k2QYnodikzvluzMfu3jYl5WtaE=",
        "02d": "https://media.istockphoto.com/id/1317625168/video/4k-video-footage-of-beautiful-lush-green-mountains.jpg?s=640x640&k=20&c=CnsFjLm4vp2pA1T7kz8wFvdZj9-N9mEVAm1FZWI0efs=",
        "02n": "https://media.istockphoto.com/id/1317625168/video/4k-video-footage-of-beautiful-lush-green-mountains.jpg?s=640x640&k=20&c=CnsFjLm4vp2pA1T7kz8wFvdZj9-N9mEVAm1FZWI0efs=",
        "03d": "https://media.istockphoto.com/id/538828082/video/t-l-8k-solitary-tree-in-middle-of-meadow-at-sunrise.jpg?s=640x640&k=20&c=osrNiBBQFN_3pmsEiEsYqqjNpKjAkgAQeCjkWFZA1ww=",
        "03n": "https://media.istockphoto.com/id/538828082/video/t-l-8k-solitary-tree-in-middle-of-meadow-at-sunrise.jpg?s=640x640&k=20&c=osrNiBBQFN_3pmsEiEsYqqjNpKjAkgAQeCjkWFZA1ww=",
        "04d": "https://media.istockphoto.com/id/2164590472/video/monsoon-season-india.jpg?s=640x640&k=20&c=Oco6HY65HBdQFYl6yB4HJOiBtEF3OYnEtANkj5M7OuI=",
        "04n": "https://media.istockphoto.com/id/2164590472/video/monsoon-season-india.jpg?s=640x640&k=20&c=Oco6HY65HBdQFYl6yB4HJOiBtEF3OYnEtANkj5M7OuI=",
        "09d": "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=",
        "09n": "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=",
        "10d": "https://media.istockphoto.com/id/1576690556/video/lightning-strikes-in-the-clouds-above-tree-in-rainstorm.jpg?s=640x640&k=20&c=NSU6gyWxUKrW33jkdo6a268dRY3DqFyh6FwN1LS0DC0=",
        "10n": "https://media.istockphoto.com/id/1576690556/video/lightning-strikes-in-the-clouds-above-tree-in-rainstorm.jpg?s=640x640&k=20&c=NSU6gyWxUKrW33jkdo6a268dRY3DqFyh6FwN1LS0DC0=",
        "13d": "https://media.istockphoto.com/id/2161568990/video/4k-aerial-view-of-triloknath-village-which-is-build-on-cliff-of-mountain-at-lahaul-himachal.jpg?s=640x640&k=20&c=xhoqgtF6z2D85hbUSRgbrZKlSMkxpSvVRMrZTL0DvAQ=",
        "13n": "https://media.istockphoto.com/id/2161568990/video/4k-aerial-view-of-triloknath-village-which-is-build-on-cliff-of-mountain-at-lahaul-himachal.jpg?s=640x640&k=20&c=xhoqgtF6z2D85hbUSRgbrZKlSMkxpSvVRMrZTL0DvAQ="
      
    };
   

    const search = async (query) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=c8f21f86ece4d2370667123432f0e078`);
            
            const icon = allIcons[data.weather[0].icon];
            setMyweather({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            // Optionally set an error state here
        }
    };

    useEffect(() => {
        search("nepal");
    }, []);

    const handleSearch = () => {
        const query = document.querySelector(".search-bar input").value;
        search(query);
    };

    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search City..." />
                <img 
                    src="https://cdn-icons-png.flaticon.com/128/54/54481.png" 
                    alt="search" 
                    onClick={handleSearch} 
                
                />
            </div>
            {myweather ? (
                <>
                
                  

                <img
                        src={myweather.icon} 
                        className="weather-icon" 
                        alt="weather icon" 

                    />
                    <p className="temperature">{myweather.temperature} °C</p>
                    <p className="location">{myweather.location}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/15201/15201388.png" 
                                alt="humidity" 
                            />
                            <div>
                                <p className="pp">{myweather.humidity} %</p>
                                <span className="speed">Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/1506/1506761.png" 
                                alt="wind speed" 
                            />
                            <div>
                                <p className="pp">{myweather.windSpeed} m/s</p>
                                <span className="speed">Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WeatherApp;
