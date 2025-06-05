export default function DarkBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.67)",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
