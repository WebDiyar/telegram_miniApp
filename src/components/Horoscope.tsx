import { FC } from 'react';
import { useSwipeable } from 'react-swipeable';
import translations from '../hooks/translations';

interface HoroscopeProps {
    description: string;
    onClose: () => void;
    language: 'en' | 'ru';
}

const Horoscope: FC<HoroscopeProps> = ({ description, onClose, language }) => {
    const handlers = useSwipeable({
        onSwipedRight: () => onClose(),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="horoscope">
            <button className="back-button" onClick={onClose}>
                {String(translations[language].backButton)}
            </button>
            <p>{description}</p>
        </div>
    );
};

export default Horoscope;
