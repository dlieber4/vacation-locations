import Activity from './Activity'
const Location = (props) => {
  console.log(props)
  return (
    <li className="location">
      <img src={props.location.pic} alt={props.location.name} />
      <h3>Location: {props.location.name}</h3>
      <h3>Country: {props.location.country}</h3>
      <h3>Temperature: {props.location.weather.temp}</h3>
      <h3>Attractions:</h3>
      {props.location.activities.map((activity, index) => (
        <Activity activity={activity} key={index} />
      ))}
    </li>
  )
}

export default Location
