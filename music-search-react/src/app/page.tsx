// page.tsx -- the main page of the application
import HomeCard from "@/app/ui/home-card";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold font-sans text-4xl text-center">Music Search Tool</h1>
      <div className="container flex flex-wrap justify-center-safe p-6 gap-4">
        <HomeCard 
          title="Search for an Artist"
          caption="Search for an artist to get up to 5 of their most recent albums and up to 5 of their most popular songs."
          buttonValue="Search for an Artist"
          href='/artist-search'
        />
        <HomeCard 
          title="Search for a Song"
          caption="Search for a song using its title or a related phrase to get the top 10 matches for that song."
          buttonValue="Search for a Song"
          href='/song-search'
        />
      </div>
    </div>
  );
}
