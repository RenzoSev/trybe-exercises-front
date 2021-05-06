import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image} = this.props.pokemon;

        return (
            <div>
                <h1>{name}</h1>
                <p>{type}</p>
                <p>{`Average weight ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
  };

export default Pokemon;
