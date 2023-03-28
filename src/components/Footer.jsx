import React from "react";
import "../assets/css/FooterHome.css";
// images imported
import discord_icon from "../assets/images/discord_icon.png";
import facebook_icon from "../assets/images/facebook_icon.png";
import insta_icon from "../assets/images/insta_icon.png";
import twitter_icon from "../assets/images/twitter_icon.png";
import youtube_icon from "../assets/images/youtube_icon.png";
import Logo from "../assets/images/logo.jpg";
function Footer() {
  return (
    <div className="footerHomeContainer">
      <div className="footerHomeEmailSectionContainer">
        <div className="footerHomeSection1Head1">Stay In the loop</div>
        <div className="footerHomeSection1Head2">
          Join our mailing list to stay updated about development at Tiger dev
        </div>
        <div className="footerHomeEmailContainer">
          <input
            placeholder="Enter Your Email Addrress"
            className="footerHomeEmailInput"
            type={"email"}
          />
          <button className="footerHomeEmailSubmitIcon">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="footerHomeAboutContainer">
        <div className="footerHomeAboutGDSC">
          <div className="footerHomeAboutGDSCHead">
            <div className="footerHomeAboutGDSCLogoContainer">
              <img
                className="footerHomeAboutGDSCLogo"
                src={Logo}
                alt="GDSC logo"
              />
            </div>
            <div className="footerHomeAboutGDSCText">ABOUT CTRL C+V </div>
          </div>
          <div className="footerHomeAboutGDSCTextDesc">
            We are a new coding group of students that aims to build a new world with new ideas. We aim to learn about widerange of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.{" "}
          </div>
        </div>
        <div className="footerHomeAboutMarketContainer">
          <div className="footerHomeAboutMarketHead">Marketplace</div>
          <div className="footerHomeAboutMarketDesc">
            <div>Explore</div>
            <div>Contributors</div>
            <div>Articles</div>
            <div>How it works</div>
            <div>Helps</div>
          </div>
        </div>
        <div>
          <div className="footerHomeAboutLinksHead">Links</div>
          <div className="footerHomeAboutLinkDesc">
            <div>Token</div>
            <div>API</div>
          </div>
        </div>
      </div>
      {/* <div className="footerHomeAboutJoinCom">
        <div className="footerHomeAboutComHead">Join Our Community</div>
        <div className="footerHomeAboutComDesc">
          <div className="footerHomeAboutComDescContainer">
            <a href="https://www.youtube.com/c/GDSCGTBIT/featured" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={discord_icon}  alt = {"icon"}/></a>
            <a href="https://www.facebook.com/dscgtbit" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={facebook_icon}  alt = {"icon"}/></a>
            <a href="https://www.instagram.com/gdscgtbit/" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={insta_icon}  alt = {"icon"}/></a>
            <a href="https://twitter.com/gdscgtbit" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={twitter_icon}  alt = {"icon"}/></a>
            <a href="https://www.youtube.com/c/GDSCGTBIT/featured" rel="noreferrer"  target={"_blank"}><img className="footerHomeAboutComIcon" src={youtube_icon}  alt = {"icon"}/></a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;