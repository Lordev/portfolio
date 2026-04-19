export const cardMotionVariants = [
    { entryX: '0%', entrySkewY: -4, exitX: '0%', exitSkewY: 3 },
    { entryX: '0%', entrySkewY:  4, exitX: '0%', exitSkewY: -3 },
    { entryX: '0%', entrySkewY: -4, exitX: '0%', exitSkewY: 3 },
    { entryX: '0%', entrySkewY:  4, exitX: '0%', exitSkewY: -3 },
];

export const aboutCards = [
    {
        index: '01',
        label: '[who i am]',
        title: 'Considered by default',
        description:
            'Rotterdam-based developer working across the full stack. I am drawn to work that sits at the edge of interface and engineering, where the technical decisions are just as considered as the visual ones.',
    },
    {
        index: '02',
        label: '[what i build]',
        title: 'Full stack, for real',
        description:
            'Production applications in React, Next.js, and TypeScript on the front, Node.js, Laravel, and PostgreSQL on the back. Increasingly building with AI: agentic workflows, LLM integration, and API-driven intelligence layered into real products.',
    },
    {
        index: '03',
        label: '[how i work]',
        title: 'End to end',
        description:
            'End-to-end and self-directed. I take products from architecture to deployment without losing the thread between layers. The kind of work where nothing gets handed off because nothing needs to be.',
    },
    {
        index: '04',
        label: '[outside of work]',
        title: 'More than the screen',
        description:
            'I make music and have a broad interest in creative disciplines. That side does not conflict with the engineering, it tends to sharpen it. Good interfaces are built on the same instincts as good composition.',
    },
];

export type AboutCard = (typeof aboutCards)[number];
