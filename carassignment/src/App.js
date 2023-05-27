import './App.css';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import CarSubmitform from './Components/submit new car form/NewCarSubmitform';
import All_route from './pages/All_route';

function App() {
  return (
    <div className="App">
<Navbar/>
<All_route/>
{/* <Footer/> */}
    </div>
  );
}

export default App;