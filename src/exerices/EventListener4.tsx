import { useState } from "react";

const EventListener4 = () => {
    const [vegetables, setVegetables] = useState([
      {
        name: 'Courgette',
        draftName: '', // DraftName contient la valeur de l'input destiné à faire changer de nom à l'aliment.
        price: 5,
      },
      {
        name: 'Popotiron',
        draftName: '',
        price: 155,
      },
      {
        name: 'Baba',
        draftName: '',
        price: 99,
      },
      {
        name: 'Carotte',
        draftName: '',
        price: 1,
      }
    ]);

    const [newVegetableName, setVegetableName] = useState('');
    const [newVegetablePrice, setVegetablePrice] = useState(0);

    const addVegetable = () => {
      const newVegetable = {name: newVegetableName, draftName: '', price: newVegetablePrice};
      setVegetables([...vegetables, newVegetable]);
      setVegetableName('');
      setVegetablePrice(0);
    };

    const updateVegetableDraftName = (value: string, index: number) => {
        const updatedVegetables = vegetables.map((vegetable, i) => 
            i === index ? { ...vegetable, draftName: value } : vegetable
        );
        setVegetables(updatedVegetables);
    }

    const changeVegetableName = (index: number) => {
        const updatedVegetables = vegetables.map((vegetable, i) => 
            i === index ? { ...vegetable, name: vegetable.draftName, draftName: '' } : vegetable
        );
        setVegetables(updatedVegetables);
    }

    const deleteVegetable = (index: number) => {
        setVegetables(vegetables.filter((_, i) => i !== index));
    }
  
    return (
      <div>
        <ul>
          {vegetables.map((vegetable, index) =>
            <div>
                <li>{vegetable.name} - {vegetable.price} - {vegetable.draftName}</li>
                <input type="text" onChange={(e) => updateVegetableDraftName(e.target.value, index)} placeholder="DraftName"></input>
                <button onClick={() => changeVegetableName(index)}>Save</button>
                <button onClick={() => deleteVegetable(index)}>Delete</button>
            </div>
          )}
        </ul>
        <ul className="flex flex-row">
          <input onChange={(e) => setVegetableName(e.target.value)} placeholder="name"></input>
          <input onChange={(e) => setVegetablePrice(e.target.value)} placeholder="price" type="number"></input>
          <button onClick={addVegetable}>Save</button>
        </ul>
      </div>
    )
  }

  export default EventListener4;