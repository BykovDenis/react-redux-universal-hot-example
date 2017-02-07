import React, {Component} from 'react';

export default
class WeatherWidget extends Component{
  render() {
    return (
      <!-- Виджет: 5, цвет: brown-->
      <div className="widget-right weather-right--type1 widget-right--brown">
        <div className="widget-right__header widget-right__header--brown">
          <div className="widget-right__layout">
            <h1 className="widget-right__title">Moscow</h1>
            <p className="widget-right__description">Cloudy Skies</p>
          </div><img width="128" height="128" alt="Cloudy Skies" className="weather-right__icon weather-right__icon--type1"/>
        </div>
        <div className="weather-right weather-right--brown">
          <div className="weather-right__layout">
            <div className="weather-right__temperature">10<span className="widget-right__units">&#176;</span></div>
            <div className="weather-right__weather">
              <div className="weather-right-card">
                <table className="weather-right__table">
                  <tr className="weather-right__items">
                    <th colspan="2" className="weather-right__item">Details</th>
                  </tr>
                  <tr className="weather-right__items">
                    <td className="weather-right__item">Feels like</td>
                    <td className="weather-right__item weather-right__feels">-13<span className="widget-right-card__units">&#176;</span></td>
                  </tr>
                  <tr className="weather-right__items">
                    <td className="weather-right__item">Wind</td>
                    <td className="weather-right__item weather-right__wind-speed">3 m/s West</td>
                  </tr>
                  <tr className="weather-right-card__items">
                    <td className="weather-right__item">Humidity</td>
                    <td className="weather-right__item weather-right__humidity">74%</td>
                  </tr>
                  <tr className="weather-right-card__items">
                    <td className="weather-right__item">Precip</td>
                    <td className="weather-right__item"></td>
                  </tr>
                  <tr className="weather-right-card__items">
                    <td className="weather-right__item">Pressure</td>
                    <td className="weather-right__item weather-right__pressure">1003.0 mb</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-right__footer widget-right__footer--brown">
          <div className="widget-right__layout"><a href="http://openweathermap.org/" className="widget-right__link">OpenWeatherMap</a>
            <div className="widget-right__date widget__date">20:16 Mar 28</div>
          </div>
        </div>
      </div>
    );
  }
}
