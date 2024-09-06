import { FC } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import { useTranslation } from "react-i18next";
import CreateButton from "../../../components/common/buttons/CreateButton";

const PendingHeader: FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        leftContent={
          <UniversalSearch
            placeholder={`${t("dashboard.pendingMessages")}...`}
          />
        }
        rightContent={<CreateButton>Create Pending </CreateButton>}
      />
    </div>
  );
};

export default PendingHeader;
