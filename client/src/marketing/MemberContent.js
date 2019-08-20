import React from "react";

export default function MemberContent(props) {
  const { name, title, github, linkedin, img } = props.data;
  return (
    <div className="team">
      <img className="teamPic" src={img} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <p>{title}</p>
        <a href={github}>
          <i className="fab fa-github" />
        </a>
        <a href={linkedin}>
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </div>
  );
};