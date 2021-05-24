import React, { useState, useEffect, useContext } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useGlobalStyles from "../../styles/globalStyles";
import useStyles from "./styles";
import { TextField } from "@material-ui/core";
import { BoardContext } from "../../Context";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();

function BoardComboBox() {
  // Themes
  const theme = globalThemes;
  const classes = useGlobalStyles();
  const componentClasses = useStyles();

  const { currentBoard, setCurrentBoard } = useContext(BoardContext);

  useEffect(() => {}, []);

  function handleChange(event, newBoard) {
    if (typeof newBoard === "string") {
      setCurrentBoard(newBoard);
    } else if (newBoard && newBoard.inputValue) {
      // Create a new value from the user input
      setCurrentBoard(newBoard.inputValue);
    } else {
      setCurrentBoard(newBoard);
    }
  }

  return (
    <Autocomplete
      value={currentBoard} // set the valeu of the existing
      onChange={handleChange}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== "") {
          filtered.push(
            params.inputValue
            // title: `Add "${params.inputValue}"`,
          );
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="board-combo-box"
      options={boards} // options to submit as a prop
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option} // options to render in the drop down
      style={{ width: 300 }}
      // freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Select board" variant="outlined" />
      )}
    />
  );
}

// boards to select from
const boards = ["General", "Board 1", "Board 2"];

export default BoardComboBox;
