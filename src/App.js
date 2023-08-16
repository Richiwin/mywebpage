
import './App.css';
import cricbuz from './Assets/cricbuz.png'
import LiveScore from './Components/LiveScore';
import News from './Components/News';
import Matches from './Components/Matches';

function App() {
  return (
    <div className="App">
    <div className="head">
     <div className="content">
     <div className="logo">
     <img className="img" src={cricbuz} alt="" />
     </div>
     <div className="menu">
     <ul>
       <li><a href="https://www.cricbuzz.com/cricket-match/live-scores">Live score</a></li>
       <li><a href="https://www.cricbuzz.com/cricket-schedule/upcoming-series/international">Schedule</a></li>
       <li><a href="https://www.cricbuzz.com/cricket-scorecard-archives">Archives</a></li>
       <li><a href="https://www.cricbuzz.com/cricket-news">news</a></li>
       <li><a href="https://www.cricbuzz.com/cricket-schedule/series">series</a></li>
       <li><a href="https://www.cricbuzz.com/cricket-team">Teams</a></li>
       <li><a href="https://www.cricbuzz.com/cricket-videos">Video</a></li>
       <li><a href="">Rancking</a></li>
       <li><a href="">More</a></li>
      <input type="text" placeholder="search-box" />
     </ul>

     </div>
     </div>
    </div>
    <div className="menu2">
    <li><a href="">Featured</a></li>
    <li><a href="">MPL</a></li>
    <li><a href="">International</a></li>
    <li><a href="">T2o Mumbai</a></li>
    <li><a href="">SPL</a></li>
    <li><a href="">MPL</a></li>
    <li><a href="">Country Division</a></li>
    <hr />
   
    </div>
    <Matches />
    <LiveScore />
    <News />

    </div>
  );
}

export default App;
