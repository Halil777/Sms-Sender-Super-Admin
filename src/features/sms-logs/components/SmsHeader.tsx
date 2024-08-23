import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import SmsFilter from "./SmsFilter";

const SmsHeader: FC = () => {
  return (
    <div>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search sms-logs..." />}
        rightContent={<SmsFilter />}
      />
    </div>
  );
};

export default SmsHeader;
