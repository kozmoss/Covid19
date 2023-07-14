import './App.css';
import Chart from './components/Chart';
import Country from './components/Country'
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-[1200px] h-screen text-center">
    <Header />
    <div className="mb-8">
      <Cards />
    </div>
    <div className="mb-8">
      <Country />
    </div>
    <div className="mb-8">
      <Chart />
    </div>
  </div>
  );
}

export default App;
