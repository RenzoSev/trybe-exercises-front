import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const { getByLabelText, getByDisplayValue, getByText } = render(<App />)
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; 
    const inputText = getByLabelText('Tarefa:');
    const btnAdd = getByDisplayValue('Adicionar');
    
    listTodo.forEach(task => {
        userEvent.type(inputText, task);
        userEvent.click(btnAdd);

        const taskToBeDefined = getByText(task);

        expect(taskToBeDefined).toBeDefined();
    });

  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content={'Task'}/>)

    const stringProps = getByText('Task');

    expect(stringProps).toBeDefined();
  })
})