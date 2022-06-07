import './charList.scss';
import abyss from '../../resourses/img/abyss.jpg';

const CharList = () => {
    return (
        <div className="charlist">
            <ul className="charlist__list">
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
                <li className="charlist__item"><img src={abyss} alt="" /><div className="charlist__name">abyss</div></li>
            </ul>
            <button className="button button__main button__long"><div className="inner">load more</div></button>
        </div>
    )
}


export default CharList;