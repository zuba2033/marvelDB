import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { lazy, Suspense } from "react";

import AppHeader from '../appHeader/AppHeader';
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/page404/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleItemPage = lazy(() => import('../pages/singleItemPage/SingleItemPage'));


const App = () => {

  return (
    <Router> 
      <div className="app">
        <AppHeader/>
        <Suspense fallback={<Spinner/>}>
          <main>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/comics' element={<ComicsPage/>}/>
              <Route path='/comics/:id' element={<SingleItemPage dataType='comics'/>}/>
              <Route path='/characters/:id' element={<SingleItemPage dataType='character'/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </main>
        </Suspense>
      </div>
    </Router>
  )

}

export default App;
