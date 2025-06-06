import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging, faRulerVertical } from "@fortawesome/free-solid-svg-icons";

export default function PokedexAbout({ data }) {
  return (
    <>
      <h3 className={`type-${data.types[0].type.name} text-type`}>About</h3>
      <div className="about-info">
        <div className="about-info--weight">
          <FontAwesomeIcon
            icon={faWeightHanging}
            className={`type-${data.types[0].type.name} text-type fa-icon`}
          ></FontAwesomeIcon>
          <p>Height: {data?.height ? (data.height / 10).toFixed(1) + "mts." : "?"}</p>
        </div>
        <div className="about-info--height">
          <FontAwesomeIcon
            icon={faRulerVertical}
            className={`type-${data.types[0].type.name} text-type fa-icon`}
          ></FontAwesomeIcon>
          <p>Weight: {data?.weight ? (data.weight / 10).toFixed(1) + "kg." : "?"} </p>
        </div>
      </div>
    </>
  );
}
