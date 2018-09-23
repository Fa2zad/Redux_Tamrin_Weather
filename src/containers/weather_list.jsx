import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const population = cityData.city.population;
        const firstWeatherTime = cityData.list[0].dt_txt;
        const firstWeatherTemp = cityData.list[0].main.temp;
        const firstWeatherPressure = cityData.list[0].main.pressure;
        const firstWeatherHumidity = cityData.list[0].main.humidity;
        return (
            <tr key={name}>
                <td>
                    {name}<br />
                    population: {population}<hr />
                    {firstWeatherTime} GMT<br />
                    {firstWeatherTemp} °C<br />
                    {firstWeatherPressure} hPa<br />
                    {firstWeatherHumidity} %
                </td>
                <td><Chart data={temps} color="orange" units="°C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (Celsius)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; //{ weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);