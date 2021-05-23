import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      task: false,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(task) {
    this.setState({ task })
  }

  removeTodo() {
    const { listTodo, task } = this.state;
    const newListTodo = listTodo.reduce((acc, listTask) => {
      if(listTask !== task) return acc.concat(listTask);
      return acc;
    }, []);

    this.setState({ listTodo: newListTodo, task: false});
  }

  render() {
    const { listTodo, task } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} onClick={ this.selectTodo }/>
                </li>
              ))
            }
          </ul>
        }
         <button 
          data-testid="id-remove" 
          type="button" 
          disabled={!task}
          value="Remover"
          onClick={ this.removeTodo }
         >
           Remover
         </button>
      </div>
    );
  }
}
export default App;
