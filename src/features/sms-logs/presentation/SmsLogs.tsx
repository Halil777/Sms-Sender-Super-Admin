import { FC, useState } from "react";
import SmsHeader from "../components/SmsHeader";
import SmsTable from "../components/SmsTable";
import ItemDetails from "../components/ItemDetails";

const SmsLogs: FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleRowClick = (item: any) => {
    setSelectedItem(item);
  };

  // const handleBack = () => {
  //   setSelectedItem(null);
  // };

  return (
    <div>
      <SmsHeader />
      {selectedItem ? (
        <ItemDetails />
      ) : (
        <SmsTable onRowClick={handleRowClick} />
      )}
    </div>
  );
};

export default SmsLogs;
