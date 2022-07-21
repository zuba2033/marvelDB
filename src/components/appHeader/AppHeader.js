import './appHeader.scss';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="app__title">
                <Link to="/" >
                    <span>Marvel </span>information portal
                </Link>
            </div>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                        end 
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : null })}
                        to="/">Characters</NavLink></li>
                    /
                    <li><NavLink 
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : null })}
                        to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;