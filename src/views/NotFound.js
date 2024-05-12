import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h2>Not Found</h2> <br />
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Back to home</a>
    </div>
  );
}

export default NotFound;
