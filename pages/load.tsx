import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Paper,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import _ from "lodash";
import { Delete } from "@mui/icons-material";
import PersistenceService from "../services/PersistenceService";
import { ISaveData } from "../data/interfaces";
import ArmyImage from "../views/components/ArmyImage";
import { store } from "../data/store";
import { MenuBar } from "../views/components/MenuBar";
import { tryBack } from "../services/Helpers";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

export default function Load() {
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();
  const [localSaves, setLocalSaves] = useState([]);
  const [forceLoad, setForceLoad] = useState(1);
  const [loading, setLoading] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const getSaves = () => Object.keys(localStorage).filter((k) => k.startsWith("AF_Save"));
    for (let save of getSaves()) {
      if (localStorage.getItem(save).indexOf('"listPoints":0') >= 0) delete localStorage[save];
    }

    setLocalSaves(getSaves());
  }, [forceLoad]);

  const importFile = () => {
    var fileInput = document.getElementById("file-input");
    fileInput.dispatchEvent(new MouseEvent("click"));
    //const fileSystemHandles = window.showOpenFilePicker();
    //console.log(fileSystemHandles);
  };

  const loadSave = (save: ISaveData) => {
    setLoading(true);
    PersistenceService.load(dispatch, save, (armyData) => {
      router.push({
        pathname: "/list",
        query: { listId: save.list.creationTime },
      });
      setLoading(false);
    });
  };

  const deleteSave = (save) => {
    if (confirm(`Are you sure you want to delete ${save.list.name}?`)) {
      PersistenceService.delete(save.list);
      setForceLoad(forceLoad + 1);
      setLocalSaves([]);
      setDeleteMode(false);
    }
  };

  const toggleFavourite = (save) => {
    PersistenceService.toggleFavourite(save);
    setForceLoad(forceLoad + 1);
    setLocalSaves([]);
  };

  const readSingleFile = (e) => {
    var file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const reader = new FileReader();

    reader.onload = function (event) {
      try {
        const json: string = event.target.result as string;
        const saveData: ISaveData = JSON.parse(json);

        PersistenceService.load(dispatch, saveData, (_) => {
          router.push("/list");
          // Save to local
          const saveName = file.name.replace(".json", "");
          // if it doesn't exist, or user confirms they are happy to overwrite
          if (
            !PersistenceService.checkExists(saveData.list) ||
            confirm(
              "It looks like this list already exists. Are you sure you'd like to overwrite it?"
            )
          ) {
            PersistenceService.saveImport(saveName, json);
          }

          setLoading(false);
        });
      } catch (e) {
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  const parsedSaves = localSaves.map((key) => JSON.parse(localStorage[key]));

  const SaveList = ({ saves }) => {
    return (
      <Paper square elevation={0}>
        <List>
          {_.sortBy(saves, (save) => save.modified)
            .reverse()
            .map((save) => {
              try {
                const modified = new Date(save.modified);
                const time = modified.getHours() + ":" + modified.getMinutes();
                const points = save.listPoints;
                const title = (
                  <>
                    <span style={{ fontWeight: 600 }}>
                      {save.gameSystem?.toUpperCase()} - {save.list.name}
                    </span>
                    <span style={{ color: "#656565" }}> • {points}pts</span>
                  </>
                );

                const favouriteButton = (
                  <IconButton onClick={() => toggleFavourite(save)}>
                    {save.favourite ? <StarIcon /> : <StarOutlineIcon />}
                  </IconButton>
                );

                const deleteButton = (
                  <IconButton onClick={() => deleteSave(save)}>
                    <Delete />
                  </IconButton>
                );

                return (
                  <ListItem
                    key={save.list.creationTime}
                    disablePadding
                    secondaryAction={deleteMode ? deleteButton : favouriteButton}
                  >
                    <ListItemButton onClick={() => loadSave(save)}>
                      <ListItemAvatar>
                        <ArmyImage
                          image={save.coverImagePath}
                          name={save.armyFaction || save.armyName}
                          armyData={{ gameSystem: save.gameSystem }}
                          size={"32px"}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        className={"ml-2" + (save.saveVersion >= 2 ? "" : " has-text-danger")}
                        primary={title}
                        secondary={
                          save.saveVersion >= 2
                            ? "Modified " + modified.toLocaleDateString() + " " + time
                            : "Outdated save format!"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                );
              } catch (e) {
                console.error(e);
              }
            })}
        </List>
      </Paper>
    );
  };

  const deleteModeButton = (
    <IconButton color="inherit" onClick={() => setDeleteMode((x) => !x)}>
      <Delete />
    </IconButton>
  );

  return (
    <>
      <MenuBar
        title="Open a List"
        onBackClick={() => tryBack(() => router.replace("/"))}
        right={deleteModeButton}
      />
      <div className="container">
        <input type="file" id="file-input" style={{ display: "none" }} onChange={readSingleFile} />
        <div className="mx-auto" style={{ maxWidth: "480px" }}>
          <div className="is-flex is-justify-content-center p-4 my-4">
            <Button variant="contained" color="primary" onClick={() => importFile()}>
              <FileUploadOutlinedIcon /> <span className="ml-2">Upload Army Forge File</span>
            </Button>
          </div>
          {loading && (
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <CircularProgress />
              <p>Loading army data...</p>
            </div>
          )}
          <p className="px-4 mb-2" style={{ fontWeight: 600 }}>
            Favourite Lists
          </p>
          <SaveList saves={parsedSaves.filter((s) => s.favourite)} />
          <p className="px-4 my-2" style={{ fontWeight: 600 }}>
            Saved Lists
          </p>
          <SaveList saves={parsedSaves.filter((s) => !s.favourite)} />
        </div>
      </div>
    </>
  );
}
