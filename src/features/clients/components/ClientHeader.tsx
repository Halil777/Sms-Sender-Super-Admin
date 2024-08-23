import { FC, useState } from "react";
import PageHeader from "../../../components/common/page-header/PageHeader";
import UniversalSearch from "../../../components/common/search/UniversalSearch";
import CreateButton from "../../../components/common/buttons/CreateButton";
import CreateClient from "./CreateClient";

const ClientHeader: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Handle form submission or other actions here
  };

  return (
    <div>
      <PageHeader
        leftContent={<UniversalSearch placeholder="Search here ..." />}
        rightContent={
          <CreateButton onClick={showModal}>Create new one</CreateButton>
        }
      />
      <CreateClient
        visible={isModalVisible}
        onCancel={handleCancel}
        onAdd={handleOk}
      />
    </div>
  );
};

export default ClientHeader;
