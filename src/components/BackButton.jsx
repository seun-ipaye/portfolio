import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const buttonStyle = {
    position: "absolute",
    top: "1.5rem",
    left: "1.5rem",
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    zIndex: 9999,
    transition: "transform 0.2s ease",
  };

  const handleClick = () => {
    navigate("/?skipIntro=true");
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      ←
    </button>
  );
}
export default BackButton;
