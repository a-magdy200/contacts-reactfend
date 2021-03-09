import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Button, Container, Grid} from "@material-ui/core";
class AddUserForm extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
  }
  state = {
    firstname: '',
    lastname: '',
    username: '',
    usernameError: false
  }
  updateInput = (key, value) => {
    this.setState({
      [key]: value
    });
  }
  checkUsername = (username) => {
    let {users} = this.props;
    let usernameError = _.has(users, username);
    console.log(usernameError);
    console.log(username);

    this.setState({
      username,
      usernameError
    })
  }
  submitUser = (e) => {
    e.preventDefault();
    let {usernameError, ...userData} = this.state;
    this.props.onSubmit(userData);
  }
  disableSubmit = () => {
    let {username, usernameError, firstname, lastname} = this.state;
    return (
      username === '' ||
        firstname === '' ||
        lastname === '' ||
        usernameError
    );
  }
  render() {
    return (
      <form>
        <Container>
          <Grid
            container
            justify={'center'}
            alignItems={'center'}
            direction={'column'}
          >
            <TextField
              onChange={event => this.updateInput('firstname', event.target.value)}
              fullWidth
              margin={"normal"}
              id="firstname-field"
              label="First Name"
              variant="outlined"
            />
            <TextField
              onChange={event => this.updateInput('lastname', event.target.value)}
              fullWidth
              margin={"normal"}
              id="lastname-field"
              label="Last Name"
              variant="outlined"/>
            <TextField
              onChange={event => this.checkUsername(event.target.value)}
              error={this.state.usernameError}
              helperText={this.state.usernameError && "Username already exists."}
              fullWidth
              margin={"normal"}
              id="username-field"
              label="Username"
              variant="outlined"/>
              <Grid container justify={'center'} alignItems={'center'}>
                <Button
                  variant={"contained"}
                  disableElevation
                  onClick={this.props.onCancel}>Cancel</Button>
                <Button
                  disabled={this.disableSubmit()}
                  style={{marginLeft: 10}}
                  variant={"contained"}
                  color={"primary"}
                  disableElevation
                  onClick={this.submitUser}>Add</Button>
              </Grid>
          </Grid>
        </Container>
      </form>
    )
  }
}
export default AddUserForm;
