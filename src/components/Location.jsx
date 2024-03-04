import Activity from './Activity'
const Location = (props) => {
  console.log(props)
  return (
    <li className="location">
      <img src={props.location.pic} alt={props.location.name} />
      <h3>{props.loaction.name}</h3>
      <h5>Country: {props.location.country}</h5>
      <h6>{props.location.weather}</h6>
      {props.location.activities.map((activity, index) => (
        <Activity activity={activity.name} />
      ))}
    </li>
  )
}
export default Location
