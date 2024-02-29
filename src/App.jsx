import './App.css'
import data from './locations.json'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  console.log(data)
  return (
    <div>
      <h1>Vacation Locations</h1>
      <Header />
      {/* map my locations here  */}
      <Footer />
    </div>
  )
}
export default App
