import Nav from "../components/Nav";
import DarkBackground from "../components/DarkBackground";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <DarkBackground></DarkBackground>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}
