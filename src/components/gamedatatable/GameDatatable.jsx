import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { gameColumns } from "../../template/gameTableTemplate";
import "./gamedatatable.scss";
import MessageBox from "../../components/messageBox/MessageBox";
import GameService from "../../services/GameService";

// const games = [
//   {
//     id: 1,
//     name: "Far cry 6",
//     publisher: "Ubisoft",
//     supplier: "HaDoan Tv",
//     price: "800.000",
//     quantity: "110",
//     type: "Hành động, bắn súng, góc nhìn thứ nhất",
//     date: "1/1/2014",
//   },
//   {
//     id: 2,
//     name: "Far cry 6",
//     publisher: "Ubisoft",
//     supplier: "HaDoan Tv",
//     price: "800.000",
//     quantity: "110",
//     type: "Hành động, bắn súng, góc nhìn thứ nhất",
//     date: "1/1/2014",
//   },
//   {
//     id: 3,
//     name: "Far cry 6",
//     publisher: "Ubisoft",
//     supplier: "HaDoan Tv",
//     price: "800.000",
//     quantity: "110",
//     type: "Hành động, bắn súng, góc nhìn thứ nhất",
//     date: "1/1/2014",
//   },
// ];

function GameDatatable(props) {
  const [data, setData] = useState();
  const [message, setMessage] = useState({
    type: "",
    title: "",
    content: "",
  });
  const messageRef = useRef();

  useEffect(() => {
    GameService.getGames()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        // console.log("Loi loi");
        setMessage({
          type: "error",
          title: "Lỗi",
          content: "Đã có lỗi xảy ra trong quá trình tải dữ liệu",
        });
        messageRef.current.active();
      });
    console.log(data);
  }, []);

  const handleDelete = (id) => {
    setMessage({
      type: "yesno",
      title: "Xác nhận",
      content: "Bạn có muốn xóa game này?",
      yes: () => {
        GameService.deleteGame(id)
          .then((res) => {
            setData(data.filter((item) => item.id !== id));
          })
          .catch((error) => {
            setMessage({
              type: "error",
              title: "Lỗi",
              content: "Đã có lỗi xảy ra trong quá trình xóa",
            });
            messageRef.current.active();
          });
      },
    });
    messageRef.current.active();
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="game__datatable-cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="game__datatable">
      <div className="game__datatable-Title">
        Thêm đĩa game
        <Link to="newgame" className="link">
          Thêm mới +
        </Link>
      </div>
      <DataGrid
        className="game__datatable-datagrid"
        rows={data}
        columns={gameColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
      <MessageBox item={message} ref={messageRef} />
    </div>
  );
}

export default GameDatatable;
