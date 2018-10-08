import React from 'react';
import {
  LineChart, Line, XAxis,
  YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from 'recharts';
import Colors from '../lib/colors';

export default class StudentPerformanceChart extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {name: 'Apr 01', 'This Month': 48, 'Previous Month': 52},
      {name: 'Apr 02', 'This Month': 30, 'Previous Month': 49},
      {name: 'Apr 03', 'This Month': 50, 'Previous Month': 55},
      {name: 'Apr 04', 'This Month': 73, 'Previous Month': 75},
      {name: 'Apr 05', 'This Month': 51, 'Previous Month': 52},
      {name: 'Apr 06', 'This Month': 60, 'Previous Month': 55},
      {name: 'Apr 07', 'This Month': 35, 'Previous Month': 40},
      {name: 'Apr 08', 'This Month': 60, 'Previous Month': 60},
    ]
  }
  render() {
    return (
      <ResponsiveContainer height={280} >
        <LineChart data={this.data}
          margin={{ top: 15, left: 30, right: 30 }}
        >
          <XAxis
            dataKey="name"
            height={50}
            stroke={Colors.grey}
            strokeWidth={0.25}
            tickLine={false}
            tick={{ fontSize: 12, fill: Colors.grey }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            width={20}
            tickLine={false}
            tick={{ fontSize: 12, fill: Colors.grey }}
            dx={-10}
          />
          <CartesianGrid
            vertical={false}
            stroke={Colors.grey}
            strokeWidth={0.25}
          />
          <Tooltip cursor={false} content={this.renderTooltip} />
          <Legend content={this.renderLegend} />
          <Line
            type="natural"
            dataKey="This Month"
            stroke={Colors.blue}
            dot={false}
            strokeWidth={1.5}
          />
          <Line
            type="natural"
            dataKey="Previous Month"
            stroke={Colors.grey}
            dot={false}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="legend-container" >
        {
          payload.map((entry, index) => (
            [
              <span
                key={`item-${index}`}
                className={'legend-key' + (index === 1 ? ' dashed' : '')}
                style={{ borderColor: entry.color }}
              ></span>,
              <span
                key={`item-${entry.name}`}
                className="legend-text"
              >{entry.value}</span>
            ]
          ))
        }
      </div>
    );
  }
  renderTooltip = (value, name, props) => {
    return <div className="chart-tooltip" >Some Information</div>
  } 
}