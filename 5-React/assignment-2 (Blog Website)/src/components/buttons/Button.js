import React from "react";

export default function Button(props) {
  return (
    <>
      <a href="#" className="btn btn-primary">
        {props.title}
        {/* <a href="#" className="btn btn-secondary">
        About Me
      </a> */}
      </a>

    </>
  );
}
