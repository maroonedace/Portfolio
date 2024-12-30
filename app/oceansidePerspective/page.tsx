"use client";

import WorkDetail from "../components/workDetail/details";
import WorkDetailLayout from "../components/workDetail/layout";
import Content from "./content";

const OPPage = (): JSX.Element => {
  return (
    <WorkDetailLayout>
      <WorkDetail workTitle="Oceanside Perspective">
        <Content />
      </WorkDetail>
    </WorkDetailLayout>
  );
};

export default OPPage;
