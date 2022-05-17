import { spacing } from "@mui/system";

export const gameColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Tên game",
    width: 230,
  },
  {
    field: "publisher",
    headerName: "Nhà phát hành",
    width: 180,
  },

  {
    field: "provider",
    headerName: "Nhà cung cấp",
    width: 180,
    renderCell: (params) => {
      return <div>{params.row.provider.name}</div>;
    },
  },
  {
    field: "price",
    headerName: "Giá",
    width: 100,
  },
  {
    field: "quantity",
    headerName: "Số lượng",
    width: 120,
  },
  {
    field: "type",
    headerName: "Thể loại",
    width: 300,
    renderCell: (params) => {
      return (
        <div>
          {params.row.types.map((item, index) => (
            <span key={index}>
              <span>{item.name}</span>
              {index != params.row.types.length - 1 && <span>{",  "}</span>}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    field: "releaseDate",
    headerName: "Ngày phát hành ",
    width: 180,
  },
];
