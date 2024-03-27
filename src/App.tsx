import React, {FC,useState} from 'react';
import AddPizzaForm from './components/AddPizzaForm'
import './App.css';
import Pizza from './models/Pizza'
import DisplayPizzas from './components/DisplayPizzas';



const App: FC = () =>{
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza)=> 
    (pizza.id === newPizza.id ? newPizza : pizza)));
  }

console.log('pizzasList>>', pizzasList)
  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'> Наша пиццерия </span>
        <AddPizzaForm
        addPizza={addPizza}
        />
        <DisplayPizzas
        pizzasList={pizzasList}
        updatePizza = {updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
