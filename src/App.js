import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Workers from './Pages/Workers';
import Employers from './Pages/Employers';
import Finances from './Pages/Finances';
import Settings from './Pages/Settings';

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark">
              <Sidebar />
            </div>
            <div className="col px-0">
              <div>
                <Routes>
                  <Route exact path='/vancouver' element={<Home />} />
                  <Route path='/vancouver/home' element={<Home />} />
                  <Route path='/vancouver/jobs' element={<Jobs />} />
                  <Route path='/vancouver/workers' element={<Workers />} />
                  <Route path='/vancouver/employers' element={<Employers />} />
                  <Route path='/vancouver/finances' element={<Finances name='Finances' />} />
                  <Route path='/vancouver/settings' element={<Settings />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
