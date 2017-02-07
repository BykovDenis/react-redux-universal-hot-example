import React, {Component} from 'react';
import {WeatherWidget} from 'components';

export default
class WidgetConstructor extends Component {
  render() {
    return(
      <div>
        <h4>Виджет 5 коричневый</h4>
        <WeatherWidget/>
      </div>
    );
  }
}
