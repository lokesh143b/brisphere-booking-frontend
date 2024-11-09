import React from "react";
import "./Discover.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import profile_pic from "../../assets/profile-pic.jpg";
import ladakhRiver from '../../assets/ladakh-river.jpg'

const Discover = () => { 
  return (
    <div id="discover" className="discover-main-container">
      <h1 className="discover-heading">Discover</h1>
      <div className="discover-container">
        {/* ---------discover left ---------- */}
        <div className="discover-left">
          {/* -------discover card-------- */}
          <div className="discover-card">
            <div className="discover-card-top">
              <img src={profile_pic} alt="" />
              <div className="discover-card-head-rat">
                <h5>Lokeswara Rao</h5>
                <div>
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <p>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <span>read more</span>
            </p>
          </div>
          {/* -------discover card-------- */}
          <div className="discover-card">
            <div className="discover-card-top">
              <img src={profile_pic} alt="" />
              <div className="discover-card-head-rat">
                <h5>Lokeswara Rao</h5>
                <div>
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <p>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <span>read more</span>
            </p>
          </div>
        </div>
        {/* ---------discover center--------- */}
        <div className="discover-center">
            <img src={ladakhRiver} alt="" />
            {/* -------discover card-------- */}
          <div className="discover-card">
            <div className="discover-card-top">
              <img src={profile_pic} alt="" />
              <div className="discover-card-head-rat">
                <h5>Lokeswara Rao</h5>
                <div>
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <p>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <span>read more</span>
            </p>
          </div>
        </div>
        {/* ----------dsicover right---------- */}
        <div className="discover-right">
          {/* -------discover card-------- */}
          <div className="discover-card">
            <div className="discover-card-top">
              <img src={profile_pic} alt="" />
              <div className="discover-card-head-rat">
                <h5>Lokeswara Rao</h5>
                <div>
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <p>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <span>read more</span>
            </p>
          </div>
          {/* -------discover card-------- */}
          <div className="discover-card">
            <div className="discover-card-top">
              <img src={profile_pic} alt="" />
              <div className="discover-card-head-rat">
                <h5>Lokeswara Rao</h5>
                <div>
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                  <MdOutlineStarPurple500 style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <p>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <span>read more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
