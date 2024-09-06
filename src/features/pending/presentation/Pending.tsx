import { FC } from "react";
import PendingHeader from "../components/PendingHeader";
import PendingTable from "../components/PendingTable";

const Pending: FC = () => {
  return (
    <div>
      <PendingHeader />
      <PendingTable />
    </div>
  );
};

export default Pending;
