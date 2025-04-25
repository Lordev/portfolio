import Link, { LinkProps } from 'next/link'

type ButtonOrLinkProps =
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | NextLinkProps

interface NextLinkProps extends LinkProps {
    href: string
}

export default function LinkLine(props: ButtonOrLinkProps) {
    const { label, size = 'md' } = props as {
        label: string
        size: 'lg' | 'md' | 'sm'
    }
    const sizeClasses = {
        lg: 'text-title-lg lg:text-title-xl',
        md: 'text-title-sm md:text-title-md lg:text-title-lg',
        sm: 'text-body-lg lg:text-title-md',
    }

    const classNames = `transition-colors ${sizeClasses[size]} relative before:content-[''] before:absolute before:top-1/2 before:translate-y-1/2 before:h-2 before:bg-neutral-300 before:transition-all before:duration-400 hover:before:w-[110%] before:w-0 cursor-pointer`

    if (!('href' in props)) {
        return (
            <div className="relative">
                <button
                    {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
                    className={classNames}
                >
                    {label}
                </button>
            </div>
        )
    } else {
        return (
            <div className="relative">
                <Link
                    {...(props as NextLinkProps)}
                    href={props.href}
                    className={classNames}
                >
                    {label}
                </Link>
            </div>
        )
    }
}
