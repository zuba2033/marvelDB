import Skeleton from '../components/skeleton/Skeleton';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';

const setContent = (process, data, Component) => {
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
        case 'error':
            return <ErrorMessage/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        default:
            throw new Error('unexpected state')
    }
}

export default setContent;