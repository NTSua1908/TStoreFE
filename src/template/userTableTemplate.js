export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "Tên người dùng",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="user__datatable-cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 180,
  },
  {
    field: "type",
    headerName: "Loại người dùng",
    width: 180,
    renderCell: (params) => {
      return (
        <div
          className={`user__datatable-cellWithType ${
            params.row.type === "Người dùng" ? "user" : "admin"
          }`}
        >
          {params.row.type}
        </div>
      );
    },
  },
];
