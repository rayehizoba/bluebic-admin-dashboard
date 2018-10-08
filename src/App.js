import React, { Component } from 'react';
import 'antd/lib/popover/style/index.css';
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
import arrowDownFat from './assets/arrow-down-fat.svg';
import arrowUp from './assets/arrow-up.svg';
import search from './assets/search.svg';
import not from './assets/not.svg';
import avatar from './assets/avatar.svg';
import logoutWhite from './assets/logout-white.svg';
import arrowDownGrey from './assets/arrow-down-grey.svg';
import StudentPerformanceChart from './components/StudentPerformanceChart';
import Colors from './lib/colors';
import {
  LineChart, Line, ResponsiveContainer
} from 'recharts';
import AbsentStudentsWidget from './components/AbsentStudentsWidget';
import { Popover } from 'antd';
import AbsentStudentsTable from './components/AbsentStudentsTable';

const popoverContent = (
  <div className="" >
    <div className="clear-button" >
      <img src={user} alt="" style={{ paddingRight: 10 }} />
      <span >Profile Settings</span>
    </div>
    <hr />
    <div className="blue-button" >
      <img src={logoutWhite} alt="" style={{ paddingRight: 10 }} />
      <span >Logout</span>
    </div>
  </div>
);

export default class App extends Component {
  constructor(props) {
    super(props)
    this.feesData = [
      { name: 'Invoiced', amount: 'N2,300,000.00', icon: invoice, color: Colors.blue },
      { name: 'Received', amount: 'N1,700,000.00', icon: money, color: Colors.green },
      { name: 'Pending', amount: 'N600,000.00', icon: sandClock, color: Colors.yellow },
    ]
    this.generalStatsData = [
      { name: 'students', amount: '50,000', actionText: 'view reports', trend: 4, 
        data: [
          {name: 'Page A', pv: 10},
          {name: 'Page B', pv: 5},
          {name: 'Page C', pv: 12},
          {name: 'Page D', pv: 8},
          {name: 'Page E', pv: 18},
        ]
      },
      { name: 'parents', amount: '15,000', actionText: 'view list', trend: 13,
        data: [
          {name: 'Page A', pv: 6},
          {name: 'Page B', pv: 10},
          {name: 'Page C', pv: 9},
          {name: 'Page D', pv: 20},
          {name: 'Page E', pv: 23},
        ]
      },
      { name: 'teachers', amount: '5,000', actionText: 'view list', trend: -12,
        data: [
          {name: 'Page A', pv: 10},
          {name: 'Page B', pv: 20},
          {name: 'Page C', pv: 12},
          {name: 'Page D', pv: 17},
          {name: 'Page E', pv: 5},
        ]
      },
    ]
  }
  render() {
    return (
      <Provider uiStore={uiStore} >
        <div className="app">
          <AccountWidget />
          <Sidebar />
          <div className="container" >
            {/* TOOLBAR */}
            <div className="toolbar" >
              <div className="searchbar" >
                <img src={search} alt="" />
                <input type="text" />
              </div>
              <div className="flex-row" >
                <div className="notifications has-badge" >
                  <img src={not} alt="" />
                </div>
                <Popover
                  content={popoverContent}
                  trigger="click"
                  placement="bottomRight"
                  overlayClassName="popover"
                >
                  <div className="flex-row flex-end touchable-opacity" >
                    <div className="flex-col" >
                      <span >Ukauwa David</span>
                      <small >dukauwa.du@gmail.com</small>
                    </div>
                    <div className="avatar" >
                      <img src={avatar} alt="" />
                    </div>
                    <img src={arrowDownGrey} alt="" />
                  </div>
                </Popover>
              </div>
            </div>
            {/* ROW 1 */}
            <div className="row" >
              <div className="flex-row" >
                <img src={icon1} alt="" style={{ marginRight: 15 }} />
                <p className="title" >STUDENT FEES</p>
              </div>
              <div className="row-1" >
                {this.feesData.map(x => (
                  <div key={x.name} className="card" >
                    <div className="flex-col" >
                      <div className="title-grey" >{x.name}</div>
                      <div className="h2 blue-text" >{x.amount}</div>
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
                    <p className="title" >STUDENT PERFORMANCE</p>
                  </div>
                  <div className="button" >VIEW REPORTS</div>
                </div>
                <div className="card" >
                  <StudentPerformanceChart />
                </div>
              </div>
              {this.renderGeneralStatistics()}
            </div>
            {/* ROW 3 */}
            <div className="row" >
              <div className="flex-row" >
                <img src={user} alt="" style={{ marginRight: 15 }} />
                <p className="title" >ABSENT STUDENTS</p>
              </div>
              <div className="row-3" >
                <div className="card" >
                  <AbsentStudentsWidget />
                </div>
                <AbsentStudentsTable />
              </div>
            </div>
            {/* ROW 4 */}
            <div className="row-4" >
              <div className="row" >
                <div className="flex-row" >
                  <img src={debt} alt="" style={{ marginRight: 15 }} />
                  <p className="title" >DEBTORS</p>
                </div>
                <div className="card" ></div>
              </div>
              <div className="row" >
                <div className="flex-row" >
                  <img src={buy} alt="" style={{ marginRight: 15 }} />
                  <p className="title" >RECENT TRANSACTIONS</p>
                </div>
                <div className="card" ></div>
              </div>
              <div className="row" >
                <div className="flex-row" >
                  <img src={megaphone} alt="" style={{ marginRight: 15 }} />
                  <p className="title" >Announcements</p>
                </div>
                <div className="card flat" ></div>
              </div>
            </div>
            {/* ROW 5 */}
            <div className="row" >
              <div className="flex-row space-between" >
                <div className="flex-row" >
                  <img src={newspaper} alt="" style={{ marginRight: 15 }} />
                  <p className="title" >ASSESSMENTS</p>
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
  renderGeneralStatistics = () => {
    const wrapContent = (content) => (
      <div key={content} className="row" >
        <div className="flex-row" >
          <img src={analytics} alt="" style={{ marginRight: 15 }} />
          <p className="title" >GENERAL STATISTICS</p>
        </div>
        {content}
      </div>
    )
    return this.generalStatsData.map((x, i) => {
      const content = (
        <div key={x.name} className="card" >
          <div className="flex-row space-between" >
            <div className="flex-col" >
              <span className="title-grey" >{x.name.toUpperCase()}</span>
              <span className="h2" >{x.amount}</span>
              <div className="button" >{x.actionText.toUpperCase()}</div>
            </div>
            <div style={{ minWidth: 75 }} >
              {trendChart(x)}
            </div>
          </div>
        </div>
      )
      return (i === 0 ? wrapContent(content) : content);
    })
  }
}

export const trendChart = ({ trend, data }) => (
  <div className="flex-col align-center" >
    <div className="flex-row" >
      <div
        className="h2 light-text"
        style={{ color: trend > 0 ? Colors.green : Colors.red }}
      >{trend < 0 ? '' : '+'}{trend}</div>
      <img src={trend < 0 ? arrowDownFat : arrowUp} alt="" style={{ padding: 5 }} />
    </div>
    <ResponsiveContainer height={30} >
      <LineChart data={data}>
        <Line
          type='natural'
          dataKey='pv'
          stroke={trend > 0 ? Colors.green : Colors.red}
          strokeWidth={1}
          dot={false} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)