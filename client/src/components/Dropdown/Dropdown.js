import React, { useState, useEffect, useContext } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles";
import useStyles from "./styles";
import { Button, Menu, MenuItem, Popover } from "@material-ui/core";
import { BoardContext } from "../../Context";

function Dropdown() {
  // Themes
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { currentBoard, setCurrentBoard } = useContext(BoardContext);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    // set default board to General on initial load
    currentBoard === null && setCurrentBoard("General");
  }, []);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handlePopoverClose(event) {
    setAnchorEl(null);
  }

  function handleClose(event) {
    const boardSelected = event.target.innerText;
    setCurrentBoard(boardSelected === "" ? currentBoard : boardSelected);
    setAnchorEl(null);
  }

  return (
    <>
      <Button
        onClick={handleClick}
        onMouseEnter={handlePopoverOpen}
        onMouseExit={handlePopoverClose}
        size="large"
        color="secondary"
        variant="contained"
        style={{ width: "200px", color: "white" }}
        anchorEl={anchorEl}
      >
        {currentBoard}
      </Button>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Board 1</MenuItem>
        <MenuItem onClick={handleClose}>Board 2</MenuItem>
        <MenuItem onClick={handleClose}>General</MenuItem>
      </Popover>
    </>
  );
}

export default Dropdown;
