"use client";

import WorkDetail from "../components/workDetail/details";
import WorkDetailLayout from "../components/workDetail/layout";
import Content from "./content";

const NZeroPage = (): JSX.Element => {
  return (
    <WorkDetailLayout>
      <WorkDetail workTitle="NZero">
        <Content />
      </WorkDetail>
    </WorkDetailLayout>
  );
};

export default NZeroPage;
