import { FC } from "react";
import LicensesHeader from "../components/LicensesHeader";
import LicensesTable from "../components/LicensesTable";

const Licenses: FC = () => {
  return (
    <div>
      <LicensesHeader />
      <LicensesTable />
    </div>
  );
};

export default Licenses;
