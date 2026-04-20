import SlideText from './SlideText';

interface SlideButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    delay?: number;
}

export default function SlideButton({ label, onClick, className = '', delay }: SlideButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`group flex cursor-pointer ${className}`}
        >
            <SlideText label={label} delay={delay} />
        </button>
    );
}
