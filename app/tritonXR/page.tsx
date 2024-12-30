"use client";

import WorkDetail from "../components/workDetail/details";
import WorkDetailLayout from "../components/workDetail/layout";
import Content from "./content";

const TritonXRPage = (): JSX.Element => {
  return (
    <WorkDetailLayout>
      <WorkDetail workTitle="TritonXR">
        <Content />
      </WorkDetail>
    </WorkDetailLayout>
  );
};

export default TritonXRPage;
