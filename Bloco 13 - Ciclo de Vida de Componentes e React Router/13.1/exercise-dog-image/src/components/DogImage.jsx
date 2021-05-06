import React, { Component } from 'react';
import Image from './Image';

export default class DogImage extends Component {
  constructor() {
    super();

    this.saveDog = this.saveDog.bind(this);
    this.checkDog = this.checkDog.bind(this);
    this.getDogName = this.getDogName.bind(this);

    this.state = {
      dog: {
        message: '',
        status: '',
      },
      loadingCat: true,
      dogName: '',
    };
  }

  componentDidMount() {
    if (localStorage.length) {
      this.getLocalStorage();
    } else this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.dog.message.includes('terrier');
  }

  componentDidUpdate() {
    const { dog: { message } } = this.state;
    const dogAlert = !message ? 'Cute cat' : message.split('/')[4];

    console.log(dogAlert);
  }

  getDogName({ target: { value } }) {
    this.setState({ dogName: value });
  }

  getLocalStorage() {
    const src = JSON.parse(localStorage.getItem('dogSaved'))[1];
    console.log(src);
    const dog = {
      message: src,
      status: '',
    };

    this.setState({ dog, loadingCat: false });
  }

  async fetchDog() {
    this.setState({ loadingCat: true }, async () => {
      const requestDog = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogObject = await requestDog.json();
      this.setState({ dog: dogObject, loadingCat: false });
    });
  }

  saveDog() {
    const { dogName, dog: { message } } = this.state;
    const dogArray = [dogName, message];
    localStorage.setItem('dogSaved', JSON.stringify(dogArray));
    this.fetchDog();
  }

  checkDog() {
    const cuteCat = 'https://i.pinimg.com/originals/d2/bd/e8/d2bde8df6f9111ad741ac8b803957b93.png';
    const { dog, loadingCat } = this.state;
    const { message } = dog;
    const source = message;

    return loadingCat ? cuteCat : source;
  }

  render() {
    return (
      <div>
        <h1>Opa!</h1>
        <img src={ this.checkDog() } alt="animal" />
        <input type="text" onChange={ this.getDogName } />
        <button type="button" onClick={ this.saveDog }>Salve o cachorrinho</button>
      </div>
    );
  }
}
