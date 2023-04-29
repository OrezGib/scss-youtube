import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import imgUrl from '../../../assets/logo.png'

export default function index() {
  return (
    <div className="menu-logo">
      <button className="icon-container burgetMenu">
        <IoMenu size={25} />
      </button>
      <div className="logo-container">
        <Link>
          <img src={imgUrl} alt="youtube logo" />
        </Link>
      </div>
    </div>
  );
}