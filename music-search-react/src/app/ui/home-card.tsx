import Link from 'next/link';
import Button from './button';

export default function HomeCard ({
    title,
    caption,
    buttonValue,
    href,
}: {
    title: string;
    caption: string;
    buttonValue: string;
    href: string;
}) {
    return (
        <div className="w-full rounded-lg border bg-white border-stone-200 max-w-lg p-4">
            <div className="w-full h-max rounded px-3.5 py-2.5">
                <h3 className="font-bold text-2xl mb-2">{title}</h3>
                <p>{caption}</p>
            </div>
            <div className="w-full px-3.5 pt-2 pb-3.5 rounded">
                <Link
                    key={buttonValue}
                    href={href}    
                >
                    <Button
                        label={buttonValue}
                        type="button"    
                    >
                        {buttonValue}
                    </Button>
                        
                </Link>
            </div>
                
        </div>
    );
}