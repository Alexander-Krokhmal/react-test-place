import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

// const styles = { form: { marginBottom: 20 } };

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

      if (this.state.pokemonName.trim() === '') {
        toast.error('Введите имя Покемона!');
          return;
      }

    this.props.onSubmit(this.state.pokemonName);  //передаём данные в App
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
            />
            <button type="submit">
                <ImSearch style={{ marginRight: 8 }} />
                Найти
            </button>
      </form>
    );
  }
}

export default PokemonForm;
