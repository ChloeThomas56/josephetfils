import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
    text: string;
    className?: string;
}

export default function CustomLink({ text, className, ...props }: CustomLinkProps) {
    return (
        <Link 
            {...props}
            className={`link ${className}`}
            scroll={false}
        >
            <span className="link__text link__text--visible">
                {text}
            </span>
            <span 
                aria-hidden="true"
                className="link__text link__text--hidden"
            >
                {text}
            </span>
        </Link>
    )
}