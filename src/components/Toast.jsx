import { useEffect, useState } from "react";

export default function Toast({ message, duration = 3000, onClose }) {
  const [closing, setClosing] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => {
        onClose();
      }, 500); // Esperamos que termine la animación antes de cerrar
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Interval para el progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`toast toast-error top-right ${closing ? "toast-exit" : ""}`}>
      <div>
        <span className="toast-icon">❌</span>
        <span>{message}</span>
      </div>
      <progress max={duration} value={timeRemaining} id="toast-progress"></progress>
    </div>
  );
}
