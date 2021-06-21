import React from 'react';

import { useCars } from '../hooks/contexts/car';

import carBlue from '../images/carBlue.jpeg';
import carRed from '../images/carRed.jpeg';
import carYellow from '../images/carYellow.jpeg';

function Cars() {
  const { red, blue, yellow } = useCars();
  
  return (
    <div>
      <div>
        <img
          className={red.color ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => red.setCar(!red.color)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blue.color ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => blue.setCar(!blue.color)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellow.color ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => yellow.setCar(!yellow.color)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

export default Cars;
