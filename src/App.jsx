import { Profiler, useState } from 'react'
import './App.css'
import data from './data.json'
import friends from './friends.json'

function App() {
  function Statistics({ title, stats }) {
    return (
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          <li className="item1" id='item'>
            <span className="label">{data[0].label}</span>
            <span className="percentage"> {data[0].percentage}%</span>
          </li>
          <li className="item2" id='item'>
            <span className="label">{data[1].label}</span>
            <span className="percentage"> {data[1].percentage}%</span>
          </li>
          <li className="item3" id='item'>
            <span className="label">{data[2].label}</span>
            <span className="percentage"> {data[2].percentage}%</span>
          </li>
          <li className="item4" id='item'>
            <span className="label">{data[3].label}</span>
            <span className="percentage"> {data[3].percentage}%</span>
          </li>
        </ul>
      </section>
    );
  }
  function FriendListItem({avatar, name, isOnline}) {
    return (
      <ul>
        {friends.map(({avatar, name, isOnline}) => (
            <li className="friends-card">
              <span className={isOnline ? 'status online' : 'status offline'}>{isOnline}</span>
              <img className="friends-avatar" src={avatar} alt="User avatar" width="48" height="48" />
              <p className="friends-name">{name}</p>
            </li>
        ))}
      </ul>
    );
}
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      <FriendListItem friends={friends} />,
    </div>
  )
}

export default App
