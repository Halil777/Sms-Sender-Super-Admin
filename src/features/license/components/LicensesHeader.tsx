import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import CreateButton from "../../../components/common/buttons/CreateButton";

const LicensesHeader: FC = () => {
  return (
    <div>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search Licenses..." />}
        rightContent={<CreateButton>Create New Licenses</CreateButton>}
      />
    </div>
  );
};

export default LicensesHeader;
