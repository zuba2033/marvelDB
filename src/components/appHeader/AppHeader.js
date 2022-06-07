import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="app__title">
                <span>Marvel </span>information portal
            </div>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;