import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';

class TrafficSignal extends React.Component {
  renderSignal = (signalColor) => {
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  render() {

    const { signalColor, changeSignal } = this.props;
    console.log(signalColor)

    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={(e) => changeSignal(e.target.innerText.toLowerCase())}>Red</button>
          <button type="button" onClick={(e) => changeSignal(e.target.innerText.toLowerCase())}>Yellow</button>
          <button type="button" onClick={(e) => changeSignal(e.target.innerText.toLowerCase())}>Green</button>
        </div>
        <img className="signal" src={this.renderSignal(signalColor)} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (color) => dispatch(changeSignal(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);