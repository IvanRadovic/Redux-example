import './App.css';
import ChangeColor from './components/ChangeColor.component';
import Login from './components/Login.component';
import Profile from './components/Profile.component';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
