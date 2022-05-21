import './App.css';
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <div className='app-nav'>
        <Nav />
      </div>
      <div className='app-content'>
        
      </div>
      <div className='app-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
