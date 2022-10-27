import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import FilterForm from '../filterForm/FilterForm';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import { useState } from 'react';
import { Helmet } from 'react-helmet';

import decoration from '../../resourses/img/vision.png';

const MainPage = () => {
    
    const [charId, setChar] = useState(null);

    const onItemSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <Helmet>
                <meta 
                    name="description"
                    content="Marvel information portal"/>
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char-content">
                <ErrorBoundary>
                <CharList onItemSelected={onItemSelected}/>
                </ErrorBoundary>
                <div className="char-content__rightSide">
                <ErrorBoundary>
                    <CharInfo charId={charId}/>
                    <FilterForm/>
                </ErrorBoundary>
                </div>
            </div>
            <img src={decoration} alt="decoration" className={"decoration"} />    
        </>
    )
}

export default MainPage;