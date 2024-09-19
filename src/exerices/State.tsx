import { useState } from "react";

const State = () => {
    const [animals, setAnimals] = useState([
      {
        name: 'Trolilo',
        type: 'troll'
      },
      {
        name: 'Sheep sheep',
        type: 'poisson'
      },
      {
        name: 'Donald Trump',
        type: 'orange'
      }
    ]);
    const [newAnimalType, setNewAnimalType] = useState('');
    const [newAnimalName, setNewAnimalName] = useState('');

    const save = () => {
      const newAnimal = {name: newAnimalName, type: newAnimalType};
      setAnimals([...animals, newAnimal]);
      setNewAnimalName('');
      setNewAnimalType('');
    };
  
    return (
      <div>
        <ul>
          {animals.map(a => 
            <li>{a.name} - {a.type}</li>
          )}
          <input onChange={(e) => setNewAnimalType(e.target.value)} placeholder="type"></input>
          <input onChange={(e) => setNewAnimalName(e.target.value)} placeholder="type"></input>
          <button onClick={save}>Save</button>
        </ul>
      </div>
    )
  }

  export default State;