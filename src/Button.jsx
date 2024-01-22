function Button(){
let count = 0;

  const handleClick = (e)=> e.target.textContent="different"

  return(
    <>
      <button className="info-button" onClick={(e)=>handleClick(e)}>Click For More Info</button>
    </>

  )
}
export default Button;