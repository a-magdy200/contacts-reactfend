import {Button, Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import {VisibilityOutlined, VisibilityOffOutlined} from '@material-ui/icons';
import React from "react";
import PropTypes from 'prop-types';
import {pink} from "@material-ui/core/colors";
const UserData = ({user, toggleShowGamesPlayed}) => {
  return (
    <Card style={{width: '100%'}}>
      <CardHeader title={`${user.firstname} ${user.lastname}`} style={{textTransform: 'capitalize', paddingBottom: 0}}/>
      <CardContent style={{paddingTop: 0}}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center">
            {
              user.showGamesPlayed ? (
                <p>
                    <strong>{user.username}</strong> has played: {user.gamesPlayed} Games
                </p>
              )
              :
              (
                <p>You can't see number of games played by <strong>{user.username}</strong></p>
              )
            }
          <Button variant={"contained"}  onClick={() =>toggleShowGamesPlayed(user.username)} color={"default"}>
            {user.showGamesPlayed ? (
              <Grid container justify={'space-between'} alignItems={'center'}>
                <VisibilityOffOutlined color={"primary"} />
                <span style={{marginLeft: 10}}>
                  Hide games played
                </span>
              </Grid>
              ) : (
                <Grid container justify={'space-between'} alignItems={'center'}>
                  <VisibilityOutlined color={"primary"} />
                  <span style={{marginLeft: 10}}>
                      Show games played
                    </span>
                </Grid>
              )
            }
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
};
UserData.prototype = {
  user: PropTypes.object.isRequired,
  toggleShowGamesPlayed: PropTypes.func.isRequired
}
export default UserData;
