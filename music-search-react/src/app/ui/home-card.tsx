import Link from 'next/link';

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
                <h3 className="font-bold font-sans text-2xl mb-2">{title}</h3>
                <p>{caption}</p>
            </div>
            <div className="w-full px-3.5 pt-2 pb-3.5 rounded">
                <Link
                    key={buttonValue}
                    href={href}    
                    className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-violet-500 hover:bg-violet-800 text-white rounded-lg transition antialiased"
                >
                    {buttonValue}
                </Link>
            </div>
                
        </div>
    );
}