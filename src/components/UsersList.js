import {Button, Box, Grid, List, ListItem} from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';
import UserData from "./UserData";
import _ from 'lodash';
const UsersList = ({
   addUser,
   users,
   toggleShowGamesPlayed
}) => {
  return (
    <Box m={2} px={5}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <h2>Users List</h2>
        <Button disableElevation onClick={addUser} variant="contained" color="primary">Add User</Button>
      </Grid>
      <List>
        {_.keys(users).map((username) => (
          <ListItem key={username}>
            <UserData user={users[username]} toggleShowGamesPlayed={toggleShowGamesPlayed} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
UsersList.prototype = {
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  toggleShowGamesPlayed: PropTypes.func.isRequired
}
export default UsersList;
