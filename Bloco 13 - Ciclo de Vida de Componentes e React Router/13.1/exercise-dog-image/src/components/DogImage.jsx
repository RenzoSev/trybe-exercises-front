import React, { Component } from 'react';

export default class DogImage extends Component {
  constructor() {
    super();

    this.saveDog = this.saveDog.bind(this);

    this.state = {
      dog: undefined,
      loadingCat: true,
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState({ loadingCat: true }, async () => {
      const requestDog = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogObject = await requestDog.json();
      this.setState({ dog: dogObject, loadingCat: false });
    });
  }

  saveDog() {
    this.fetchDog();
  }

  render() {
    const cuteCat = 'https://i.pinimg.com/originals/d2/bd/e8/d2bde8df6f9111ad741ac8b803957b93.png';
    const { dog, loadingCat } = this.state;

    return (
      <div>
        <h1>Opa!</h1>
        <img src={ loadingCat ? cuteCat : dog.message } alt="animal" />
        <button onClick={this.saveDog}>Clique aqui</button>
      </div>
    );
  }
}
