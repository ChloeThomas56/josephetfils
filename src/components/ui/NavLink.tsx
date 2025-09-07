import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
    text: string;
    className?: string;
}

export default function NavLink({ text, className, ...props }: NavLinkProps) {
    return (
        <Link 
            {...props}
            className={`nav-link ${className}`}
            scroll={false}
        >
            <span className="nav-link__text nav-link__text--visible">
                {text}
            </span>
            <span 
                aria-hidden="true"
                className="nav-link__text nav-link__text--hidden"
            >
                {text}
            </span>
        </Link>
    )
}