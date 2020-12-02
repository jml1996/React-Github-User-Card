import React from 'react';

const Card = props => {
//   const handleClick = ()=>{
//     props.handleToggle(props.item.id);
//   }
  console.log(props.user.data);
  return (
    // <div className="card">
        

    // </div>
    <div className="card">
        <img src={props.user.data.avatar_url} alt="avatar" ></img>
        <div className="card-info">
          <h3 className="name">{props.user.data.name}</h3>
          <p className="username">{props.user.data.login}</p>
          <p>Location: {props.user.data.location}</p>
          <p>Profile:
            <a href={props.user.data.url}>{props.user.data.url}</a>
          </p>
          <p>Followers: {props.user.data.followers}</p>
          <p>Following: {props.user.data.following}</p>
          <p>Bio: {props.user.data.bio}</p>
        </div>
    </div>
  );
};

export default Card;