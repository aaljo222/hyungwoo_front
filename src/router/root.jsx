import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "../layouts/BasicLayout";

import aboutGreenRouter from "./aboutGreenRouter";
import academicSupportRouter from "./academicSupportRouter";
import admissionEducationRouter from "./admissionEducationRouter";
import campusLifeRouter from "./campusLifeRouter";
import informationRouter from "./informationRouter";
import accountRouter from "./accountRouter";
import adminRouter from "./adminRouter";

const Loading = <div>Loading......</div>;

// Lazy pages
const Main = lazy(() => import("../pages/MainPage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={Loading}>
        <BasicLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={Loading}>
            <Main />
          </Suspense>
        ),
      },

      // 🌱 About Green
      {
        path: "aboutgreen",
        children: aboutGreenRouter(),
      },

      // 🎓 Academic Support
      {
        path: "academicsupport",
        children: academicSupportRouter(),
      },

      // 📝 Admission Education
      {
        path: "admissioneducation",
        children: admissionEducationRouter(),
      },

      // 🏫 Campus Life
      {
        path: "campuslife",
        children: campusLifeRouter(),
      },

      // ℹ️ Information
      {
        path: "information",
        children: informationRouter(),
      },

      // 👤 Account
      {
        path: "account",
        children: accountRouter(),
      },

      // 🔐 Admin
      {
        path: "admin",
        children: adminRouter(),
      },
    ],
  },
]);

export default root;
