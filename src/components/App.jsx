import React, { Component } from 'react';
// import PokemonForm from './PokemonForm';
// import { ToastContainer } from 'react-toastify';
// import PokemonInfo from './PokemonInfo';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import * as API from 'services/api'

export default class App extends Component {
  
  state = {
    pokemonName: '',
    materials: [],
    isLoading:false,
  }

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
    const material = await API.addMaterial(values);
    this.setState(state => ({
      materials: [...state.materials, material],
      isLoading:false,
    }));
    } catch (error) {
      console.log(error);
}
  }

  handleFormSubmit = pokemonName => {
    this.setState({pokemonName });;
  }

  componentDidMount() { 
    this.setState({ loading: true });

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(pokemon => this.setState({ pokemon }))
    .finally(this.setState({ loading: false }));
   }
  
  render() {
    return(
      <div
        style={{
          maxWidth: 1170, margin: '0 auto', padding: 20
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
        }}
      >
        <MaterialEditorForm
          onSubmit={this.addMaterial}
          isSubmiting={ this.state.isLoading}
        />
        
        {/* <PokemonForm onSubmit={this.handleFormSubmit}></PokemonForm>
        <PokemonInfo pokemonName={ this.state.pokemonName} />
        <ToastContainer autoClose={3000} /> */}
        
        {/* {this.state.loading && ( <h1>Загружаем...</h1>)}
        {this.state.pokemon && (<div> Pokemon after the fetch </div>) } */}
      </div>
    );
  }
  
  
};
