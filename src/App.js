import React from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'

// Components
import Home from './components/Home'
import TeamListContainer from './components/team/ListContainer'

class App extends React.Component {
  render() {
    return <>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <nav>
            <Link to='/'>Home</Link> | <Link to='/teams'>Teams</Link>
          </nav>
          
          <Route path="/teams" component={TeamListContainer} />
        </header>
      </div>
    </>
  }
}
export default App;