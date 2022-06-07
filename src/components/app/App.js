import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import AppBanner from '../appBanner/AppBanner';

import decoration from '../../resourses/img/vision.png';

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main>
        <RandomChar/>
        <div className="char-content">
          <CharList/>
          <CharInfo/>
        </div>
        <img src={decoration} alt="" className="decoration" />
      </main>
      <AppBanner/>
      
      
    </div>
  );
}

export default App;
