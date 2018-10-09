import React from 'react';
import Colors from '../lib/colors';

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    class: 'JSS1',
    studentNo: `23`,
    amount: 'N4,500',
    sendReminder: Math.random() >= 0.5
  });
}

export default class DebtorsTable extends React.Component {
  render() {
    return (
      <div >
        <div className="debtors-card" >
          <div className="debtors-table" >
            <div className="table-row" >
              <div className="title" >CLASS</div>
              <div className="title" >STUDENT NO</div>
              <div className="title" >AMOUNT</div>
              <div className="blue-button caption" >Remind All</div>
            </div>
            <div className="table-body" >
              {data.map(x => (
                <div key={x.key} className="table-row" >
                  <div >{x.class}</div>
                  <div >{x.studentNo}</div>
                  <div >{x.amount}</div>
                  {x.sendReminder && (
                    <div className="blue-button caption" >Send reminder</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="debtors-table-mobile" >
          {data.filter((_, i) => i < 3).map(x => (
            <div key={x.key} className="card" >
              <div >
                <div >{x.class}</div>
                <div className="title" style={{ color: Colors.red }} >{x.studentNo} debtors</div>
              </div>
              <div >
                <div className="h2" style={{ color: Colors.blue }} >{x.amount}</div>
                <div className="button" >SEND REMINDER</div>
              </div>
            </div>
          ))}
          <div className="flex-row" >
            <div className="button" >VIEW ALL</div>
          </div>
        </div>
      </div>
    );
  }
}