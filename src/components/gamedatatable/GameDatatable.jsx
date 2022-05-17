import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { gameColumns } from "../../template/gameTableTemplate";
import "./gamedatatable.scss";
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

  useEffect(() => {
    GameService.getGames().then((res) => {
      setData(res.data);
    });
    console.log(data);
  }, []);

  const handleDelete = (type, id) => {
    setData(data.filter((item) => item.id !== id));
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
              onClick={() => handleDelete(params.row.type, params.row.id)}
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
    </div>
  );
}

export default GameDatatable;
