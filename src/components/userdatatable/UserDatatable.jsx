import React, { useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../template/userTableTemplate";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./userdatatable.scss";
import UserService from "../../services/UserService";
import MessageBox from "../messageBox/MessageBox";

// const users = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     type: "Người dùng",
//     email: "1snow@gmail.com",
//     phone: "0379265825",
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     type: "Quản trị viên",
//     phone: "0379265825",
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     type: "Quản trị viên",
//     phone: "0379265825",
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     type: "Người dùng",
//     phone: "0379265825",
//   },
// ];

function UserDatatable(props) {
  const [data, setData] = useState();
  const [message, setMessage] = useState({
    type: "",
    title: "",
    content: "",
  });

  const messageRef = useRef();

  useEffect(() => {
    UserService.getUsers()
      .catch((error) => {
        // console.log("Loi loi");
        setMessage({
          type: "error",
          title: "Lỗi",
          content: "Đã có lỗi xảy ra trong quá trình tải dữ liệu",
        });
        messageRef.current.active();
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleDelete = (type, id) => {
    if (type !== "Quản trị viên") {
      setMessage({
        type: "yesno",
        title: "Xác nhận",
        content: "Bạn có muốn xóa người dùng này?",
        yes: () => {
          console.log("Delete");
          UserService.deleteUser(id)
            .then((res) => {
              // if (message.type !== "error")
              setData(data.filter((item) => item.id !== id));
            })
            .catch((error) => {
              setMessage({
                type: "error",
                title: "Lỗi",
                content: "Đã có lỗi xảy ra trong quá trình xóa người dùng",
              });
              messageRef.current.active();
            });
        },
      });
      messageRef.current.active();
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="user__datatable-cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className={`deleteButton ${
                params.row.userType.name === "Quản trị viên" && "deactive"
              }`}
              onClick={() =>
                handleDelete(params.row.userType.name, params.row.id)
              }
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="user__datatable">
      <div className="user__datatable-Title">
        Thêm người dùng
        <Link to="/users/new" className="link">
          Thêm mới +
        </Link>
      </div>
      <DataGrid
        className="user__datatable-datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
      <MessageBox ref={messageRef} item={message} />
    </div>
  );
}

export default UserDatatable;
