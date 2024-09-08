import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="blog-card">
        <div className="blog-card-banner">
          <img
            src={props?.data?.imgSrc}
            alt={props?.data?.blogDesc}
            width="250"
            className="blog-banner-img"
          />
        </div>

        <div className="blog-content-wrapper">
          <button className="blog-topic text-tiny">{props?.data?.blogTitle}</button>

          <h3>
            <a href="#" className="h3">
            {props?.data?.blogDesc}
            </a>
          </h3>

          <p className="blog-text">
          {props?.data?.blogText}
          </p>

          <div className="wrapper-flex">
            <div className="profile-wrapper">
              <img
                src= {props?.data?.blogAuthor?.imgSrc}
                alt="Julia Walker"
                width="50"
              />
            </div>

            <div className="wrapper">
              <a href="#" className="h4">
              {props?.data?.blogAuthor?.name}
              </a>

              <p className="text-sm">
                <time datetime="2022-01-17">{props?.data?.blogAuthor?.date}</time>
                <span className="separator"></span>
                <ion-icon name="time-outline"></ion-icon>
                <time datetime="PT3M">{props?.data?.blogAuthor?.time}</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
