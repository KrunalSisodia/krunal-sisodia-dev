import React from "react";

const resume = () => {
  return (
    <div className="resumeWrapper mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Experience</h3>
                <h5 class="card-subtitle mb-2 text-muted">Card subtitle</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Education</h4>
                <h5 class="card-subtitle mb-2 text-muted">Card subtitle</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="resumeLang">
              <h3 className="resumeLangHeading">Language and framework</h3>
              <div className="resumeLangBody">{}</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resumeTools">
              <h3 className="resumeLangHeading">Tools and softwares</h3>
              <div className="resumeLangBody">{}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
