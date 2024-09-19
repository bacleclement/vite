import { useState } from "react";

const EventListener3 = () => {
    const [animal, setAnimal] = useState('Ronron');
    const [notes, setNotes] = useState([1, 10, 15, 19, 20]);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);

    const displayText = (text: string) => {
        alert(text);
    }

    const deleteLastScore = () => {
        const newNotes = notes.slice(0, -1);
        setNotes(newNotes);
    }

    const toggleImg = () => {
        setDisplayImg(!displayImg);
    }
  
    return (
      <div>
        <div>
          <p>Créer une fonction displayText qui prend en paramètre une chaîne de caractère</p>
          <p>Créer un bouton qui envoie la valeur de state de animal en paramètre, et qui appelle la fonction displayText</p>
          <button onClick={() => displayText(animal)}>Afficher l'animal</button>
        </div>
        <div>
          <p>Créer un bouton qui va retirer le dernier élément de la liste des notes</p>
          <p>Il faut que le bouton appelle une fonction removeLastElement, qui va retirer le dernier élément des notes.</p>
          <p>
            <a href="https://react.dev/learn/updating-arrays-in-state">
              Documentation sur les tableaux
            </a>
          </p>
          {notes.map((note, index) => <p key={index}>{note}</p>)}
          <button onClick={deleteLastScore}>Supprimer la dernière note</button>
        </div>
        <div>
          <p>Créer un bouton qui va afficher ou non cette image en changeant la valeur de isDisplayed</p>
          <p>Il faut que le bouton appelle une fonction changeImageDisplay, qui va changer le state deisDisplayed</p>

          <div>
            {displayImg && <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=1200%2C500" alt="airbnb" />}
          </div>
          <button onClick={toggleImg}>Image</button>
        </div>
      </div>
    )
  }

  export default EventListener3;