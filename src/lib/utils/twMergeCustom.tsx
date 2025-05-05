import { extendTailwindMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

const customTwMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: ['label-sm', 'label-md', 'label-lg', 'heading-sm', 'heading-md', 'heading-lg', 'title-sm', 'title-md', 'title-lg'],
        }
    },
});

export function cn(...inputs: ClassValue[]) {
    return customTwMerge(clsx(inputs));
}
