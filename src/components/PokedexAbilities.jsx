import { useState, useEffect } from "react";
import Abilities from "./Abilities.jsx";
import { capitalizeWord } from "../utils/helpers.js";

export default function PokedexAbilities({ data }) {
  const [abilitiesInfo, setAbilitiesInfo] = useState([]);

  useEffect(() => {
    async function fetchAbilitiesData() {
      if (!data.abilities) return;
      try {
        const results = await Promise.all(
          data.abilities.map(async (abilityObj) => {
            const res = await fetch(abilityObj.ability.url);
            const abilityData = await res.json();

            const descripcion =
              abilityData.effect_entries.find((entry) => entry.language.name === "en")?.short_effect ||
              "No description available";

            return {
              name: abilityObj.ability.name,
              isHidden: abilityObj.is_hidden,
              description: descripcion,
            };
          })
        );
        setAbilitiesInfo(results);
      } catch (error) {
        console.error("Error loading abilities:", err);
      }
    }
    fetchAbilitiesData();
  }, [data]);
  return (
    <div className="">
      <h3>Abilities</h3>
      <div className="abilities-container">
        {abilitiesInfo
          ? abilitiesInfo.map((ability, index) => (
              <Abilities key={index}>
                <h4>{capitalizeWord(ability.name)}</h4>
                <p>{ability.description}</p>
              </Abilities>
            ))
          : "..."}
      </div>
    </div>
  );
}
