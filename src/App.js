import './App.css';
import MyCarousel from './components/carousal/MyCarousel';
import MyNavbar from './components/navbar/MyNavbar';
import TitleMsg from './components/title-msg/TitleMsg';

const App = ()=> {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMsg />
    </div>
  );
}

export default App;
