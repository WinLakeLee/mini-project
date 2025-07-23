const Details = ({ fish }) => {
  return (
    <>
      <p>{fish.species}</p>
      <p>{fish.size}</p>
      <p>{fish.location}</p>
      <p>{fish.description}</p>
    </>
  )


}

export default Details