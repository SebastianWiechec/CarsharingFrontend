import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import api, { API_TYPES } from "../actions/api";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Data", width: 130 },
  { field: "carID", headerName: "Car", width: 130 },
  { field: "costID", headerName: "Cost", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export const SpendingsGridList = (props) => {
  const [spendingsList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.request(API_TYPES.SPENDINGS).fetchAll();
      console.log(request.data);

      const updatedJson = request.data.map(
        ({ idSpendings: id, date, carID, costID, price }) => ({
          id,
          date,
          carID,
          costID,
          price,
        })
      );

      setData(updatedJson);
      console.log(request.data);
    };

    fetchData();
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={spendingsList}
        columns={columns}
        pageSize={5}
        checkboxSelection
        id="idSpendings"
      />
    </div>
  );
};
