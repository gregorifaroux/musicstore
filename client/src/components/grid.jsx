import React, { useState, useEffect } from "react";
import axios from "axios";
import "./grid.css";
import { BASE_URL } from "../config";

function Grid() {
  const [albums, setAlbums] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    async function fecthAlbums() {
      const result = await axios(`${BASE_URL}`);
      setAlbums(result.data);
    }

    fecthAlbums();
  }, []);

  function renderAlbum(album, i) {
    const boxClass = `box box${i % 6} card`;
    return (
      <div className={boxClass}>
        <img alt={album.title} src={album.image} />
      </div>
    );
  }

  return <div className="gridflow">{albums.map(renderAlbum)}</div>;
}
export default Grid;
