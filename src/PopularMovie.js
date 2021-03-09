import React, {Component} from 'react';
export default class PopularMovie extends Component {
  renderLikes(users = []) {
    if (users.length) {
      return (
          <div>
              <div>Liked By:</div>
              <ul>
                  {users.map(({name}) => <li>{name}</li>)}
              </ul>
          </div>
    	  );
  		}
  	return <p>None of the current users liked this movie</p>;
	}
render() {
  let {movie} = this.props;
  return (
    <div>
    	<h2>{movie.name}</h2>
    	{this.renderLikes(movie.likedUsers)}
    </div>
  );
}
}