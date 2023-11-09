import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import MyClassComponent from './MyClassComponenet';

function App() {
  return (
    <div className="App">
      <header>
         
          <MyComponent/>
          <MyClassComponent/>
      </header>
    </div>
  );
}

export default App;
