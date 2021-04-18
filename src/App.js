import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';

const PcPage = () => {
  return(
    <div>
    <h1>PC Page</h1>
    </div>
  )
  
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/pc-games' component={PcPage} />
      </Switch>
    </div>
  );
}

export default App;
