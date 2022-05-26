import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
  Snackbar,
  Divider,
  ListItemIcon,
  Button,
} from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import PersistenceService from "../../services/PersistenceService";
import { updateCreationTime } from "../../data/listSlice";
import ValidationErrors from "../ValidationErrors";
import ValidationService from "../../services/ValidationService";
import { useMediaQuery } from "react-responsive";
import { setOpenReleaseNotes } from "../../data/appSlice";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CodeIcon from "@mui/icons-material/Code";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CloudIcon from "@mui/icons-material/Cloud";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DownloadFileIcon from "../icons/DownloadFile";

export default function MainMenu() {
  const army = useSelector((state: RootState) => state.army);
  const list = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();
  const router = useRouter();
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  const [validationAnchorElement, setValidationAnchorElement] = useState(null);
  const [showTextCopiedAlert, setShowTextCopiedAlert] = useState(false);
  const errors = ValidationService.getErrors(army, list);

  const handleLoad = () => {
    router.push("/load");
  };

  const handleDelete = () => {
    const confirmMsg = "Are you sure you want to delete this list?";
    if (confirm(confirmMsg)) {
      PersistenceService.delete(list);
      router.replace("/");
    }
  };

  const handleSave = () => {
    const creationTime = PersistenceService.createSave(army, list.name, list);
    dispatch(updateCreationTime(creationTime));
    return creationTime;
  };

  const handleShare = () => {
    if (!list.creationTime) {
      const creationTime = handleSave();
      PersistenceService.download({
        ...list,
        creationTime,
      });
    } else {
      PersistenceService.download(list);
    }
  };

  const handleShareTTS = () => {
    if (!list.creationTime) {
      const creationTime = handleSave();
      PersistenceService.downloadTTS({
        ...list,
        creationTime,
      });
    } else {
      PersistenceService.downloadTTS(list);
    }
  };

  const handleTextExport = () => {
    PersistenceService.copyAsText(list);
    setShowTextCopiedAlert(true);
  };

  const navigateToListConfig = () => {
    router.push({ pathname: "/listConfiguration", query: { ...router.query, edit: true } });
  };

  const openOprWebapp = () => {
    window.open("https://webapp.onepagerules.com", "_blank");
  };

  const goBack = () => {
    const confirmMsg = "Going back will leave your current list and go back home. Continue?";
    if (list.creationTime || confirm(confirmMsg)) {
      //router.back();
      router.replace("/");
    }
  };

  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      <AppBar elevation={0} style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Toolbar className="p-0">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={goBack}
            style={{ marginLeft: "0" }}
            className="mr-4"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {list.name}
          </Typography>
          {errors.length > 0 && (
            <>
              <IconButton
                size="large"
                color="inherit"
                title="Validation warnings"
                style={{
                  backgroundColor: Boolean(validationAnchorElement) ? "#6EAAE7" : null,
                }}
                onClick={(e) => setValidationAnchorElement(e.currentTarget)}
                className="mr-2 p-2"
              >
                <NotificationImportantIcon />
              </IconButton>
              <Popper
                placement="bottom-end"
                anchorEl={validationAnchorElement}
                open={Boolean(validationAnchorElement) && isBigScreen}
                // onClose={_ => setValidationAnchorElement(null)}
              >
                <ClickAwayListener onClickAway={(_) => setValidationAnchorElement(null)}>
                  <Paper>
                    <List>
                      <ListItem divider>
                        <ListItemText>
                          <span style={{ fontWeight: 600 }}>Competitive List Validation</span>
                        </ListItemText>
                      </ListItem>
                      {errors.map((error, index) => (
                        <ListItem
                          key={index}
                          className="mx-4 Ppx-0"
                          style={{ width: "auto" }}
                          divider={index < errors.length - 1}
                        >
                          <ListItemText>{error}</ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </ClickAwayListener>
              </Popper>
            </>
          )}
          {isBigScreen && (
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              title="View list"
              onClick={() => router.push("/view")}
              className="mr-2"
            >
              <VisibilityIcon />
            </IconButton>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(e) => setMenuAnchorElement(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={menuAnchorElement}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(menuAnchorElement)}
            onClose={(_) => setMenuAnchorElement(null)}
          >
            <MenuItem onClick={navigateToListConfig}>
              <ListItemIcon>
                <EditOutlinedIcon sx={{ color: "#9E9E9E" }} />
              </ListItemIcon>
              <ListItemText>Edit Details</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => router.push("/view")}>
              <ListItemIcon>
                <DashboardOutlinedIcon sx={{ color: "#9E9E9E" }} />
              </ListItemIcon>
              <ListItemText>View Cards</ListItemText>
            </MenuItem>
            {!list.creationTime && <MenuItem onClick={handleSave}>Save</MenuItem>}
            {list.creationTime && (
              <MenuItem onClick={handleDelete}>
                <ListItemIcon>
                  <DeleteOutlinedIcon sx={{ color: "#9E9E9E" }} />
                </ListItemIcon>
                <ListItemText>Delete List</ListItemText>
              </MenuItem>
            )}
            <MenuItem onClick={handleLoad}>
              <ListItemIcon>
                <FolderOpenIcon sx={{ color: "#9E9E9E" }} />
              </ListItemIcon>
              <ListItemText>Open a List</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleShare}>
              <ListItemIcon>
                <DownloadFileIcon />
              </ListItemIcon>
              <ListItemText>Export as Army Forge File</ListItemText>
            </MenuItem>
            {<MenuItem onClick={handleShareTTS}>Export as TTS File</MenuItem>}
            <MenuItem onClick={handleTextExport}>
              <ListItemIcon>
                <AssignmentOutlinedIcon sx={{ color: "#9E9E9E" }} />
              </ListItemIcon>
              <ListItemText>Export as Text</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={openOprWebapp}>Open OPR Webapp</MenuItem>
            <MenuItem onClick={() => dispatch(setOpenReleaseNotes(true))}>
              See Release Notes
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <ValidationErrors
        open={Boolean(validationAnchorElement) && !isBigScreen}
        setOpen={setValidationAnchorElement}
      />
      <Snackbar
        open={showTextCopiedAlert}
        onClose={() => setShowTextCopiedAlert(false)}
        message="Army list copied to your clipboard."
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={4000}
      />
    </>
  );
}
