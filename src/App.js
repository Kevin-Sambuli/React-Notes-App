import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Notes from './pages/Notes';
import Note from './pages/Note';

function App() {

  return (
    <Switch>
      <div className="container dark">
        <div className="app">
          <Header />

          <Route path="/" exact>
            <Notes/>
          </Route>

          <Route path="/note/:id">
              <Note/>
          </Route>

        </div>
      </div>
    </Switch>
  );
}

export default App;