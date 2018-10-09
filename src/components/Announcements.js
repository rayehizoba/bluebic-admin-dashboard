import React from 'react';

const data = [
  { name: 'Computer lab lockdown', text: 'Hello students! the compuer lab will be shutdown this thursday for routine maintainance. Sorry for the inconvience and if you have any question feel free', hasBadge: true },
  { name: 'Class Social', text: 'Hello students! the compuer lab will be shutdown this thursday for routine maintainance. Sorry for the inconvience and if you have any question feel free', hasBadge: false },
  { name: 'Extended Mid-term break', text: 'Hello students! the compuer lab will be shutdown this thursday for routine maintainance. Sorry for the inconvience and if you have any question feel free', hasBadge: false },
]

export default class Announcements extends React.Component {
  render() {
    return (
      <div >
        <div className="card flat announcements-widget" >
          {data.map(x => (
            <div key={x.name} className={'annoucement-item' + (x.hasBadge ? ' badge' : '')} >
              <div className="h3" >{x.name}</div>
              <div className="caption" >{x.text}</div>
            </div>
          ))}
        </div>

        <div className="announcements-widget-mobile" >
          {data.map(x => (
            <div key={x.name} className={'annoucement-item' + (x.hasBadge ? ' badge' : '')} >
              <div className="h3" >{x.name}</div>
              <div className="caption" >{x.text}</div>
            </div>
          ))}
          <span className="button" >VIEW ALL</span>
        </div>
      </div>
    );
  }
}
