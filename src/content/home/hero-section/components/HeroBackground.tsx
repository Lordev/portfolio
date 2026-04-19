export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <svg
                style={{ position: 'absolute', width: 0, height: 0 }}
                aria-hidden="true"
            >
                <defs>
                    <filter id="hero-warp">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.0050 0.020"
                            numOctaves="9"
                            seed="50"
                            result="warp"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="warp"
                            scale="50"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <div
                className="absolute inset-0"
                style={{ filter: 'url(#hero-warp)' }}
            >
                <div className="absolute inset-0 bg-neutral-900" />
                <div className="absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-neutral-800/60 to-transparent" />
                <div className="absolute top-0 left-1/4 w-1/2 h-3/5 rounded-full bg-primary-900/30 blur-[100px]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>
    )
}
