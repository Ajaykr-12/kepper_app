import React from "react";
import "./header.css";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header className="header">
      <HighlightIcon className="lightIcon" />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
