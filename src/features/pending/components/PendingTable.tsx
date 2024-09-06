import { FC } from "react";
import { StyledTable } from "../../sms-logs/style/SmsStyle";
import { columns } from "../columns/pendingColumns";

const staticData = [
  {
    clientName: "John Doe",
    smsHat: "100",
    ulanyjySany: "500",
    ugradyldy: "2022-01-01",
    status: "Pending",
  },
  {
    clientName: "Jane Doe",
    smsHat: "200",
    ulanyjySany: "1000",
    ugradyldy: "2022-02-01",
    status: "Active",
  },
  {
    clientName: "Bob Smith",
    smsHat: "50",
    ulanyjySany: "200",
    ugradyldy: "2022-03-01",
    status: "Inactive",
  },
];

const PendingTable: FC = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <StyledTable columns={columns} dataSource={staticData} />
    </div>
  );
};

export default PendingTable;
