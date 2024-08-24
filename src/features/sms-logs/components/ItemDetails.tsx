import { FC } from "react";
import styled from "styled-components";
import { Table } from "antd";
import { FaArrowLeft } from "react-icons/fa";

// Styled container for details and table
const DetailsContainer = styled.div`
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  background-color: #ffffff;

  .ant-table-tbody > tr {
    background-color: #ffffff;
  }

  .ant-table-tbody > tr.status-Sending {
    background-color: white; // Light orange
  }

  .ant-table-tbody > tr.status-Canceled {
    background-color: #ff9f9f; // Light red
  }

  .ant-table-tbody > tr.status-Done {
    background-color: white; // Light green
  }

  .ant-table-tbody > tr.status-Errored {
    background-color: #fab246; // Light red
  }

  .back-icon {
    font-size: 14px;
    color: #6c5dd3;
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
`;

const ItemDetails: FC = () => {
  // Define static data for the item
  const item = {
    name: "User A",
    todaySmsCount: 10,
    totalSmsCount: 150,
    dangerCount: 2,
    status: "Success",
    successCount: 145,
    errorCount: 5,
    tableData: [
      {
        sms: "SMS 1",
        sentTime: "2024-08-23 10:00",
        userCount: 5,
        deliveredCount: 4,
        status: "Sending",
      },
      {
        sms: "SMS 2",
        sentTime: "2024-08-23 11:00",
        userCount: 3,
        deliveredCount: 3,
        status: "Done",
      },
      {
        sms: "SMS 3",
        sentTime: "2024-08-23 12:00",
        userCount: 2,
        deliveredCount: 1,
        status: "Errored",
      },
      {
        sms: "SMS 4",
        sentTime: "2024-08-23 13:00",
        userCount: 4,
        deliveredCount: 2,
        status: "Canceled",
      },
    ],
  };

  // Define table columns
  const columns = [
    { title: "Sms", dataIndex: "sms", key: "sms" },
    { title: "Ugradylan wagty", dataIndex: "sentTime", key: "sentTime" },
    {
      title: "Ugradylan ulanyjy sany",
      dataIndex: "userCount",
      key: "userCount",
    },
    {
      title: "Delivered count",
      dataIndex: "deliveredCount",
      key: "deliveredCount",
    },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  return (
    <DetailsContainer>
      <FaArrowLeft
        className="back-icon"
        onClick={() => console.log("Back to List")}
      />

      {/* Table displaying detailed information */}
      <Table
        dataSource={item.tableData}
        columns={columns}
        pagination={false}
        rowClassName={(record) => `status-${record.status}`}
      />
    </DetailsContainer>
  );
};

export default ItemDetails;
