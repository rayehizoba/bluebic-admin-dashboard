import React, { Component } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import AccountWidget from './components/AccountWidget';
import { Provider } from 'mobx-react';
import uiStore from './stores/uiStore';
import icon1 from './assets/tuition-and-fees.svg';
import invoice from './assets/invoice.svg';
import money from './assets/money.svg';
import sandClock from './assets/sand-clock.svg';
import user from './assets/user.svg';
import analysis from './assets/analysis.svg';
import analytics from './assets/analytics.svg';
import debt from './assets/debt.svg';
import buy from './assets/buy.svg';
import megaphone from './assets/megaphone.svg';
import newspaper from './assets/newspaper.svg';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.feesData = [
      { name: 'Invoiced', amount: 'N2,300,000.00', icon: invoice, color: '#1C75BB' },
      { name: 'Received', amount: 'N1,700,000.00', icon: money, color: '#17BF5F' },
      { name: 'Pending', amount: 'N600,000.00', icon: sandClock, color: '#FAD961' },
    ]
  }
  render() {
    return (
      <Provider uiStore={uiStore} >
        <div className="app">
          <AccountWidget />
          <Sidebar />
          <div className="container" >
            {/* ROW 1 */}
            <div className="row" >
              <div className="flex-row" >
                <img src={icon1} alt="" style={{ marginRight: 15 }} />
                <p className="row-title" >STUDENT FEES</p>
              </div>
              <div className="row-1" >
                {this.feesData.map(x => (
                  <div key={x.name} className="card" >
                    <div className="flex-col" >
                      <div className="row-title-grey" >{x.name}</div>
                      <div className="row-h2" >{x.amount}</div>
                    </div>
                    <div
                      className="row-icon-box"
                      style={{ backgroundColor: x.color }}
                    >
                      <img src={x.icon} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ROW 2 */}
            <div className="row-2" >
              <div className="row" >
                <div className="flex-row space-between" >
                  <div className="flex-row" >
                    <img src={analysis} alt="" style={{ marginRight: 15 }} />
                    <p className="row-title" >STUDENT PERFORMANCE</p>
                  </div>
                  <div className="button" >VIEW REPORTS</div>
                </div>
                <div className="card" ></div>
              </div>
              <div className="row" >
                <div className="flex-row" >
                  <img src={analytics} alt="" style={{ marginRight: 15 }} />
                  <p className="row-title" >GENERAL STATISTICS</p>
                </div>
                <div className="card" ></div>
              </div>
              <div className="card" ></div>
              <div className="card" ></div>
            </div>
            {/* ROW 3 */}
            <div className="row" >
              <div className="flex-row" >
                <img src={user} alt="" style={{ marginRight: 15 }} />
                <p className="row-title" >ABSENT STUDENTS</p>
              </div>
              <div className="row-3" >
                <div className="card" ></div>
                <div className="card" ></div>
              </div>
            </div>
            {/* ROW 4 */}
            <div className="row-4" >
              <div className="row" >
                <div className="flex-row" >
                  <img src={debt} alt="" style={{ marginRight: 15 }} />
                  <p className="row-title" >DEBTORS</p>
                </div>
                <div className="card" ></div>
              </div>
              <div className="row" >
                <div className="flex-row" >
                  <img src={buy} alt="" style={{ marginRight: 15 }} />
                  <p className="row-title" >RECENT TRANSACTIONS</p>
                </div>
                <div className="card" ></div>
              </div>
              <div className="row" >
                <div className="flex-row" >
                  <img src={megaphone} alt="" style={{ marginRight: 15 }} />
                  <p className="row-title" >Announcements</p>
                </div>
                <div className="card flat" ></div>
              </div>
            </div>
            {/* ROW 5 */}
            <div className="row" >
              <div className="flex-row space-between" >
                <div className="flex-row" >
                  <img src={newspaper} alt="" style={{ marginRight: 15 }} />
                  <p className="row-title" >ASSESSMENTS</p>
                </div>
                <div className="button" >View all</div>
              </div>
              <div className="row-5" >
                <div className="card" ></div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}