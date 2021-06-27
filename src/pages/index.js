// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A church in the northwest of Iceland"
        src="../images/church.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
