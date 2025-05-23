import Search from "@/app/ui/search-bar"

export default function Page(){
    return (
        <div>
            <Search type="song" action="/songSearch" />
        </div>
    )
}