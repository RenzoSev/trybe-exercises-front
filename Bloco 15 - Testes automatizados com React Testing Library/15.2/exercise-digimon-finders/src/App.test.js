import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {
  afterEach(() => jest.clearAllMocks());

  it('renders App', async () => {
    const { getByText, getByRole } = render(<App />);
    
    const inputSearch = getByRole('textbox');
    const linkElement = getByText(/Faça uma pesquisa/i);
    const searchButton = getByRole('button', { name: /search digimon/i });
   
    expect(inputSearch).toHaveValue('');
    expect(linkElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('type a Digimon', () => {
    const { getByRole } = render(<App />);

    const digimonName = 'Agumon';

    const inputSearch = getByRole('textbox');
    expect(inputSearch).toHaveTextContent('');

    userEvent.type(inputSearch, digimonName);
    expect(inputSearch).toHaveValue(digimonName);
  });

  it('fetch Digimon', async () => {
    const { findByText, findByRole, getByRole } = render(<App />);
    
    const inputDigimon = getByRole('textbox');
    const searchButton = getByRole('button', { name: /search digimon/i });
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];
    const digimonName = 'Agumon';
    const digimonURL = `https://digimon-api.vercel.app/api/digimon/name/${digimonName}`
    
    const fetchApi = global.fetch = jest.fn(async () => ({
      json: async () => digimon,
    }));

    userEvent.type(inputDigimon, digimonName);
    expect(inputDigimon).toHaveValue(digimonName);
    userEvent.click(searchButton);

    expect(fetchApi).toHaveBeenCalled();
    expect(fetchApi).toHaveBeenCalledWith(digimonURL);

    const digimonNameDisplay = await findByRole('heading', {  name: /agumon/i});
    expect(digimonNameDisplay).toBeInTheDocument();
    expect(digimonNameDisplay).toHaveTextContent(digimonName);

    const digimonInfoDisplay = await findByText(/level: rookie/i);
    expect(digimonInfoDisplay).toBeInTheDocument();;

    const digimonImage = await findByRole('img', { name: /agumon/i });
    expect(digimonImage).toBeInTheDocument();
  });

  it('fetch wrong Digimon', async () => {
    const digimonName = 'asifhjdoifjdsio';
    const ErrorMsg = `${digimonName} is not a Digimon in our database.`;
    const digimonURL = `https://digimon-api.vercel.app/api/digimon/name/${digimonName}`

    const fetchApi = global.fetch = jest.fn(async () => ({
      json: async () => ({ ErrorMsg }),
    }));;

    const { getByRole, findByRole } = render(<App />);

    const inputSearch = getByRole('textbox');
    const searchButton = getByRole('button', { name: /search digimon/i });

    userEvent.type(inputSearch, digimonName);
    userEvent.click(searchButton);

    const errorMsg = await findByRole('heading', { name: ErrorMsg });
    expect(errorMsg).toBeInTheDocument();

    expect(fetchApi).toHaveBeenCalled();
    expect(fetchApi).toHaveBeenCalledWith(digimonURL);
  });

  it('doesnt call fetch when search is empty', async () => {
    const {getByRole } = render(<App />);

    const inputSearch = getByRole('textbox');
    const searchButton = getByRole('button', { name: /search digimon/i });
    expect(inputSearch).toHaveValue('');

    userEvent.type(inputSearch, '');
    expect(inputSearch).toHaveValue('');

    userEvent.click(searchButton);
    expect(global.fetch).toBeCalledTimes(0);
  });
});
