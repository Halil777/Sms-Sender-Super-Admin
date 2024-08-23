import { FC } from "react";
import ClientHeader from "../components/ClientHeader";
import ClientTable from "../components/ClientTable";

const Clients: FC = () => {
  return (
    <>
      <ClientHeader />
      <ClientTable />
    </>
  );
};

export default Clients;
