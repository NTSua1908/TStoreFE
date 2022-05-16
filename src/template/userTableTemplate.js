export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "Tên người dùng",
    width: 360,
    renderCell: (params) => {
      return (
        <div className="user__datatable-cellWithImg">
          <img className="cellImg" src={params.row.avatar} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 280,
  },
  {
    field: "type",
    headerName: "Loại người dùng",
    width: 180,
    renderCell: (params) => {
      return (
        <div
          className={`user__datatable-cellWithType ${
            params.row.userType.name === "Người dùng" ? "user" : "admin"
          }`}
        >
          {params.row.userType.name}
        </div>
      );
    },
  },
];
