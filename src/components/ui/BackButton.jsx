import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="back-button" onClick={() => navigate(-1)}>
      <ChevronLeft />
      <span>Back</span>
    </div>
  );
}

export default BackButton;
