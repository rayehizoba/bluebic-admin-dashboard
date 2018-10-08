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
import arrowDownFat from './assets/arrow-down-fat.svg';
import arrowUp from './assets/arrow-up.svg';
import StudentPerformanceChart from './components/StudentPerformanceChart';
import Colors from './lib/colors';
import {
  LineChart, Line, ResponsiveContainer
} from 'recharts';
import AbsentStudentsWidget from './components/AbsentStudentsWidget';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.feesData = [
      { name: 'Invoiced', amount: 'N2,300,000.00', icon: invoice, color: Colors.blue },
      { name: 'Received', amount: 'N1,700,000.00', icon: money, color: Colors.green },
      { name: 'Pending', amount: 'N600,000.00', icon: sandClock, color: Colors.yellow },
    ]
    this.generalStatsData = [
      { name: 'students', amount: '50,000', actionText: 'view reports', trend: 4, data: [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
] },
      { name: 'parents', amount: '15,000', actionText: 'view list', trend: 13, data: [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
] },
      { name: 'teachers', amount: '5,000', actionText: 'view list', trend: -12, data: [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
] },
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
                <div className="card" ></div>
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