import TopMenu from './components/TopMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
      <>
          <TopMenu/>
          <div className="App">
              <h3 style={{"margin": "1em 1em 1em 1em"}}>Rewrited to typescript</h3>
          </div>
      </>
  );
}

export default App;
