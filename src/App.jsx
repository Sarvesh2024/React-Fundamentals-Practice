import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'

function App() {

  let foodItems = ['Daal','Greem Vegetable','Roti','Salad','Milk','Ghee'];
    

  return (
    <>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage items = {foodItems}/>
     <FoodItems items= {foodItems}/>

    </>
  )
}

export default App
