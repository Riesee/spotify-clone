import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import { albumsData, songsData } from "../assets/assets";
import SongItem from "./SongItem";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              name={album.name}
              desc={album.desc}
              id={album.id}
              image={album.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              name={song.name}
              image={song.image}
              desc={song.desc}
              id = {song.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
