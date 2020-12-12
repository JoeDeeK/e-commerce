import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
  <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      <Route path='/jackets' component={HatsPage} />
      <Route path='/sneakers' component={HatsPage} />
      <Route path='/womens' component={HatsPage} />
      <Route path='/mens' component={HatsPage} />
    </Switch>
  </div>
  );
}

export default App;
