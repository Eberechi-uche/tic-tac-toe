import ai from "../components/images/ai.png";
import human from "../components/images/man.png";

export function PlayerSelector({ selectMode }) {
  return (
    <div className="popUp">
      <p>select game mode</p>
      <div className="playerBoard">
        <div
          onClick={() => {
            selectMode(1);
          }}
        >
          <img className=" mode-Image" src={ai} alt="an icon of a robot" />
        </div>
        <div
          onClick={() => {
            selectMode(2);
          }}
        >
          <img
            className=" mode-Image"
            src={human}
            alt="an icon of two humans"
          />
        </div>
      </div>
    </div>
  );
}
