import React from 'react';

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    key: i,
    name: `Salihu, Attah Chigboza ${i}`,
    class: 'JSS1 Happiness',
    numDaysAbs: 3,
  });
}

export default class AbsentStudentsTable extends React.Component {
  render() {
    return (
      <div >
        <div className="absent-students-card" >
          <div className="absent-students-table" >
            <div className="table-row" >
              <div className="title" >NAME</div>
              <div className="title" >CLASS</div>
              <div className="title" >NO OF DAYS ABSENT</div>
            </div>
            <div className="table-body" >
              {data.map(x => (
                <div key={x.key} className="table-row" >
                  <div >{x.name}</div>
                  <div >{x.class}</div>
                  <div >{x.numDaysAbs}</div>
                  <div className="button" >VIEW CONTACT INFORMATION</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absent-students-table-mobile" >
          {data.filter((_, i) => i < 3).map(x => (
            <div key={x.name} className="card" >
              <div >
                <div >{x.name}</div>
                <div className="title" >{x.class}</div>
              </div>
              <div >
                <div >{x.numDaysAbs} Days Absent</div>
                <div className="button" >CONTACT</div>
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