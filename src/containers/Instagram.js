import React, { Component } from 'react';
import PhotoFeed from '../components/PhotoFeed';

class Instagram extends Component {
constructor(props) {
  super(props);

  this.state={
    username: '',
    instagram: null,
    behance: null
  }
}

updateUsername(e){
  this.setState({
    username: e.target.value
  })
}

fetchInstagram(){

  let url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=4681217909.bd4821b.54f9a09bd44244c486cb13620ccdf82f";

  fetch(url)
    .then(res => res.json())
    .then(res => this.setState({
      instagram: res
    })    
  )
}

fetchBehance(){

  let url = "https://www.api.behance.net/v2/users/beeple/projects?api_key=kksB4zSsSBQLKxLhchc9nduJbH6QgMS7";
 
/*--------------------

 fetch(url)
    .then(res => res.json())
    .then(res => console.log(res.data)
    .then(res => this.setState({
      behance: res
    })    
  )

--------------------*/

  fetch(url, {
    mode: 'cors', // no-cors, *same-origin
  })
  .then(response => response.json()) // parses response to JSON
}

fetchTwitter(){

}

fetchWebsite(){

}

  render() {
    this.state.instagram ? console.log(this.state.instagram.data): console.log('no insta');
    this.state.behance ? console.log(this.state.behance): console.log('no behance');
    return (
      <div>
        <div className="row">
          <input onChange={this.updateUsername.bind(this)} type="text" placeholder="Username"/>
          <button onClick={this.fetchInstagram.bind(this)}>Get Instagram Posts</button>
          
            {this.state.instagram  && <PhotoFeed instagram={this.state.instagram}/>}
                    
        </div>

        <div className="row">
          <input onChange={this.updateUsername.bind(this)} type="text" placeholder="Username"/>
          <button onClick={this.fetchBehance.bind(this)}>Get Behance Posts</button>

          {this.state.behance  && <PhotoFeed behance={this.state.behance}/>}
        </div>

        <div className="row">
        </div>
      </div>
    );
  }
}

export default Instagram;
