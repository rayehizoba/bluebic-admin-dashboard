import React from 'react';

const data = [];
for (let i = 0; i < 40; i++) {
  data.push({
    key: i,
    submissionTitle: 'Lessons on Deforestation',
    student: 'Damien Matthews',
    scoredBy: 'Annie Anderson',
    dateCreated: '05-04-2018',
    markGiven: '75/100',
    course: 'Biology'
  });
}

export default class Accessments extends React.Component {
  render() {
    return (
      <div >
        <div className="accessments-card" >
          <div className="accessments-table" >
            <div className="table-row" >
              <div className="title" >SUBMISSION TITLE</div>
              <div className="title" >STUDENT</div>
              <div className="title" >SCORED BY</div>
              <div className="title" >DATE CREATED</div>
              <div className="title" >MARK GIVEN</div>
              <div className="title" >COURSE</div>
            </div>
            <div className="table-body" >
              {data.map(x => (
                <div key={x.key} className="table-row" >
                  <div >{x.submissionTitle}</div>
                  <div >{x.student}</div>
                  <div >{x.scoredBy}</div>
                  <div >{x.dateCreated}</div>
                  <div >{x.markGiven}</div>
                  <div >{x.course}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="accessments-table-mobile" >
          {data.filter((_, i) => i < 5).map((x, j) => (
            <div key={j} className="card" >
              <div >
                <div >{x.student}</div>
                <div className="title" >JSS1 A</div>
              </div>
              <div >
                <div >{x.course}</div>
                <div >{x.markGiven}</div>
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