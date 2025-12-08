import "./Entry.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Entry({ song, position }) {
  return (
    <div className="entry">
      <div className="title">
        <div className="name">
          <h1 className="title-nr">{position}.</h1>
          <h1 className="title-song">
            {song.artist} - {song.name} <br/>
            {`(${song.album})`}
          </h1>
          <h1>{song.avgScore}</h1>
        </div>
      </div>
      <YoutubeEmbed link={song.link} />
      <div className="individual-scores">
      </div>
    </div>
  );
}
