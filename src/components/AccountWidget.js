import React, { Component } from 'react';
import bluebicLogo from '../assets/bluebicLogo.svg';
import check from '../assets/check.svg';
import plus from '../assets/plus.svg';
import logout from '../assets/logout.svg';
import profile from '../assets/profile.svg';
import { observer, inject } from 'mobx-react';

export default inject('uiStore')(
  observer(
    class AccountWidget extends Component {
      constructor(props) {
        super(props);
        this.uiStore = props.uiStore;
      }
      render() {
        if (!this.uiStore.showAccountWidget.get()) {
          return null;
        }
        return (
          <div className="account-widget" >
            <div className="account-widget-head" >
              <div className="flex-row" >
                <img src={bluebicLogo} alt="" />
                <span >Your Bluebic Account</span>
              </div>
              <div onClick={this.uiStore.toggleAccountWidget} className="touchable-opacity" >
                <i className="material-icons">close</i>
              </div>
            </div>
    
            <div className="account-widget-body" >
              {this.uiStore.schools.map(s => (
                <div key={s.name} className={"account-widget-item touchable-highlight " + (s.active ? 'active' : '')}
                  onClick={() => this.onSelectSchool(s)}
                >
                  <span >{s.name}</span>
                  <img src={check} alt="" />
                </div>
              ))}
              <div className={"account-widget-item blue-text"} >
                <div >
                  <img src={plus} alt="" />
                  <span style={{ paddingLeft: 5 }} >Add a New School</span>
                </div>
              </div>
              <hr />
              <div style={{ padding: 10, display: 'flex' }} >
                <small >You are signed in as <strong>dukauwa.du@gmail.com</strong></small>
              </div>
              <div className={"account-widget-item light-text"} >
                <div >
                  <img src={profile} alt="" />
                  <span style={{ paddingLeft: 5 }} >Profile Settings</span>
                </div>
              </div>
              <div className={"account-widget-item blue-text"} >
                <div >
                  <img src={logout} alt="" />
                  <span style={{ paddingLeft: 5 }} >Logout</span>
                </div>
              </div>
            </div>
          </div>
        )
      }
      onSelectSchool = (school) => {
        this.uiStore.setActiveSchool(school);
        this.uiStore.toggleAccountWidget();
      }
    }
  )
)
