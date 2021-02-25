import './App.css';
import {Route, Switch} from 'react-router-dom';
import AboutComponent from './Component/AboutComponent';
import ContactUsComponent from './Component/ContactUsComponent';
import HomeComponent from './Component/HomeComponent';
import ErrorComponent from './Component/ErrorComponent';


function App() {
  return (
    <>
      const Error =()

      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/about' component={AboutComponent}/>
        <Route path='/contactUs' component={ContactUsComponent}/>
        <Route component={ErrorComponent}/>
      </Switch>
    </>
  );
}

export default App;
