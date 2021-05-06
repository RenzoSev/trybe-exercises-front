import React, { Component } from 'react';

export default class Image extends Component {
  constructor() {
    super();

    this.state = {
      src: '',
    };
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.length) {
      const src = JSON.parse(localStorage.getItem('dogSaved'))[1];
      this.setState({ src });
    }
  }

  render() {
    const { checkDog } = this.props;

    return (
      <img src={ this.state.src } alt="animal" />
    );
  }
}
