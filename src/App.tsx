import Footer from './components/layout/Footer'
// import Routes from './components/Routes';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <div className='app-content'>
        <Home />
      </div>
      <div className='app-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
