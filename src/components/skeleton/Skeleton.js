import './skeleton.scss';

const Skeleton = () => {


 return (
    <div className="pulse skeleton">
        <div className="pulse skeleton__wrap">
            <h2 className="pulse skeleton__title">Please select a character to see information</h2>
            <div className="pulse skeleton__circle"></div>
            <div className="pulse skeleton__small"></div>
            <div className="pulse skeleton__big"></div>
            <div className="pulse skeleton__big"></div>
            <div className="pulse skeleton__big"></div>
        </div>
    </div>
     

 )
}

export default Skeleton;