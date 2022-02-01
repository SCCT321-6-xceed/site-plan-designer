import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Avatar, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { theme } from "../theme";
import Modal from "@mui/material/Modal";
import MainPlan from "../planComponent/MainPlan";
import LegendCount from "./LegendCount";
import jsPDF from "jspdf";
import "jspdf-autotable";
import image from "../images/image.png";

const ExportNav = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    padding: "50px",
    zIndex: 1000,
    overflow: "auto",
  };

  const [columns, sstColumns] = React.useState([
    {
      name: "Item Description",
      selector: "ItemDescription",
      sortable: true,
    },
    {
      name: "Quantity",
      selector: "Quantity",
      sortable: true,
    },
    {
      name: "Price",
      selector: "Price",
      sortable: true,
    },
    {
      name: "Sum",
      selector: "Sum",
      sortable: true,
    },
  ]);

  const [rows, setRows] = React.useState([
    {
      ItemDescription: "LED down lights",
      Quantity: "50",
      Price: "2",
      Sum: "100.00",
    },
    {
      ItemDescription: "Switch",
      Quantity: "20",
      Price: "10",
      Sum: "200.00",
    },
    {
      ItemDescription: "Power point",
      Quantity: "15",
      Price: "7.5",
      Sum: "112.50",
    },
    {
      ItemDescription: "Light Sensor",
      Quantity: "4",
      Price: "20",
      Sum: "80.00",
    },
    {
      ItemDescription: "Main Switchboard",
      Quantity: "1",
      Price: "50",
      Sum: "50.00",
    },
  ]);
  //modal usestate
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //function that will generate  pdf content
  const download_pdf = () => {
    const doc = new jsPDF();
    const temp_rows = rows.map((d1) =>
      columns
        .slice(0, columns.length - 1)
        .map((d2) => d2.selector)
        .map((d3) => d1[d3])
    ); //slice is used to remove rows

    const columns_data = columns
      .slice(0, columns.length - 1)
      .map((d) => d.name);

    doc.autoTable({
      head: [columns_data],
      body: temp_rows,
    });
    //pass the text to pdf with the x,y coordinates
    doc.text("Invoice", 100, 10, { align: "center" });
    doc.text("Site plan", 100, 105, { align: "center" });
    doc.setFontSize(10);
    doc.text("SubTotal", 110, 70);
    doc.text("542.50", 175, 70);

    doc.text("GST", 110, 80);
    doc.text("10%", 150, 80);
    doc.text("54.24", 178, 80);

    doc.text("Total", 110, 90);
    doc.text("596.75", 175, 90);
    doc.addImage(`${image.toString()}`, "PNG", 15, 110, 180, 100);
    doc.save("Siteplan.pdf");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: theme.palette.secondary.main }}
      >
        <Toolbar>
          <IconButton
            component={Link}
            to="/dashboard"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Site Plan Designer
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            Export
          </Typography>

          <Stack direction="row" spacing={1}>
            <Box sx={{ "& button": { m: 1.5 } }}>
              <div>
                <Button variant="contained">
                  <EditIcon />
                  Edit
                </Button>
                <Button variant="contained" onClick={handleOpen}>
                  <ExitToAppIcon />
                  Export
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Container>
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Export Project
                      </Typography>
                      <div style={{ textAlign: "center" }}>
                        <img
                          src={image}
                          alt="image loading error"
                          width={"80%"}
                        />
                      </div>
                      <Typography>Save as PDF?</Typography>
                      <Button
                        size="medium"
                        variant="contained"
                        onClick={() => download_pdf()}
                        style={{
                          background: theme.palette.primary.main,
                          minWidth: "150px",
                        }}
                      >
                        Save
                      </Button>
                      <Button onClick={handleClose}>Return</Button>
                    </Box>
                  </Container>
                </Modal>
              </div>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Avatar>R</Avatar>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ExportNav;
