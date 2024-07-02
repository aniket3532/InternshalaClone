import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Feature/Userslice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Profile() {
  const user = useSelector(selectUser);
  const [loginHistory, setLoginHistory] = useState([]);
  const {t}=useTranslation();
  // const userEmail = useSelector(state => state.user.email); // Adjust according to your state structure

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/login/login-history/${user.email}`)
      .then((response) => {
        setLoginHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching login history:", error);
      });
  }, [user.email]);
  return (
    <div>
      <div className="flex items-center mt-9 mb-4 justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-lg rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                src={user.photo}
                alt=""
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900">
                {user.name ? user.name : user.phoneNumber}
              </h3>
            </div>
            <div className="text-xs my-3">
              <h3 className="text-xl font-bold">{t("uid")}</h3>
              <h3 className="text-center text-lg text-gray-900">{user.uid}</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold">{t("email")}</h3>
              <h3 className="text-center text-xl text-gray-900">
                {user.email}
              </h3>
            </div>
            <div className="flex justify-center mt-3">
              <Link
                to="/userapplication"
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
              >
                <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  {t("view_applications")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">{t("login_history")}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">{t("ip")}</th>
                <th className="py-2 px-4">{t("browser")}</th>
                <th className="py-2 px-4">{t("os")}</th>
                <th className="py-2 px-4">{t("platform")}</th>
                <th className="py-2 px-4">{t("device_type")}</th>
                <th className="py-2 px-4">{t("timestamp")}</th>
              </tr>
            </thead>
            <tbody>
              {loginHistory.map((login, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4">{login.ip}</td>
                  <td className="py-2 px-4">{login.browser}</td>
                  <td className="py-2 px-4">{login.os}</td>
                  <td className="py-2 px-4">{login.platform}</td>
                  <td className="py-2 px-4">{login.deviceType}</td>
                  <td className="py-2 px-4">
                    {new Date(login.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
