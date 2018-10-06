import React, { Component } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import AccountWidget from './components/AccountWidget';
import { Provider } from 'mobx-react';
import uiStore from './stores/uiStore';

export default class App extends Component {
  render() {
    return (
      <Provider uiStore={uiStore} >
        <div className="app">
          <AccountWidget />
          <Sidebar />
          <div className="container" ></div>
        </div>
      </Provider>
    );
  }
}