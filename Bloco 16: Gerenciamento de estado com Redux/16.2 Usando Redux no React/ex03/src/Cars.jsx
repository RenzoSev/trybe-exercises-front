import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

import * as movieCar from './store/actions/moveCar';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(movieCar, dispatch)

const mapStateToProps = (state) => ({
  redCar: state.moveCar.cars.red,
  blueCar: state.moveCar.cars.blue,
  yellowCar: state.moveCar.cars.yellow,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
