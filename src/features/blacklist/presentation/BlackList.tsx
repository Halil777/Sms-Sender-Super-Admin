import { FC } from "react";
import BlacklistHeader from "../components/BlacklistHeader";
import BlacklistTable from "../components/BlacklistTable";

const BlackList: FC = () => {
  return (
    <div>
      <BlacklistHeader />
      <BlacklistTable />
    </div>
  );
};

export default BlackList;
