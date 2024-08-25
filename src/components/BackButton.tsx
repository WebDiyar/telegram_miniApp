import {FC} from 'react';
import '../styles/BackButton.css';

interface BackButtonProps {
    onClick: () => void;
}

const BackButton: FC<BackButtonProps> = ({ onClick }) => (
    <button className="back-button" onClick={onClick}>
        Back
    </button>
);

export default BackButton;
