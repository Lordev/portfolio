export const cardMotionVariants = [
    { entryX: '-12%', entrySkewX:  4, exitX: '-10%', exitSkewX: -3 }, // left
    { entryX:  '12%', entrySkewX: -4, exitX:  '10%', exitSkewX:  3 }, // right
    { entryX: '-12%', entrySkewX:  4, exitX: '-10%', exitSkewX: -3 }, // left
    { entryX:  '12%', entrySkewX: -4, exitX:  '10%', exitSkewX:  3 }, // right
];

export const aboutCards = [
    {
        index: '01',
        label: '[who i am]',
        title: 'Considered by default',
        description:
            'Rotterdam-based fullstack developer focused on digital experiences that feel considered from both sides of the screen. I care about structure, motion, and clarity in equal measure.',
    },
    {
        index: '02',
        label: '[my philosophy]',
        title: 'Strong point of view',
        description:
            'I like work that has a strong point of view without getting in its own way. The goal is not novelty for its own sake, but interfaces that feel sharp, usable, and memorable long after the first scroll.',
    },
    {
        index: '03',
        label: '[outside of work]',
        title: 'Reference collector',
        description:
            'Away from the screen, I spend time making music and collecting visual references from architecture, typography, and editorial design. That cross-pollination tends to show up in the details.',
    },
    {
        index: '04',
        label: '[how i work]',
        title: 'End to end',
        description:
            'I work across the full stack — from data models to micro-interactions. That range means fewer handoff gaps and more ownership over the final result. The seams tend not to show.',
    },
];

export type AboutCard = (typeof aboutCards)[number];
