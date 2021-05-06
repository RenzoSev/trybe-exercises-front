import React from 'react';

function Option(props) {
  const { Sigla, Nome } = props.state;

  return <option value={Sigla}>{Nome}</option>;
}

export default Option;
