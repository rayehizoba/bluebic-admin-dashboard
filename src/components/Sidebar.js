import React, { Component } from 'react';
import logo from '../assets/logo.png';
import arrowDown from '../assets/arrow-down.svg';
import arrowDownWhite from '../assets/arrow-down-white.svg';
import { observer, inject } from 'mobx-react';
import help from '../assets/help.svg';
import avatar from '../assets/avatar.svg';
import { observable } from 'mobx';

export default inject('uiStore')(
  observer (
    class Sidebar extends Component {
      constructor(props) {
        super(props);
        this.uiStore = props.uiStore;
      }
      render() {
        return (
          <div className="sidebar" >
            <div className="sidebar-head" >
              <div onClick={this.uiStore.toggleAccountWidget} className="flex-row" >
                <div className="sidebar-avatar" >
                  <img src={logo} alt="" />
                </div>
                <div className="sidebar-title" >{this.uiStore.activeSchool.get().name}</div>
                <img src={arrowDown} alt="" />
              </div>
              <div className="sidebar-menu-btn" onClick={this.onToggleMobileMenu} >
                <i className="material-icons" >menu</i> 
                <span >Menu</span>
              </div>
            </div>
  
            <div className={"sidebar-body " + (this.mobileMenu.get() ? "" : "hide")} >
              <div className="sidebar-body-mobile-head" >
                <div className="flex-row" >
                  <div className="avatar" >
                    <img src={avatar} alt="" />
                  </div>
                  <div className="flex-col" >
                    <span className="username" >Ukauwa David</span>
                    <i className="email" >dukauwa.du@gmail.com</i>
                  </div>
                </div>
                <div
                  className="touchable-opacity"
                  onClick={this.onToggleMobileMenu}
                >
                  <i className="material-icons" >close</i>
                </div>
              </div>
              <div >
                {this.uiStore.sidebarItems.map(i => (
                  <div key={i.name} className="sidebar-item" >
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
              <div >
                <hr />
                <div className="sidebar-item" >
                  Settings
                </div>
                <div className="sidebar-footer" >
                  <div className="sidebar-footer-item pill" >
                    <img src={help} alt="" />
                    Help
                  </div>
                  <div className="sidebar-footer-item" >
                    Terms
                  </div>
                  <span style={{ padding: 5 }} >&middot;</span>
                  <div className="sidebar-footer-item" >
                    Privacy
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      mobileMenu = observable.box(false);
      onToggleMobileMenu = () => {
        this.mobileMenu.set(!this.mobileMenu.get());
      }
    }
  )
);
