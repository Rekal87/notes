import './App.css';
import Sidebar from './components/Sidebar';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-8">
          <Mainpage />
        </div>
      </div>
    </div>
  );
}

export default App;
