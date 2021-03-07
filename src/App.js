import logo from './logo.svg';
import './App.css';
import './components/FirstComponent';
import FirstComponent from './components/FirstComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent name='Alam'></FirstComponent>
      </header>
    </div>
  );
}

export default App;
