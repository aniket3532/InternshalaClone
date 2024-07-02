import React, { useEffect, useState } from "react";
import Jobs from "../Data/JobsDataAvl";
// import { selectUser } from "../../Feature/Userslice";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./job.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../Feature/Userslice";
import { useTranslation } from "react-i18next";

function JobDetail() {
  const user = useSelector(selectUser);
  const [isDivVisible, setDivVisible] = useState(false);
  const [textarea, setTextare] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://internshalaclone.onrender.com/api/job/${id}`
      );

      const { company, category } = response.data;
      setCompany(company);
      setCategory(category);
      setData(response.data);
    };
    fetchData();
  });
  const show = () => {
    setDivVisible(true);
  };
  const hide = () => {
    setDivVisible(false);
  };

  const submitApplication = async () => {
    const text = document.getElementById("text");
    // if(!user.name) user.name = user.phoneNumber
    if (text.value === "") {
      alert("Fill the mendetory fildes");
    } else {
      const bodyJson = {
        coverLetter: textarea,
        category: category,
        company: company,
        user: user,
        Application: id,
      };

      await axios
        .post(
          "https://internshalaclone.onrender.com/api/application",
          bodyJson
        )
        .then((res) => {})
        .catch((err) => {
          alert("error happend");
        });
      alert("Done");
      navigate("/Jobs");
    }
  };
  const {t} = useTranslation();
  return (
    <div>
      <div className="details-app">
        <h1 className="font-bold text-3xl">{data.title}</h1>
        <div className="m-14 shadow-sm rounded-md border">
          <p className="mb-4 mt-3" id="boxer">
            {" "}
            <i className="bi bi-arrow-up-right text-blue-500"></i> {t("actively_hiring")}
          </p>
          <div className="main-info align-baseline mr-96 mt-7">
            <p className="text-xl font-bold mt-4"> {data.title}</p>
            <p className="text-sm text-slate-300 font-bold">{data.title}</p>
            <p>
              {" "}
              <i class="bi bi-geo-alt-fill"></i> {data.location}
            </p>
          </div>
          <div className="flex tedxt-sm justify-between">
            <p className="mt-3 text-slate-400">
              {" "}
              <i class="bi bi-play-circle-fill"></i> {t("start_date")} <br />{" "}
              {data.StartDate}
            </p>

            <p className="mt-3 text-slate-400">
              {" "}
              <i class="bi bi-calendar-check-fill"></i> {t("experience")} <br />
              {data.Experience}
            </p>

            <p className="mt-3 text-slate-400">
              {" "}
              <i class="bi bi-cash"></i> {t("salary")} <br /> {data.CTC}
            </p>
          </div>
          <div className="flex">
            <p className="bg-green-100 rounded-md ml-4 text-green-300">
              {" "}
              <i class="bi bi-clock"></i> 12/12/2012
            </p>
          </div>
          <hr />
          <div className="aboutCompany flex justify-start">
            <p className="mt-3 text-xl font-bold text-start">
              {" "}
              {t("about")} {data.company}
            </p>
            <br />
          </div>
          <div className="flex">
            <p className="text-blue-500">
              {" "}
              {t("instagram_page")} <i className="bi bi-arrow-up-right-square"></i>
            </p>
          </div>
          <p className="mt-4"> {data.aboutCompany}</p>
          <div className="about-Job">
            <p className="mt-3 text-xl font-bold text-start"> {t("about_job")}</p>
            <p>{data.aboutJob}</p>
          </div>
          <p className="text-blue-500 justify-start">
            {" "}
            {t("learn_business_communication")}
          </p>

          <div className="whocan">
            <p className="mt-3 text-xl font-bold text-start">{t("who_can_apply")}</p>
            <p>{data.Whocanapply}</p>
          </div>

          <p className="mt-3 text-xl font-bold text-start">{t("perks")}</p>
          <p>{data.perks}</p>

          <p className="mt-3 text-xl font-bold text-start">
            {" "}
            {t("additional_information")}
          </p>
          <p>{data.AdditionalInfo}</p>

          <p className="mt-3 text-xl font-bold text-start">
            {" "}
            {t("number_of_openings")}
          </p>
          <p className="text-start">{data.numberOfopning}</p>
          <div className="flex justify-center mt-6 bg-blue-500 w-40 text-center text-white font-bold ">
            <button className="flex justify-center align-middle" onClick={show}>
              {t("apply")}
            </button>
          </div>
        </div>
      </div>
      {isDivVisible && (
        <>
          <div className="application-page">
            <div className="bg">
              <button className="close2" onClick={hide}>
                <i className="bi-bi-x"></i> {t("close")}
              </button>
              <p>{t("applying_for")} {t("company")} {data.company}</p>
              <p className="mt-3 text-sm font-bold text-start mb-3">
                {data.aboutCompany}
              </p>
            </div>
            <div className="moreSteps">
              <p className="font-semibold text-xl">{t("your_resume")}</p>
              <small>
                {t("your_current_resume_will_be_submitted_along_with_the_application")}
              </small>

              <p className="mt-5 font-semibold text-xl">{t("cover_letter")}</p>
              <br />
              <p>{t("why_should_we_hire_for_this_role")}</p>
              <textarea
                name="coverLetter"
                placeholder=""
                id="text"
                value={textarea}
                onChange={(e) => setTextare(e.target.value)}
              ></textarea>
              <p className="mt-5 font-semibold text-xl">{t("your_availability")}</p>
              <p>{t("confirm_your_availability")}</p>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="Yes, I am available to join immediately"
                />
                {t("yes_i_am_available_to_join_immediately")}
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  value="No, I am currently on notice period"
                />
                {t("no_i_am_currently_on_notice_period")}
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  value="No, I will have to serve notice period"
                />
                {t("no_i_will_have_to_serve_notice_period")}
              </label>
            </div>

            <div>
              <label>
                <input type="radio" value="Other" />
                Other{" "}
                <span className="text-slate-500">
                  {t("please_specify_your_availability")}{" "}
                </span>
              </label>
            </div>
            <p className="mt-5 font-semibold text-xl">
              {t("custom_resume")} <span className="text-slate-500">{t("optional")}</span>
            </p>
            <small className="text-slate-500">
              {t("employer_can_download_and_view_this_resume")}
            </small>

            <div className="submit flex justify-center">
              {user ? (
                <button className="submit-btn" onClick={submitApplication}>
                  {t("submit_application")}
                </button>
              ) : (
                <Link to={"/register"}>
                  <button className="submit-btn">{t("submit_application")}</button>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default JobDetail;
