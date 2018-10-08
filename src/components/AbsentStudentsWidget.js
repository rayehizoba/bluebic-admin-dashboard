import React from 'react';
import { trendChart } from '../App';

export default class AbsentStudentsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.stats = [
      { name: 'Student Attendance', amount: '94.6%', trend: 4,
        data: [
          {name: 'Page A', pv: 10},
          {name: 'Page B', pv: 5},
          {name: 'Page C', pv: 12},
          {name: 'Page D', pv: 8},
          {name: 'Page E', pv: 18},
        ]
      },
      { name: 'No of Students Absent', amount: '6', trend: -12,
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
      <div className="absent-students-widget" >
        {this.stats.map(s => (
          <div key={s.name} >
            <div className="flex-col align-center" >
              <div className="h1" >{s.amount}</div>
              <div className="title-grey" >{s.name}</div>
            </div>
            {trendChart(s)}
          </div>
        ))}
      </div>
    )
  }
}