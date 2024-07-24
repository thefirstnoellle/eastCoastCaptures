import { Outlet, createBrowserRouter } from "react-router-dom";

import Header from "./Header";
import Hero from "./Hero";
import Section from "./Section";
import FeaturedImage from "./FeaturedImage";
import About from "./About";
import Inquiry from "./Inquiry";
import Footer from "./Footer";

import Featured1 from "./assets/hero-image.jpg";
import { Manage } from "./Manage";
import { Galleries } from "./Galleries"; //why are these in {} and above pages aren't

const Jack = "https://i.imgur.com/0AZ7kEl.png";

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Section />
            <FeaturedImage
              images={[
                Featured1,
                Featured1,
                Featured1,
                Jack,
                Jack,
                Jack,
                Featured1,
                Featured1,
                Featured1,
              ]}
            />
            <About />
            <Inquiry/>
          </>
        ),
      },
      {
        path: "services",
        element: (
          <>
            <div>services</div>
          </>
        ),
      },
      {
        path: "galleries",
        element: <Galleries/>,
      },
      {
        path: "contact",
        element: (
          <>
            <Inquiry/>
          </>
        ),
      },
      {
        path: "manage",
        element: <Manage />,
      },
    ],
  },
]);