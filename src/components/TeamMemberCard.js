import React from "react";
import "../styles/Team.css";

export default function TeamMemberCard({ name, role }) {
  return (
    <div className="team-card">
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}
