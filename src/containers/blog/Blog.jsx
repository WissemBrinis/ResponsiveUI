import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening right now</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="AI is the future fasten your belts"
          />
        </div>
        <div className="blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="AI is the future fasten your belts"
          />{" "}
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="AI is the future fasten your belts"
          />{" "}
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="AI is the future fasten your belts"
          />{" "}
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="AI is the future fasten your belts"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
