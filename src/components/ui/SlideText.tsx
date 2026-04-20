interface SlideTextProps {
    label: string;
    delay?: number;
}

export default function SlideText({ label, delay = 35 }: SlideTextProps) {
    return (
        <>
            {label.split('').map((char, i) =>
                char === ' ' ? (
                    <span key={i}>&nbsp;</span>
                ) : (
                    <span key={i} className="relative overflow-hidden block">
                        <span
                            className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
                            style={{ transitionDelay: `${i * delay}ms` }}
                        >
                            {char}
                        </span>
                        <span
                            className="block absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 text-white"
                            style={{ transitionDelay: `${i * delay}ms` }}
                        >
                            {char}
                        </span>
                    </span>
                )
            )}
        </>
    );
}
