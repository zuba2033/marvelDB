import './charInfo.scss';
import loki from '../../resourses/img/loki.png';

const CharInfo = () => {
    return (
        <div className="charinfo">
            <div className="charinfo__wrap">
                <div className="charinfo__header">
                    <img src={loki} alt="" />
                    <div>
                        <div className="charinfo__title">loki</div>
                        <div className="charinfo__btns">
                            <button className="button button__main"><div className="inner">HOMEPAGE</div></button>
                            <button className="button button__secondary"><div className="inner">wiki</div></button>
                        </div>
                    </div>
                </div>
                <div className="charinfo__text">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                </div>
                <div className="charinfo__comics">Comics:</div>
                <ul className="charinfo__list">
                    <li className="charinfo__item">All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li className="charinfo__item">Alpha Flight (1983) #50</li>
                    <li className="charinfo__item">Amazing Spider-Man (1999) #503</li>
                    <li className="charinfo__item">Amazing Spider-Man (1999) #504</li>
                    <li className="charinfo__item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                    <li className="charinfo__item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                    <li className="charinfo__item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                    <li className="charinfo__item">Vengeance (2011) #4</li>
                    <li className="charinfo__item">Avengers (1963) #1</li>
                    <li className="charinfo__item">Avengers (1996) #1</li>
                </ul>
            </div>
        </div>
    )
}

export default CharInfo;