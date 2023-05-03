import { useState, useEffect } from 'react';
import { genreateNumber } from './utils';
import logo from './assets/logo_dlt.png';
import './app.css';

function App() {
  const [blueBalls, setBlueBalls] = useState([]);
  const [redBalls, setRedBalls] = useState([]);

  // 生成蓝球
  const generateBlueBalls = () => genreateNumber(35, 5);

  // 生成红区
  const generateRedBalls = () => genreateNumber(12, 2);

  const generateCombin = () => {
    setBlueBalls(generateBlueBalls());
    setRedBalls(generateRedBalls())
  }

  useEffect(() => {
    generateCombin();
  }, [])

  return (
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <div className="app-ball">
        <div className='app-ball-blue'>
          {
            blueBalls.map(ele => <span key={ele}>{ele}</span>)
          }
        </div>
        <div className='app-ball-red'>
          {
            redBalls.map(ele => <span key={ele}>{ele}</span>)
          }
        </div>
      </div>
      <button className='app-generate' onClick={generateCombin}>获取中奖号码</button>
    </div>
  );
}

export default App;
