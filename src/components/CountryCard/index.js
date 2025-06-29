import './index.css'

const CountryCard = props => {
  const {countriesList, removeButton} = props
  const {id, name, imageUrl} = countriesList
  return (
    <>
      <li className="countrycardContainer">
        <img src={imageUrl} alt="thumbnail" className="countryFlag" />
        <div className="countryNameAndRemoveButton">
          <p className="countryName">{name}</p>
          <button className="removeButton" onClick={() => removeButton(id)}>
            Remove
          </button>
        </div>
      </li>
    </>
  )
}

export default CountryCard
