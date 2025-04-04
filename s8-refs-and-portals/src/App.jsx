
import Exercise21 from './components/exercises/exercise21/Exercise21.jsx';
import Exercise22 from './components/exercises/exercise22/Exercise22.jsx';
import { Exercise23 } from './components/exercises/exercise23/Exercise23.jsx';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App()
{
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="test" targetTime="1" />
        <TimerChallenge title="test" targetTime="7" />
        <TimerChallenge title="test" targetTime="9" />
        <TimerChallenge title="test" targetTime="15" />
      </div>
      <Exercise21 />
      <Exercise22 />
      <Exercise23 />
    </>
  );
}

export default App;
