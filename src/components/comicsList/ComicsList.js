import './comicsList.scss';
import xmen from '../../resourses/img/x-men.png';
import ultimate from '../../resourses/img/UW.png';

const ComicsList = () => {
    return (
        <div className="comicslist">
            <ul className="comicslist__list">
                <li className="comicslist__item">
                    <img src={xmen} alt="" />
                    <div className="comicslist__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist__item-price">9.99$</div>
                </li>
                <li className="comicslist__item">
                    <img src={ultimate} alt="" />
                    <div className="comicslist__item-title">X-Men: Days of Future Past</div>
                    <div className="comicslist__item-price">NOT AVAILABLE</div>
                </li>
                <li className="comicslist__item">
                    <img src={xmen} alt="" />
                    <div className="comicslist__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB </div>
                    <div className="comicslist__item-price">9.99$</div>
                </li>
                <li className="comicslist__item">
                    <img src={ultimate} alt="" />
                    <div className="comicslist__item-title">X-Men: Days of Future Past</div>
                    <div className="comicslist__item-price">9.99$</div>
                </li>
                <li className="comicslist__item">
                    <img src={xmen} alt="" />
                    <div className="comicslist__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist__item-price">9.99$</div>
                </li>
                <li className="comicslist__item">
                    <img src={ultimate} alt="" />
                    <div className="comicslist__item-title">X-Men: Days of Future Past</div>
                    <div className="comicslist__item-price">9.99$</div>
                </li>
                <li className="comicslist__item">
                    <img src={xmen} alt="" />
                    <div className="comicslist__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                    <div className="comicslist__item-price">NOT AVAILABLE</div>
                </li>
                <li className="comicslist__item">
                    <img src={ultimate} alt="" />
                    <div className="comicslist__item-title">X-Men: Days of Future Past</div>
                    <div className="comicslist__item-price">9.99$</div>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;