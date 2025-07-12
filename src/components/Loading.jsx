import DarkBackground from "../components/DarkBackground";
import Nav from "../components/Nav";

export default function ErrorPage() {
  return (
    <>
      <DarkBackground></DarkBackground>
      <div className="infotext-container loading-container">
        <h3>Loading!</h3>
        <p>Please wait a moment...</p>
      </div>
    </>
  );
}
