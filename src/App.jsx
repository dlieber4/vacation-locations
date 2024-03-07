import './App.css'
import data from './locations.json'
import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'

const App = () => {
  console.log(data)
  return (
    <div>
      <h1>Worlds Best Vacation Destinations!</h1>
      <Header />
      {data.locations.map((location) => (
        <Location location={location} />
      ))}
      <Footer />
    </div>
  )
}
export default App
