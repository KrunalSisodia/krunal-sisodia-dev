import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row h-90vh">
          <div className="col-lg-3 col-md-4">
            <div className="app-sidebar h-100 bg-white">
              <Sidebar/>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="app-main-content h-100 bg-white">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;