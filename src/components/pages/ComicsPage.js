import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import { Helmet } from 'react-helmet';

const ComicsPage = () => {
    
    return (
        <>
            <Helmet>
                <meta 
                    name="description"
                    content="Comics page"/>
                <title>Comics page</title>
            </Helmet>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;