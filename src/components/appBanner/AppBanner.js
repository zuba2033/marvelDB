import './appBanner.scss';
import avengers from '../../resourses/img/Avengers.png';
import logo from '../../resourses/img/Avengers_logo.png'


const AppBanner = () => {
    return (
        <div className="appbanner">
            <div className="appbanner__block">
                <img src={avengers} alt="" />
                <div className="appbanner__text">
                New comics every week! <br />
                Stay tuned!
                </div>
            </div>
            <div className="appbanner__logo"><img src={logo} alt="" /></div>
        </div>
    )
}

export default AppBanner;