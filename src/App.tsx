import { Outlet } from 'react-router-dom';

import './assets/styles/styles.scss';
import { NavBar } from './components';

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
