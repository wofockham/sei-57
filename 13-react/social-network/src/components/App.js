import Clock from './Clock';
import Profile from './Profile';

function App() {
  return (
    <div>
      <h1>Social Network</h1>

      <Clock />

      <Profile name="Groucho Marx" age="45" motto="No gods no masters" pic="http://www.fillmurray.com/500/500" />
      <Profile name="Chico Marx" age="47" motto="That's'a nice" pic="http://www.fillmurray.com/501/501" />
    </div>
  );
}

export default App;
