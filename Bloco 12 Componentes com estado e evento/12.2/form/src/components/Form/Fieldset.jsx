import React, { Component } from 'react';

import { states, inputs } from '../../libs/data';

import Input from './Input';
import Option from './Option';

class MainFieldset extends Component {
    constructor() {
        super()
    
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
          name: '',
          email: '',
          cpf: '',
          address: '',
          city: '',
          radio: '',
          error: {
            name: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            radio: '',
          }
        }
      }
    
      changeState(name, value) {
        this.setState((oldState) =>({
          error: {
            ...oldState.error,
            [name]: value
          }
        }))
      }
    
      handleChange({ target: { value : { length } } }, { name, carac }){
        if(length < carac) {
          this.changeState(name, '')
          return 
        }
    
        this.changeState(name, 'Max carac')
      }

    render(){
    return (
        <fieldset>
        
        {inputs.map((input) => (
          <Input 
          input={input} 
          key={input.id}
          onChange={(e) => this.handleChange(e, input)}
          error={this.state.error[input.name]}
          />
          
        ))}
        
        <select name='states'>
          <option defaultValue value>Cidades</option>
          {states.map((state) => (
              <Option state={state} key={state.ID}/>
          ))}
        
        </select>
      </fieldset>
    )
}
}

export default MainFieldset;