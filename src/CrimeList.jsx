import propTypes from "prop-types"

function CrimeList(props){
  // lowChance.sort((a,b)=>a.chances-b.chances)
  const itemList = props.items;
  const location = props.location;

  const listItems = itemList.map(city => <li key={city.id}>{city.cityName}, Chances:{city.chances}%</li>)
  return(
    <>
    <h1>{location}</h1>
    <ul>{listItems} </ul>
    </>
    
  )
}
CrimeList.propTypes = {
  items: propTypes.array,
  location: propTypes.string,
}
export default CrimeList