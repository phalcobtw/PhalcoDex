import { useEffect, useState } from "react";

export default function Toast({ message, duration = 3000, onClose }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => onClose(), 500); // Esperamos que termine la animación antes de cerrar
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast toast-error top-right ${closing ? "toast-exit" : ""}`}>
      <span className="toast-icon">❌</span>
      <span>{message}</span>
      <button className="close-btn" onClick={() => setClosing(true)}>
        X
      </button>
    </div>
  );
}
