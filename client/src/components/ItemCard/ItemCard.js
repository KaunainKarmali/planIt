import React, { useState } from "react";
import globalThemes from "../../styles/globalThemes.js";
import useStyles from "./styles";
import {
  ThemeProvider,
  Card,
  Typography,
  Divider,
  Grid,
  Avatar,
  IconButton,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { CreateNewItem } from "../../components";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TimerIcon from "@material-ui/icons/Timer";
import { formatNameToInitials, dateReformat } from "../../services/utils";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import { CloseConfirmationDialog } from "../../components";

export default function ItemCard(props) {
  const theme = globalThemes;
  const componentClasses = useStyles();

  const { item, toggleTimer } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleEditMenu, setToggleEditMenu] = useState(false);

  function handleClick() {
    toggleTimer(item);
  }

  return (
    <ThemeProvider theme={theme}>
      <Card className={componentClasses.container}>
        {/* Task name */}
        <Grid
          container
          display="flex"
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          wrap="nowrap"
          className={componentClasses.titleContainer}
        >
          <Grid
            container
            display="flex"
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <Grid item>
              <Typography variant="h6" component="h3">
                {`${item.itemName}`}
              </Typography>
            </Grid>

            <Grid item>
              <IconButton
                color="primary"
                aria-label="edit"
                className={componentClasses.iconButton}
                onClick={() => setToggleEditMenu(true)}
              >
                <EditIcon className={componentClasses.optionsIcon} />
              </IconButton>
              <CreateNewItem
                open={toggleEditMenu}
                setOpen={setToggleEditMenu}
                item={item}
                edit={true}
              />
            </Grid>

            <Grid item>
              <IconButton
                color="primary"
                aria-label="delete"
                className={componentClasses.iconButton}
                onClick={() => setToggleMenu(true)}
              >
                <CloseIcon className={componentClasses.optionsIcon} />
              </IconButton>
              <CloseConfirmationDialog
                open={toggleMenu}
                setOpen={setToggleMenu}
                itemId={item._id}
                itemName={item.itemName}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          display="flex"
          direction="row"
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid
            container
            display="flex"
            direction="row"
            justify="flex-start"
            alignItems="center"
            wrap="nowrap"
          >
            {/* Task due date */}
            <Grid item>
              <DateRangeIcon className={componentClasses.calendarIcon} />
            </Grid>
            <Grid item>
              <Typography variant="caption" component="p">
                &nbsp;
                {item.itemDueDate && `${dateReformat(item.itemDueDate)}`}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <AvatarGroup max={5}>
              {/* Render assigned person's avatar */}
              {item && item.itemAssignedTo !== undefined && (
                <Avatar
                  key={item._id}
                  id={item._id}
                  alt={`${item.itemAssignedTo}`}
                  className={componentClasses.avatar}
                >{`${formatNameToInitials(item.itemAssignedTo)}`}</Avatar>
              )}
            </AvatarGroup>
          </Grid>

          <Grid item>
            <Divider
              light
              orientation="vertical"
              style={{
                backgroundColor: "#5a939f",
                height: "25px",
                margin: "0 10px",
                width: "1px",
              }}
            />
          </Grid>

          <Grid item>
            {/* Timer button */}
            <IconButton
              aria-label="more-options"
              className={componentClasses.timerIconButton}
              onClick={handleClick}
            >
              <TimerIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
}
