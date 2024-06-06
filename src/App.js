import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Quiz from './Components/Quiz';

import Home from './Components/Home';

function App() {

  return (
    <>
     <Router>
      <Routes>
          <Route element={<Home/>} path='/SimpleQuizApp'/>
          <Route element={<Quiz data="Java"/>} path='/Java Test'/>
          <Route element={<Quiz data="Python"/>} path='/python Test'/>
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
