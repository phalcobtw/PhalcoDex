import { useState } from "react";
import TDIcon from "../assets/badge-3d.svg";
import Sparks from "../assets/sparks-solid.svg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function PokedexSprites({ data }) {
  const [spriteMode, setSpriteMode] = useState({ hd: false, shiny: false });
  const sprites = [
    data?.sprites?.front_default,
    data?.sprites?.other?.["home"]?.front_default,
    data?.sprites?.front_shiny,
    data?.sprites?.other?.["home"]?.front_shiny,
  ];

  function handleClick(identifier) {
    setSpriteMode((prev) => {
      return { ...prev, [identifier]: !prev[identifier] };
    });
  }

  function getSprite() {
    const { hd, shiny } = spriteMode;
    if (hd && shiny) return sprites[3];
    if (hd) return sprites[1];
    if (shiny) return sprites[2];
    return sprites[0];
  }

  return (
    <div className="pokedex-sprites">
      <ul className="sprites-actions">
        <li>
          <button onClick={() => handleClick("shiny")} className={spriteMode.shiny ? "active" : ""}>
            <img src={Sparks}></img>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("hd")} className={spriteMode.hd ? "active" : ""}>
            <img src={TDIcon}></img>
          </button>
        </li>
      </ul>
      {data?.sprites?.front_default ? <img src={getSprite()} alt={data.name} className="pokemon-sprite" /> : "..."}
      <AudioPlayer
        src={data.cries.latest}
        autoPlay={false}
        showSkipControls={false}
        showJumpControls={false}
        volume={0.3}
        customAdditionalControls={[]}
      ></AudioPlayer>
    </div>
  );
}
