import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import CreateButton from "../../../components/common/buttons/CreateButton";

const TemplatesHeader: FC = () => {
  return (
    <div>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search Template ..." />}
        rightContent={<CreateButton>Create Template</CreateButton>}
      />
    </div>
  );
};

export default TemplatesHeader;
