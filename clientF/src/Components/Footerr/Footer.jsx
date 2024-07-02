import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <footer className="bg-gray-800 text-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div>
              <h3 className="text-sm font-bold">{t("internship_by_places")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("new_york")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("los_angeles")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("chicago")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("san_francisco")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("miami")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("seattle")}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">{t("internship_by_stream")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("about_us")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("careers")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("press")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("news")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("media_kit")}
                </p>
                <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                  {t("contact")}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">{t("job_places")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("blog")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("newsletter")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("events")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("help_center")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("tutorials")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("supports")}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">{t("jobs_by_streams")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("startups")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("enterprise")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("government")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("saas")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("marketplaces")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("ecommerce")}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">{t("about_us")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("startups")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("enterprise")}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold">{t("team_diary")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("startups")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("enterprise")}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold">{t("terms_and_conditions")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("startups")}
                </a>
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("enterprise")}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold">{t("sitemap")}</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600"
                >
                  {t("startups")}
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
          <div>
            <h3 className="text-sm font-bold">{t("about_us")}</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("startups")}
              </a>
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("enterprise")}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold">{t("team_diary")}</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("startups")}
              </a>
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("enterprise")}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold">{t("terms_and_conditions")}</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("startups")}
              </a>
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("enterprise")}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold">{t("sitemap")}</h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/"
                className="transition-colors duration-200 hover:underline hover:text-blue-600"
              >
                {t("startups")}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="border-white">
              <i className="bi bi-google-play text-black"></i>{" "}
              {t("get_android_app")}
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <p className="mt-4 text-sm sm:mt-0 dark">
              © {t("copyright_year")} {t("all_rights_reserved")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
