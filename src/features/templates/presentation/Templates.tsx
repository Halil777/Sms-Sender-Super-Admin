import { FC } from "react";
import TemplatesHeader from "../components/TemplatesHeader";
import TemplateTable from "../components/TemplateTable";

const Templates: FC = () => {
  return (
    <div>
      <TemplatesHeader />
      <TemplateTable />
    </div>
  );
};

export default Templates;
