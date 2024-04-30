import './HomePage.scss';

import { Link } from 'react-router-dom';

function HomePage(){

return(
    <div className="home" >
        <div className='mw_520' >
            <div className='container' >
                <div className='title' ><h1>Cricket</h1></div>
                <div className='menu' >
                    <Link to="/login" >Login</Link>
                    <Link to="/menu" >Menu</Link>
                </div>
            </div>
        </div>
    </div>
);
}

export default HomePage;