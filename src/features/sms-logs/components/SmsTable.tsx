import { FC } from "react";
import { StyledTable, TableContainer } from "../style/SmsStyle";

interface SmsTableProps {
  onRowClick: (item: any) => void;
}

const SmsTable: FC<SmsTableProps> = ({ onRowClick }) => {
  const columns = [
    { title: "Ady", dataIndex: "name", key: "name" },
    {
      title: "Şu günki SMS sany",
      dataIndex: "todaySmsCount",
      key: "todaySmsCount",
    },
    {
      title: "Umumy SMS sany",
      dataIndex: "totalSmsCount",
      key: "totalSmsCount",
    },
    { title: "Danger count", dataIndex: "dangerCount", key: "dangerCount" },
    {
      title: "Status boýunça",
      dataIndex: "status",
      key: "status",
      render: (text: string, record: any) => (
        <div id={text}>
          <span>{record.status}: </span>
          <span>
            {record.status === "Success"
              ? record.successCount
              : record.errorCount}
          </span>
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "User A",
      todaySmsCount: 10,
      totalSmsCount: 150,
      dangerCount: 2,
      status: "Success",
      successCount: 145,
      errorCount: 5,
    },
    {
      key: "2",
      name: "User B",
      todaySmsCount: 5,
      totalSmsCount: 80,
      dangerCount: 1,
      status: "Error",
      successCount: 70,
      errorCount: 10,
    },
  ];

  return (
    <TableContainer>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
      />
    </TableContainer>
  );
};

export default SmsTable;
