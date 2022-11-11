import './App.css';

import Hello from './Hello';
import HelloUser from './HelloUser';

function App() {
  return (
    <div>
      <Hello />
      <HelloUser name="Groucho" />
      <HelloUser name="Chico" />
      <HelloUser />
    </div>
  );
}

export default App;
