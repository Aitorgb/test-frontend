import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider/Slider';
import Partners from './Components/Partners/Partners'
import Artist from './Components/Artist_cover/Artist';
import Presentation from './Components/Presentation/Presentation';

function App() {
  return (
    <div className="App">
      <Presentation />
      <Slider />
      <Partners />
      <Artist />
    </div>
  );
}

export default App;
