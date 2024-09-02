import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

const CHALLENGES =[
  {
    id: 2,
    title:'Easy',
    targetTime:1
  },
  {
    id: 3,
    title:'Not Easy',
    targetTime:5
  },
  {
    id: 4,
    title:'Getting Tough',
    targetTime:10
  },
  {
    id: 5,
    title:'Pros Only',
    targetTime:15
  },
 
]

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {CHALLENGES.map((challenge) => { return(
          <TimerChallenge 
          key={challenge.id}
          title={challenge.title} 
          targetTime={challenge.targetTime}/>
        )})}
        
      </div>
    </>
  );
}

export default App;
