import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
