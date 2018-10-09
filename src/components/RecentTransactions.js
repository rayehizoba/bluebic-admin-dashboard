import React from 'react';
import Colors from '../lib/colors';

const data = [];
for (let i = 2356; i < 2400; i++) {
  data.push({
    id: i,
    name: 'Plumbing',
    note: 'Materials & labour',
    enteredBy: 'Akin Osa',
    dateCreated: '05/04/2018',
    amount: 'N4500',
    trendUp: (Math.random() >= 0.5 ? -1 : 1)
  });
}

export default class RecentTransactions extends React.Component {
  render() {
    return (
      <div >
        <div className="recent-transactions-card" >
          <div className="recent-transactions-table" >
            <div className="table-row" >
              <div className="title" >BASIC INFO</div>
              <div className="title" >NOTE</div>
              <div className="title" >ENTERED BY</div>
              <div className="title" >AMOUNT</div>
            </div>
            <div className="table-body" >
              {data.map(x => (
                <div key={x.id} className="table-row" >
                  <div className="flex-col" >
                    <div >{x.name}</div>
                    <div className="title-grey" >#{x.id}</div>
                  </div>
                  <div >{x.note}</div>
                  <div >{x.enteredBy}</div>
                  <div className="flex-col" >
                    <strong style={{ color: x.trendUp < 0 ? Colors.red : Colors.green }} >
                      {x.trendUp < 0 ? '-' : '+'} {x.amount}
                    </strong>
                    <div className="title-grey" >{x.dateCreated}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="recent-transactions-table-mobile" >
          {data.filter((_, i) => i < 5).map((x, j) => (
            <div key={j} className="card" >
              <div >
                <div >{x.name}</div>
                <div className="title-grey" >#{x.id}</div>
                <div >{x.note}</div>
              </div>
              <div >
                <div className="h3" >
                  <strong style={{ color: x.trendUp < 0 ? Colors.red : Colors.green }} >
                    {x.trendUp < 0 ? '-' : '+'} {x.amount}
                  </strong>
                </div>
                <div className="title" >{x.dateCreated}</div>
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