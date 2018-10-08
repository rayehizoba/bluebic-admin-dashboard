import React from 'react';
import { trendChart } from '../App';

export default class AbsentStudentsWidget extends React.Component {
  constructor(props) {
    super(props);
    this.stats = [
      { name: 'Student Attendance', amount: '94.6%', trend: 4, data: [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  ] },
        { name: 'No of Students Absent', amount: '6', trend: -12, data: [
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
      <div className="absent-students-widget" >
        {this.stats.map(s => (
          <div key={s.name} >
            <div >
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