import React, {Component} from 'react';

export default class CustomForm extends Component {
  render() {
    const style = require('./CustomForm.scss');
    return (
      <form name="custom-form" method="get" className={style['custom-form']}>
        <label> name:<input type="name" id="name" /> </label>
        <input type="submit" value="send to server" />
      </form>
    );
  }
}
