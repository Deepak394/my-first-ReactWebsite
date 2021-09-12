import React from "react";

export default function About(props) {
  let mode = {
    backgroundColor: props.mode === "dark" ? "#13466e": "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>About Us</h1>
      <div className="accordion" id="accordionExample" style={mode}>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mode}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word cound, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mode}
            >
              <strong>Free To Used</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              textutils is a free character counter tool that provides instant
              character count and word count statistics for a given text.
              Textutlis report the number of word and characters. Thus it is
              suitable for writing text with word and character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mode}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
              This word counter softwere works in any web browser such a chrome
              ,firefox, Internet Exporer, Safari, Opera. It suits to count
              character in facebook, blog, books, excel document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
