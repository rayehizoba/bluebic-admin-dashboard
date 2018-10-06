import React, { Component } from 'react';
import './App.scss';
import bluebicLogo from './assets/bluebicLogo.svg';
import logo from './assets/logo.png';
import arrowDown from './assets/arrow-down.svg';
import arrowDownWhite from './assets/arrow-down-white.svg';
import dashboard from './assets/dashboard.svg';
import check from './assets/check.svg';
import plus from './assets/plus.svg';
import student from './assets/student.svg';
import sms from './assets/sms.svg';
import book from './assets/book.svg';
import employees from './assets/employees.svg';
import list from './assets/list.svg';
import parents from './assets/parents.svg';
import people from './assets/people.svg';
import reportCards from './assets/report-cards.svg';
import finance from './assets/finance.svg';
import event from './assets/event.svg';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

class App extends Component {
  constructor() {
    super()
    this.schools = [
      { name: 'Handmaid\'s International', active: true },
      { name: 'Holy Infant College', active: false },
      { name: 'Great Delight Schools', active: false },
    ];
    this.sidebarItems = [
      { icon: dashboard, name: 'DashBoard', dropdown: false },
      { icon: student, name: 'Students', dropdown: true },
      { icon: employees, name: 'Employees', dropdown: true },
      { icon: parents, name: 'Guardiance', dropdown: false },
      { icon: list, name: 'Attendance', dropdown: true },
      { icon: finance, name: 'Finance', dropdown: true },
      { icon: book, name: 'Subjects', dropdown: false },
      { icon: people, name: 'Batches', dropdown: false },
      { icon: reportCards, name: 'Report Cards', dropdown: false },
      { icon: sms, name: 'SMS', dropdown: false },
      { icon: event, name: 'Events', dropdown: true },
    ]
  }
  accountWidgetVisible = observable.box(false);
  toggleAccountWidget = action(() =>  {
    this.accountWidgetVisible = !this.accountWidgetVisible
  });
  render() {
    return (
      <div className="app">
        <div className="sidebar" >
          <div
            onClick={this.toggleAccountWidget}
            className="sidebar-head touchable-opacity"
          >
            <div className="sidebar-avatar" >
              <img src={logo} alt="" />
            </div>
            <div className="sidebar-title" >Handmaid's International</div>
            <img src={arrowDown} alt="" />
          </div>

          <div className="sidebar-body" >
            {this.sidebarItems.map(i => (
              <div className="sidebar-item touchable-highlight" >
                <div className="flex-row" >
                  <img className="sidebar-icon" src={i.icon} alt="" />
                  <div >{i.name}</div>
                </div>
                {i.dropdown && (
                  <img className="sidebar-arrow-down" src={arrowDownWhite} alt="" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="container" ></div>

        {this.accountWidgetVisible && (
          <div className="account-widget" >
            <div className="account-widget-head" >
              <div className="flex-row" >
                <img src={bluebicLogo} alt="" />
                <span >Your Bluebic Account</span>
              </div>
              <div onClick={this.toggleAccountWidget} className="touchable-opacity" >
                <i className="material-icons">close</i>
              </div>
            </div>

            <div className="account-widget-body" >
              {this.schools.map(s => (
                <div className={"account-widget-item touchable-highlight " + (s.active ? 'active' : '')} >
                  <span >{s.name}</span>
                  <img src={check} alt="" />
                </div>
              ))}
              <div className={"account-widget-item touchable-highlight"} >
                <div >
                  <img src={plus} alt="" />
                  <span style={{ paddingLeft: 5 }} >Add a New School</span>
                </div>
              </div>
              <hr />
              <small >You are signed in as <strong>dukauwa.du@gmail.com</strong></small>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default observer(App);
