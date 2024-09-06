import { DeleteButton, SendButton } from "../style/pendingStyle";

export const columns = [
  {
    title: "Client name",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "SMS Hat",
    dataIndex: "smsHat",
    key: "smsHat",
  },
  {
    title: "Ulanyjy sany",
    dataIndex: "ulanyjySany",
    key: "ulanyjySany",
  },
  {
    title: "Ugradyldy",
    dataIndex: "ugradyldy",
    key: "ugradyldy",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center" as "left" | "right" | "center",
    render: () => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <SendButton onClick={() => alert("clicked to send button")}>
          Send
        </SendButton>
        <DeleteButton onClick={() => alert("clicked to delete button")}>
          Delete
        </DeleteButton>
      </div>
    ),
  },
];
