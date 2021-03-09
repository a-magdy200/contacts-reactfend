import React, {Component} from 'react';
export default class PopularMovie extends Component {
  renderLikes(users = []) {
    if (users.length) {
      return (
          <>
              <div>Liked By:</div>
              <ul>
                  {users.map(({name}) => <li>{name}</li>)}
              </ul>
          </>
    	  );
  		}
  	return null;
	}
render() {
  return (
  );
}
}