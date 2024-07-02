import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import './sidebar.css'
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import LanguageDropdown from "./languageDropdown";
import { useSelector } from "react-redux";
import { selectUser } from "../../Feature/Userslice";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector(selectUser);

  const {t} = useTranslation();

  const navigate = useNavigate();

  const OpenSidebar = () => {
    setSidebarOpen(true);
  };
  const CloseSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".open-btn")
      ) {
        CloseSidebar();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [sidebarOpen]);


  const logoutFunction = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <div className="App2 -mt-2 overflow-hidden">
        <Link to="/">
          <img src={logo} alt="" id="nav2-img" />{" "}
        </Link>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <span className="cursor-pointer close-btn" onClick={CloseSidebar}>
            &times;
          </span>
          {user ? (
            <>
              <div className="profile">
                <Link to={"/profile"}>
                  <img
                    className="rounded-full justify-center"
                    src={user.photo}
                    alt=""
                    srcset=""
                  />
                </Link>
                <p className=" text-center">
                  {t("profile_name")}{" "}
                  <span className="font-bold text-blue-500">{user?.name}</span>
                </p>
              </div>
            </>
          ) : (
            <div className="auth"></div>
          )}
          <Link to="/internship">{t("internships")} </Link>
          <Link to="/Jobs">{t("job")} </Link>

          <Link to={"/"} className="small">
            {t("contact_us")}
          </Link>
          <div className="flex justify-center"><LanguageDropdown /></div>
          <hr />
          {user ? (
            <>
              <div className="addmore">
                {user ? (
                  <Link to={"/userapplication"}>
                    <p>{t("my_applications")}</p>
                  </Link>
                ) : (
                  <Link to={"/register"}>
                    <p>{t("my_applications")}</p>
                  </Link>
                )}

                <Link>
                  <p>{t("view_resume")}</p>
                </Link>
                <Link>
                  <p>{t("more")}</p>
                </Link>
                <button className="bt-log" id="bt" onClick={logoutFunction}>
                  {t("logout")} <i class="bi bi-box-arrow-right"></i>
                </button>
                <br />
                <br />
                <button className="bt-log" onClick={logoutFunction}>
                  {t("logout")} <i class="bi bi-box-arrow-right"></i>
                </button>
              </div>
            </>
          ) : (
            <div className="addmore">
              <p className="">{t("register_as_a_student")}</p>
              <p>{t("register_as_an_employer")}</p>
              
              <br />
              <br />
            </div>
          )}
        </div>

        <div className="main">
          <span
            style={{ fontSize: "22px" }}
            className="open-btn"
            onClick={OpenSidebar}
          >
            &#9776;
          </span>
        </div>

        <div className="search2">
          <i class="bi bi-search"></i>
          <input type="search" placeholder="Search" />
        </div>

        {user ? (
          <></>
        ) : (
          <>
            <div className="reg">
              <Link to="/register">
                {" "}
                <button className="btn4">{t("register")}</button>
              </Link>
            </div>
            <div className="admin">
              <Link to={"/adminLog"}>
                <button id="admin"> {t("admin_login")}</button>
              </Link>
            </div>
          </>
        )}

        <p className="text-red-300">{t("hire_talent")}</p>
      </div>
    </>
  );
};

export default Sidebar;
