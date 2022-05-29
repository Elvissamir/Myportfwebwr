import Main from '../components/Main';
import Menus from '../components/Menus';

const Home = () => {
    return ( 
        <div className=' w-full min-h-screen relative'>
            <Menus />
            <Main />
        </div> 
    );
}

export default Home;