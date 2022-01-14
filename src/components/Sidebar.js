import styles from "./Sidebar.module.css";
import Home from "../images/home-3-24.png";
import Logo from "../images/emoticon-32.png";
import Team from "../images/target-audience-24.png";
import Settings from "../images/settings-5-24.png";
import Contacts from "../images/phone-17-24.png";
import Documents from "../images/full-folder-24.png";
import Statistics from "../images/bar-chart-5-24.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [clicked, setClicked] = useState(false);

  console.log(clicked);

  return (
    <div className={styles.menu}>
      <conainer className={styles.container}>
        <button className={styles.button} onClick={() => setClicked(!clicked)}>
          <div
            className={clicked ? styles.button_imgOff : styles.button_img}
          ></div>
        </button>
        <section className={styles.section}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <ul className={styles.ul} onClick={() => setClicked(false)}>
            <li className={styles.icon}>
              <NavLink to="/">
                <img src={Home} alt="Home" />
              </NavLink>
            </li>
            <li className={styles.icon}>
              <NavLink to="/team">
                <img src={Team} alt="Team" />
              </NavLink>
            </li>
            <li className={styles.icon}>
              <NavLink to="/statistics">
                <img src={Statistics} alt="Statistics" />
              </NavLink>
            </li>
            <li className={styles.icon}>
              <NavLink to="/contacts">
                <img src={Contacts} alt="Contacts" />
              </NavLink>
            </li>
            <li className={styles.icon}>
              <NavLink to="/documents">
                <img src={Documents} alt="Documents" />
              </NavLink>
            </li>
            <li className={styles.icon}>
              <NavLink to="/settings">
                <img src={Settings} alt="Settings" />
              </NavLink>
            </li>
          </ul>
          <div className={styles.profil}>
            <img
              className={styles.profil_img}
              src="https://picsum.photos/200"
              alt="Profile image"
            />
          </div>
        </section>
      </conainer>
      <section className={clicked ? styles.popup_container : styles.hidden}>
        <ul onClick={() => setClicked(false)}>
          <li className={styles.text}>
            <NavLink to="/" className={styles.link}>
              <span>Home</span>
            </NavLink>
          </li>
          <li className={styles.text}>
            <NavLink to="/team" className={styles.link}>
              <span>Team</span>
            </NavLink>
          </li>
          <li className={styles.text}>
            <NavLink to="/statistics" className={styles.link}>
              <span>Statistics</span>
            </NavLink>
          </li>
          <li className={styles.text}>
            <NavLink to="/contacts" className={styles.link}>
              <span>Contacts</span>
            </NavLink>
          </li>
          <li className={styles.text}>
            <NavLink to="/documents" className={styles.link}>
              <span>Documents</span>
            </NavLink>
          </li>
          <li className={styles.text}>
            <NavLink to="/settings" className={styles.link}>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
