import React from "react";
import { tags } from "../../constant/blogs";
import { FaDatabase } from "react-icons/fa";
import { PiPersonArmsSpreadBold } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { FaTwitter, FaDiscord, FaFacebookF } from "react-icons/fa";

export default function Aside() {
  return (
    <>
      <div className="aside">
        <div className="topics">
          <h2 className="h2">Topics</h2>

          <a href="#" className="topic-btn">
            <div className="icon-box">
            <FaDatabase />
            </div>
            <p>Database</p>
          </a>

          <a href="#" className="topic-btn">
            <div className="icon-box">
            <PiPersonArmsSpreadBold />
            </div>
            <p>Accessibility</p>
          </a>

          <a href="#" className="topic-btn">
            <div className="icon-box">
            <IoRocketOutline />
            </div>
            <p>Web Performance</p>
          </a>

        </div>

        <div className="tags">
          <h2 className="h2">Tags</h2>

          <div className="wrapper">
            {tags?.map((item, index) => {
              return(
                <button className="hashtag" key={index} >{item}</button>
              )
            })}
            
          </div>
        </div>

        <div className="contact">
          <h2 className="h2">Let's Talk</h2>

          <div className="wrapper">
            <p>
              Do you want to learn more about how I can help your company
              overcome problems? Let us have a conversation.
            </p>

            <ul className="social-link">
              <li>
                <a href="#" className="icon-box discord">
                <FaDiscord />
                </a>
              </li>

              <li>
                <a href="#" className="icon-box twitter">
                <FaTwitter />
                </a>
              </li>

              <li>
                <a href="#" className="icon-box facebook">
                <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="newsletter">
          <h2 className="h2">Newsletter</h2>

          <div className="wrapper">
            <p>
              Subscribe to our newsletter to be among the first to keep up with
              the latest updates.
            </p>

            <form action="#">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
