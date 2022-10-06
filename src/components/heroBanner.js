import React from "react";

import logo from "../static/images/Pyconf_2022_03.png";
import bgImage from "../static/images/bg_image.webp";
import Button from './button';

export function HeroBanner() {
  return (
    <>
      <div className="video__wrapper">
        <div className="video__overlay" />
        <div className="video__content">
          <div className="logo__main">
            <img src={logo} width={900} />
          </div>
          <div className="m-t-20">
            <h3 className="lead">
              <span>
              Conference: 10th December, 2022
              </span>
              <span>
              Workshops: 11th December, 2022
              </span>
            
            </h3>
            <div className="content__button m-t-20">
              <Button
                linkRef="https://www.papercall.io/pyconfhyd-cfp-2022"
                cls="highlight"
              >
                Submit a Proposal
              </Button>
              <Button linkRef="#" cls="highlight disabled">
                Buy Tickets (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
        <div className="video__main">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAJAA0DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcJ/8QAJBAAAQQCAQIHAAAAAAAAAAAABQIDBAYBBwAINwkUFXZ4tLf/xAAVAQEBAAAAAAAAAAAAAAAAAAACBf/EAB0RAAMBAAIDAQAAAAAAAAAAAAIDBAEGEgUREwf/2gAMAwEAAhEDEQA/AJDqfrWP69qw62U40AjFrdPJHz9VULsKLcXOmJ89gxDp87BcmKJVOtLECbKSdjwfQWhkpkdHID5PmZ7S/YfiTb8Hs1hcWFqi3Knisznn2as+MyMWtMZpYxyNPteHXcsSWZWWp7anI85hTTrS8YxltvODpD7wk/jrsH8w2rxVoPttG9wGfrCeOH8z4tectyPGySW32XrdRqnOMkxxxkANMKp3NLfqGDuuFa+rOqvTcxc0+SV5lUVeFVJBFAwEiaUjrX0szSWGzOQnM3t29JNrR+eMaRL7l//Z"
            className="dummy-image"
            loading="lazy"
          />
          <img className="dummy-image" src={bgImage} alt="hero banner" />
        </div>
      </div>
      <div id="__empty_holder" />
    </>
  );
}