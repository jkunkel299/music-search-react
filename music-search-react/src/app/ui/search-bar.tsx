import Button from "./button";

export default function Search({
    type,
    action,
}: {
    type: 'artist' | 'song';
    action: string;
}) {
    let term = "Search for ";
    if (type == "artist") {
        term += "an " + type;
    } else if (type == "song") {
        term += "a " + type;
    }

    return (
        <div className="p-2">
            <div>
                <h1 className="text-3xl">{term}</h1>
            </div>
            <div>
                <SearchBar type={type} action={action} />
                <SearchButton type={type} />
            </div>
        </div>
    )
}

export function SearchBar({
    type,
    action,
}: {
    type: 'artist' | 'song';
    action: string;
}) {
    let placeholderCap = "Enter the name of ";
    let inputName;
    if (type == "artist") {
        placeholderCap += "an " + type;
        inputName = "artistToSearch";
    } else if (type == "song") {
        placeholderCap += "a " + type + ", or a term to search";
        inputName = "songToSearch";
    }
    
    return (
        <div className="w-full p-2">
            <div className="relative w-full">
                <form action={action} method="POST">
                    <input 
                        name={inputName} 
                        placeholder={placeholderCap} 
                        type="text" 
                        className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 border border-stone-200 transition-all text-md py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300" />
                </form>
            </div>
        </div>
    )
}

export function SearchButton({type}: {type: 'artist' | 'song'}){
    let term = "Search ";
    if (type == "artist") {
        term += type;
    } else if (type == "song") {
        term += type;
    }

    return (
        <div className="p-2">
            <Button 
                label={term}
                type="submit"
            >
                {term}
            </Button>
        </div>
    )
}