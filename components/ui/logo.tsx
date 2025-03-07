import { twMerge } from "tailwind-merge";

interface logoProps {
    size: 'sm' | 'md' | 'lg';
    override?: string
}

const baseStyles: string = "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-400 font-semibold inline-block";

const sizeClasses = {
    sm: "text-xl md:text-2xl lg:text-3xl", 
    md: "text-2xl md:text-3xl lg:text-4xl", 
    lg: "text-3xl md:text-4xl lg:text-5xl", 
};

export default function Logo(props: logoProps) {

    const combinedClasses = twMerge(baseStyles, sizeClasses[props.size], props.override || '');
    return (
        <div className={combinedClasses}>Exalyte</div>
    );
}