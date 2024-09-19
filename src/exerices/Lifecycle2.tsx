import { useEffect, useRef, useState } from "react";

const ERROR_ADULT = 'Désolé, c\'est interdit aux adultes ici !';
const ERROR_BABY = 'Désolé, c\'est interdit aux bébés ici !';

const Lifecycle2 = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [age, setAge] = useState(0);
  const [degrees, setDegrees] = useState(0);
  const oldDegree = useRef(degrees)

  /**
   * Cette fonction est appelée dès qu'une mise à jour du DOM est effectuée.
   * Elle est aussi appelée au chargement du composant.
   * La fonction retournée contient l'ancien state avant la mise à jour
   */
  useEffect(() => {
    if (age >= 18) {
      console.log(age, errorMessage);
      setErrorMessage(ERROR_ADULT);
    } else if (age <= 5) {
      setErrorMessage(ERROR_BABY);
    }
  }, [age]);

  useEffect(() => {
    if (degrees < 0 && oldDegree.current == 0) {
      console.log('Trop froid !');
    } else if (degrees >= 10 && oldDegree.current > 0) {
      console.log('Trop chaud !');
    }
  }, [degrees]);

  /**
   * Augmente l'âge de 1 dans le state
   */
  const incrementAge = () => {
    setAge(age + 1)
  }

  /**
   * Augmente de 1 la temperature dans le state
   */
  const incrementTemperature = () => {
    oldDegree.current = degrees;
    setDegrees(degrees + 1);
  }

  /**
   * Diminue de 1 la temperature dans le state
   */
  const decrementTemperature = () => {
    oldDegree.current = degrees;
    setDegrees(degrees - 1);
  }

  return (
    <div>
      <div>
        <div>
          <h2>Exercice 1</h2>
          <h3>Age : {age}</h3>
          <p>Voici un bouton qui va augmenter l'âge de 1</p>
          {errorMessage && <p className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{errorMessage}</p>}
          <button onClick={incrementAge} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">Age +1</button>
        </div>
        <Instructions exercice={1} />
      </div>
      <div>
        <div>
          <h2>Exercice 2</h2>
          <h3>Degrés {degrees}</h3>
          <p>Voici deux boutons qui permettent de changer la température</p>
          <div>
            <button onClick={decrementTemperature} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">-</button>
            <button onClick={incrementTemperature} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">+</button>
          </div>
        </div>
        <Instructions exercice={2} />
      </div>
    </div>
  )
}

function Instructions({ exercice } : {exercice: any}) {
  return (
    <div>
      {exercice === 1 && (
        <div>
          <p>Remplir la fonction useEffect de manière à ce que :</p>
          <p>
            Si le nouvel âge est supérieur ou égal à 18, alors mettre à jour le state de
            errorMessage pour qu'il contienne le texte suivant : "Désolé, c'est interdit aux adultes ici !".
          </p>
          <p>
            Si le nouvel âge est inférieur ou égal à 5, alors mettre à jour le state de errorMessage
            pour qu'il contienne le texte suivant : "Désolé, c'est interdit aux bébés ici!"
          </p>
          <p>Sinon, mettre à jour le state de errorMessage pour qu'il contienne un texte vide.</p>
          <p>Remplir la fonction useEffect pour que le message apparaisse au chargement de la page.</p>
        </div>
      )}
      {exercice === 2 && (
        <div>
          <p>
            Remplir la fonction useEffect de manière à ce que lorsque la température passe en
            dessous de 0, la console affiche "Trop froid !" et que quand la température passe au
            dessus de 0, la console affiche "Trop chaud !"
          </p>
          <p>S'il fait déjà trop chaud quand on incrémente la température, ne rien afficher</p>
          <p>S'il fait déjà trop froid quand on décrémente la température, ne rien afficher</p>
        </div>
      )}
    </div>
  )
}

export default Lifecycle2;