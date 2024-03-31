const CardCar = (props) => {
  const {
    name,
    price,
    category,git 
    imageUrl
  } = props;

  return(
    <div className="d-flex flex-column card"
    
    >
      
      <span>{name}</span>
      <span>{price}</span>
      <span>{category}</span>
      <span>{imageUrl}</span>
      <button className="btn btn-success">Pilih mobil aja</button>

    </div>
  )
}

export default CardCar;