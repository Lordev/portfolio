import { VariantProps, cva } from 'class-variance-authority';
import {cn} from '@/lib/utils/twMergeCustom';


const headingVariants = cva('', {
    variants: {
        size: {
            'section-label-sm': 'font-label text-label-sm text-neutral-300',
            'section-label-md': 'font-label text-label-md',
            'section-label-lg': 'font-label text-label-lg',
            'title-sm': 'text-title-sm',
            'title-md': 'text-title-sm md:text-title-md',
            'title-lg': 'text-title-md md:text-title-lg',
            'heading-sm': 'text-heading-sm',
            'heading-md': 'text-heading-sm lg:text-heading-md',
            'heading-lg': 'text-heading-md lg:text-heading-lg',
            'display-sm': 'text-display-sm',
            'display-md': 'text-display-md',
            'display-lg': 'text-display-lg',
        },
        transform: {
            uppercase: 'uppercase',
            lowercase: 'lowercase',
            capitalize: 'capitalize',
            normal: 'normal-case ',
        },
    },
    defaultVariants: {
        size: 'heading-md',
        transform: 'uppercase',
    },
});

interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
}

export function Heading({
    as: Component = 'h2',
    size,
    transform,
    children,
    className,
    ...props
}: HeadingProps) {
    return (
        <Component className={cn(headingVariants({ size, transform }), className)} {...props}>
            {children}
        </Component>
    );
}
