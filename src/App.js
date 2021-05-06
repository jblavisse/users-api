import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Thing from './Thing';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    console.log("Coucou c'est le démarrage de l'application")  
    this.getUsers();
  }


  getUsers = () => {
    axios.get('https://randomuser.me/api/?results=9')
    .then(res => {
      this.setState({
        users: res.data.results
      })
    })
  }

  render() {

    // Objectif: retourner plutôt un composant <User/>
    const usersJSX = this.state.users.map(user => {
      return <li>
            <div>
              <p>{user.name.first} {user.name.last}</p>
              <img src={user.picture.thumbnail} alt=""/>
            </div>
        </li>
    })


    return (
      <div className="App">
          <button onClick={this.getUsers}>Charger des utilisateurs</button>

          <ul>
            {usersJSX}
          </ul>

          <Thing/>
          <Thing/>

      </div>
    );
  }
}

export default App;