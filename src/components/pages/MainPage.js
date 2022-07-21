import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import { useState } from 'react';

import decoration from '../../resourses/img/vision.png';

const MainPage = () => {
    
    const [charId, setChar] = useState(null);

    const onItemSelected = (id) => {
        setChar(id);
    }

    return (
        <>
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
                </ErrorBoundary>
                </div>
            </div>
            <img src={decoration} alt="" className={"decoration"} />    
        </>
    )
}

export default MainPage;