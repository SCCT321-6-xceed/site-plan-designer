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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                        Export Summary
                      </Typography>
                      <MainPlan />
                      <Typography>LOREM IP SMSAF DIASOD ASJD ASKDAS</Typography>
                      <Button
                        size="medium"
                        variant="contained"
                        style={{
                          background: theme.palette.primary.main,
                          minWidth: "150px",
                        }}
                      >
                        Save
                      </Button>
                      <Button>Return</Button>
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
