import './page404.scss';

import { Link } from 'react-router-dom';

const Page404 = () => {

    return (
        <div className="page404">
            <h1 className="first-four">4</h1>
            <div className="cog-wheel1">
                <div className="cog1">
                    <div className="top"></div>
                    <div className="down"></div>
                    <div className="left-top"></div>
                    <div className="left-down"></div>
                    <div className="right-top"></div>
                    <div className="right-down"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
            
            <div className="cog-wheel2"> 
                <div className="cog2">
                    <div className="top"></div>
                    <div className="down"></div>
                    <div className="left-top"></div>
                    <div className="left-down"></div>
                    <div className="right-top"></div>
                    <div className="right-down"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
            <h1 className="second-four">4</h1>
            <Link className="wrong-para" to='/'>Page not Found!  <p>Back to main page</p> </Link>
            </div>
    )
}

export default Page404;