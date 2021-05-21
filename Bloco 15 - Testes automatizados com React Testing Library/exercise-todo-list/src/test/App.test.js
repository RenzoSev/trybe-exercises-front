import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });
    
  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercício 1', () => {
  it('Verificando botão de adicionar', () => {
    const { getByDisplayValue, getByLabelText, getByText } = render(<App />);
    const inputText = getByLabelText('Tarefa:');
    const btnAdd = getByDisplayValue('Adicionar');
    const textValue = 'Tarefa';

    expect(btnAdd.type).toBe('button');
    expect(btnAdd).toBeDefined();

    userEvent.type(inputText, textValue);
    userEvent.click(btnAdd);

    const addedTextValue = getByText(textValue);
    expect(addedTextValue).toBeDefined();
  })
})
