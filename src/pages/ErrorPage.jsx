import DarkBackground from "../components/DarkBackground";
import Nav from "../components/Nav";

export default function ErrorPage() {
  return (
    <>
      <DarkBackground></DarkBackground>
      <Nav></Nav>
      <div className="infotext-container">
        <h3>Error!</h3>
        <p>The route does not exist!</p>
      </div>
    </>
  );
}
