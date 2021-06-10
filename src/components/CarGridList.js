import React, { useState, useEffect } from "react";
import api, { API_TYPES } from "../actions/api";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "manuf", headerName: "Manufacturer", width: 130 },
  { field: "model1", headerName: "Model", width: 110 },
  { field: "color1", headerName: "Color", width: 110 },
  { field: "yofProd1", headerName: "Year of Prod.", width: 130 },
  { field: "kilometers1", headerName: "Km", width: 130 },
  { field: "priceDay1", headerName: "Price per day", width: 130 },
  { field: "isAvailable1", headerName: "Avaialability", width: 70 },
  { field: "insurance1", headerName: "Insurance to", width: 120 },
  { field: "segment1", headerName: "Segment", width: 70 },
  { field: "regNumbers1", headerName: "Registration number", width: 130 },
  { field: "filePath1", headerName: "Link to Photo", width: 130 },
  { field: "techRev1", headerName: "Technical reviev to", width: 120 },
];

export const CarGridList = () => {
  const [carList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.request(API_TYPES.CAR).fetchAll();
      console.log(request.data);

      const updatedJson = request.data.map(
        ({
          idCar: id,
          manufacturer: manuf,
          model: model1,
          color: color1,
          yofProd: yofProd1,
          kilometers: kilometers1,
          priceDay: priceDay1,
          isAvailable: isAvailable1,
          insurance: insurance1,
          segment: segment1,
          regNumbers: regNumbers1,
          filePath: filePath1,
          techRev: techRev1,
        }) => ({
          id,
          manuf,
          model1,
          color1,
          yofProd1,
          kilometers1,
          priceDay1,
          isAvailable1,
          insurance1,
          segment1,
          regNumbers1,
          filePath1,
          techRev1,
        })
      );

      setData(updatedJson);
      console.log(request.data);
    };

    fetchData();
  }, []);
  return (
    <Container maxWidth="lg">
      <div style={{ height: 600, marginTop: 80 }}>
        <DataGrid
          rows={carList}
          columns={columns}
          pageSize={10}
          checkboxSelection
          id="idCar"
        />
      </div>
      <Typography paragraph></Typography>
      <Button variant="contained" color="primary" href="/">
        Strona główna
      </Button>
    </Container>
  );
};
