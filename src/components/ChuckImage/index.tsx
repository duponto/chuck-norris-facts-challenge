import cn1 from '../../static/img/1.png'
import cn2 from '../../static/img/2.png'
import cn3 from '../../static/img/3.png'
import cn4 from '../../static/img/4.png'
import cn5 from '../../static/img/5.png'
import cn6 from '../../static/img/6.png'
import cn7 from '../../static/img/7.png'

interface ChuckImageProps {
    imageIndex: number;
}

const ChuckImage = ({imageIndex}: ChuckImageProps) => {

    const images = [cn1, cn2, cn3, cn4, cn5, cn6, cn7];

    return (
        <img className='h-1/3 mb-32'
        src={images[imageIndex]} alt="Chuck Norris" />
    );
}

export default ChuckImage;