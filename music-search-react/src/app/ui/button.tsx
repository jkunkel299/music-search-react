interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    type: "submit" | "reset" | "button" | undefined;

}

export default function Button({children}: ButtonProps){
    return (
        <button
            className="inline-flex items-center justify-center border align-middle select-none text-lg text-center 
                duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none 
                py-2 px-4 shadow-sm hover:shadow-md bg-violet-500 hover:bg-violet-800 text-white rounded-lg transition antialiased"
        >
            {children}
        </button>
    )
}