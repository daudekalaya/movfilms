import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import Anime from './components/Anime';

function App() {
  return (
    <div>
      <div className='my-bg'>
      <NavigationBar />
      <Intro />
      </div>

      <div className='trending'>
        <Trending />
      </div>

      <div className='anime'>
        <Anime />
      </div>
    </div>
  );
}

export default App;
