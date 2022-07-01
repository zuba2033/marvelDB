import { useState } from 'react';

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
// import AppBanner from '../appBanner/AppBanner';
// import ComicsList from '../comicsList/ComicsList';
// import SingleComics from '../singleComics/SingleComics';

import decoration from '../../resourses/img/vision.png';

const App = () => {

  const [charId, setChar] = useState(null);

  const onItemSelected = (id) => {
    setChar(id);
  }

  return (
    <div className="app">
      <AppHeader/>
      <main>
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
      </main>
      {/* <AppBanner/>
      <ComicsList/>
      <AppBanner/>
      <SingleComics/> */}
      
    </div>
  )

}

export default App;
