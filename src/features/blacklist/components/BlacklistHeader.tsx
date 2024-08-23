import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import BlacklistCreate from "./BlacklistCreate";

const BlacklistHeader: FC = () => {
  return (
    <div>
      <PageHeader
        leftContent={
          <UniversalSearch placeholder="Search Blacklist words ..." />
        }
        rightContent={<BlacklistCreate />}
      />
    </div>
  );
};

export default BlacklistHeader;
