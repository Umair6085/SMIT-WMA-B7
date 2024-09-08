import React from "react";
import Card from "../card/Card";
import Aside from "../aside/Aside";
import {blogsData} from "../../constant/blogs"
export default function Blogs() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="blog">
            <h2 className="h2">Latest Blog Post</h2>

            <div className="blog-card-group">

              {blogsData?.map((item, index)=>{
                return <Card key={index} data={item} />
              })}
              

            </div>

            <button class="btn load-more">Load More</button>
          </div>

          <Aside />
        </div>
      </div>
    </>
  );
}
