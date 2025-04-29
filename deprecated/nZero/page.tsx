"use client";

import WorkDetail from "../../app/components/workDetail/details";
import WorkDetailLayout from "../../app/components/workDetail/layout";
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
