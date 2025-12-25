import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'  
import FoodInput from './components/FoodInput';
import {useState} from 'react';

function App() {

  // let foodItems = ['Daal','Greem Vegetable','Roti','Salad','Milk','Ghee'];


  let [foodItems,setFoodItems] = useState([]);

    const onKeyDown = (event) =>{
      if (event.key === "Enter"){
        let newFoodItems = event.target.value;
        event.target.value = '';
        let newItems= [...foodItems,newFoodItems];
        setFoodItems(newItems);
      
      }
    };

  return (
    <>
    <Container>
         <h1 className='food-heading'>Healthy Food</h1>
      
      <FoodInput handleKeyDown={onKeyDown}/>
    <ErrorMessage items = {foodItems}/>
     <FoodItems items= {foodItems}/>
    </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for 
          your health and well being.
        </p>
      </Container> */}
      </> 

  );
}

export default App
