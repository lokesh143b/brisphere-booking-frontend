import React from "react";
import "./Services.css";
import { FaCarAlt, FaHome, FaWifi } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import { IoIosBicycle } from "react-icons/io";
import { RiBookReadFill } from "react-icons/ri";
import { FaFlag } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
 
const Services = () => {
  return (
    <div id="services" className="services-main-container">
      <h1>Services</h1>
      <div className="services-card-container">
        {/* ----------service card----------- */}
        <div className="service-card">
          <FaWifi className="service-icon" style={{ color: "gray" }} />
          <h3>High Speed Internet</h3>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <IoFastFood className="service-icon" style={{ color: "gray" }} />
          <h3>Healthy Meals</h3>
          <p>
            A healthy breakfast and pleasant dinner will be serviced at your
            space every single day for your entire duration of stay with option
            of paid order within BriSphere.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <IoMdHome className="service-icon" style={{ color: "gray" }} />
          <h3>Homely Stay</h3>
          <p>
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <FaCar className="service-icon" style={{ color: "gray" }} />
          <h3>Transportation</h3>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <IoIosBicycle className="service-icon" style={{ color: "gray" }} />
          <h3>Food Delivery</h3>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <RiBookReadFill className="service-icon" style={{ color: "gray" }} />
          <h3>Tourism</h3>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <FaFlag className="service-icon" style={{ color: "gray" }} />
          <h3>Job</h3>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <FaCar className="service-icon" style={{ color: "gray" }} />
          <h3>Rental Service</h3>
          <p>
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
        {/* ----------service card----------- */}
        <div className="service-card">
          <FaShoppingCart className="service-icon" style={{ color: "gray" }} />
          <h3>Online Shop</h3>
          <p>
            Optical fiber connections provided in not only in your
            cabins but rather to all of the BriSphere scenic working spaces and
            dinning areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
