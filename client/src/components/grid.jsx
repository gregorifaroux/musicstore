/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Flipcard from "@kennethormandy/react-flipcard";

// Import minimal required styles however you’d like
import "@kennethormandy/react-flipcard/dist/Flipcard.css";
import "./grid.css";
import { BASE_URL } from "../config";

function Grid() {
  const [albums, setAlbums] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    async function fecthAlbums() {
      const result = await axios(`${BASE_URL}/albums`);
      console.log(JSON.stringify(result));

      const data = result.data.albums.map(a => ({
        ...a,
        flipped: false
      }));
      setAlbums(data);
    }

    fecthAlbums();
  }, []);

  const flip = index => {
    const data = albums.map((a, i) => ({
      ...a,
      flipped: index === i ? !a.flipped : false
    }));
    setAlbums(data);
  };
  function renderAlbum(album, i) {
    const boxClass = `box box${i % 6} card`;
    return (
      <div className={boxClass}>
        <Flipcard flipped={albums[i].flipped} onClick={() => flip(i)}>
          <img alt={`${album.title} cover`} src={album.image} />
          <div className="card__details">
            <h4 className="card__sub-heading">{album.artist}</h4>
            <p className="card__text">
              <iframe
                title={album.title}
                scrolling="no"
                allowTransparency="true"
                src={`https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=true&width=200&height=200&color=ff0000&layout=dark&size=medium&type=tracks&id=${album.deezerId}&app_id=1`}
                width="200"
                height="200"
              />
            </p>
          </div>
        </Flipcard>
      </div>
    );
  }

  return <div className="gridflow"> {albums.map(renderAlbum)}</div>;
}
export default Grid;
