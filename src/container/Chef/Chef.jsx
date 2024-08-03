import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            We maintain the famous PAN DABBAs in Maisammaguda. You can check out
            our customers reviews on it. There no PAD DABBA in maisammaguda
            which is better
          </p>
        </div>
        <p className="p__opensans">
          than ours. We make the most premium PANs in our locality and never can
          be beaten by any other group. Thanks to the coach SAIRAJ who trained
          me well.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Rakesh Rachapudi</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
