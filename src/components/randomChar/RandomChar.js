import './randomChar.scss';

import mjolnir from '../../resourses/img/mjolnir.png';
import thor from '../../resourses/img/thor.jpeg';

const RandomChar = () => {
    return (
        <div className="randomChar">
            <div className="randomChar__block">
                <img src={thor} alt="" className="randomChar__img" />
                <div className="randomChar__info">
                    <div className="randomChar__title">THOR</div>
                    <div className="randomChar__descr">
                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                    </div>
                    <div className="randomChar__btns">
                        <button className="button button__main"><div className="inner">HOMEPAGE</div></button>
                        <button className="button button__secondary"><div className="inner"> WIKI</div></button>
                    </div>
                </div>
                
            </div>
            <div className="randomChar__static">
                <div className="randomChar__text">
                Random character for today!<br />
                Do you want to get to know him better?<br/><br/>
                Or choose another one
                </div>
                <button className="button button__main"><div className="inner">TRY IT</div></button>
                <img src={mjolnir} alt="" />
            </div>
        </div>
    )
}

export default RandomChar;