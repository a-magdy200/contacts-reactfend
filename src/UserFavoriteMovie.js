import React, {Component} from 'react';

export default class UserFavoriteMovie extends Component {
	render() {
      let {user, movie} = this.props;
      //> Jane Cruz's favorite movie is Planet Earth 1.

      return (
      	  <li>
        {user.name}'s favorite movie is {movie.name}
        	</li>
      );
    }
}