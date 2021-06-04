import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import propTypes from 'prop-types';

import { fetchCharacter } from '../store/actions/submitForm'

import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { fetchCharacter } = this.props;

  fetchCharacter(inputText);

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ fetchCharacter }, dispatch)

export default connect(null, mapDispatchToProps)(SearchForm);
