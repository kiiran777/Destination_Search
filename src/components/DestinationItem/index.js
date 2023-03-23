// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="listItem">
      <img src={imgUrl} className="img" alt={name} />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
