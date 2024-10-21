import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import BlacklistCreate from "./BlacklistCreate";
import { mutate } from "swr";

const BlacklistHeader: FC = () => {
  const refreshData = () => {
    mutate("http://localhost:3000/banned-words"); // Re-fetch the data
  };
  return (
    <div>
      <PageHeader
        leftContent={
          <UniversalSearch placeholder="Search Blacklist words ..." />
        }
        rightContent={<BlacklistCreate refreshData={refreshData} />}
      />
    </div>
  );
};

export default BlacklistHeader;
