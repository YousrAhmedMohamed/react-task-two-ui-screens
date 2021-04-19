
import './App.css';
import CardsContanier from './containers/CardsContainer';
import CardDetails from './containers/CardDetails';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/details"><CardDetails /></Route>
        <Route exact path="/projects"><CardsContanier /></Route>
        <Route exact path="/"><CardsContanier /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
