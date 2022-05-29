import Main from '../components/Main';
import Menus from '../components/Menus';
import Start from '../components/Start';

const Home = () => {
    return ( 
        <div className='app-content-wrapper'>
            <Menus />
            <Start />
            <Main />
        </div> 
    );
}

export default Home;