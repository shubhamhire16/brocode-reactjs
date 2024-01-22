/* eslint-disable react/prop-types */
// import profilePic from "./assets/gattu.jpg"
import propTypes from "prop-types"
function Card(props) {
  return (
    <>
      <div className="card">
        <img className="profile-image" src={props.profilePic} alt="" />
        <h2 className="card-title">Name: {props.name}</h2>
        <h2 className="card-title">Age: {props.age}</h2>
      </div>
    </>
  );
}
Card.propTypes={
  name: propTypes.string,
  age: propTypes.number
}

export default Card 