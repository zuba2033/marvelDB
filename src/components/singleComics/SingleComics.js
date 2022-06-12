import './singleComics.scss';
import xmenBig from '../../resourses/img/x-menbig.png';

const SingleComics = () => {
    return (
        <div className="singlecomics">
            <img src={xmenBig} alt="" />
            <div className="singlecomics__block">
                <h2 className="singlecomics__title">X-Men: Days of Future Past</h2>
                <p className="singlecomics__text">
                Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                </p>
                <p className="singlecomics__pages">144 pages</p>
                <p className="singlecomics__lang">Language: en-us</p>
                <p className="singlecomics__price">9.99$</p>
                
            </div>
            <a href="#" className="singlecomics__back">back to all</a>
        </div>
    )
}

export default SingleComics;