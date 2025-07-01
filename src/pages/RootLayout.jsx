import Nav from "../components/Nav";
import DarkBackground from "../components/DarkBackground";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import { useRef } from "react";
import { formatInputText } from "../utils/helpers";

export default function RootLayout() {
  const inputRef = useRef();
  const navigate = useNavigate();

  function handleClick() {
    const name = formatInputText(inputRef.current.value.trim().toLowerCase());
    navigate(`/pokemon/${name}`);
  }
  return (
    <>
      <DarkBackground></DarkBackground>
      <Nav></Nav>
      <Header inputRef={inputRef} onSubmit={handleClick}></Header>
      <Outlet></Outlet>
    </>
  );
}
