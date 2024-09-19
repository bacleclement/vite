import { useEffect, useRef, useState } from "react";

const LifeCycle1 = () => {
  const [age, setAge] = useState(0);
  const [degrees, setDegrees] = useState(0);
  let previousAge = useRef(age);

  /**
   * Cette fonction est appelée dès qu'une mise à jour du DOM est effectuée.
   * Elle est aussi appelée au chargement du composant.
   * La fonction retournée contient l'ancien state avant la mise à jour
   */
  useEffect(() => {
    previousAge.current = age;
    if (age >= 18) {
      alert('La personne est majeure.')
    }
  }, [age]);

  useEffect(() => {
    if (degrees < 0) {
      alert('Trop froid !');
    } else if (degrees > 10) {
      alert('Trop froid !');
    }
  })

  /**
   * Augmente l'âge de 1 dans le state
   */
  const incrementAge = () => {
    setAge(age + 1);
  }

  /**
   * Augmente de 1 la temperature dans le state
   */
  const incrementTemperature = () => {
    setDegrees(degrees + 1);
  }

  /**
   * Diminue de 1 la temperature dans le state
   */
  const decrementTemperature = () => {
    setDegrees(degrees - 1);
  }

  return (
    <div>
      <a href="https://react.dev/reference/react/useEffect">Documentation sur les cycles de vie</a>
      <div>
        <h2>Exercice 1</h2>
        <div>
          <h3>Age : {age}</h3>
          <p>Ancienne age: {previousAge.current}</p>
          <p>Voici un bouton qui va augmenter l'âge de 1</p>
          <button onClick={incrementAge} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">Age +1</button>
        </div>
        <Instructions exercice={1} />
      </div>
      <div>
        <h2>Exercice 2</h2>
        <h3>Degrés {degrees}</h3>
        <div>
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

function Instructions({ exercice }: {exercice: any}) {
  return (
    <div>
      {exercice === 1 && (
        <div>
          <p>OK Remplir la fonction useEffect de manière à afficher l'ancien âge dans la console.</p>
          <p>OK Remplir la fonction useEffect de manière à afficher l'âge actuel dans la console.</p>
          <p>OK Si le nouvel âge est supérieur ou égal à 18, alors afficher en plus "La personne est majeure" dans le useEffect</p>
        </div>
      )}
      {exercice === 2 && (
        <div>
          <p>
            Remplir la fonction useEffect de manière à ce que lorsque la température passe en dessous de 0, la
            console affiche "Trop froid !" et que lorsque la température passe au dessus de 0, la console affiche "Trop chaud !"
          </p>
        </div>
      )}
    </div>
  )
}

export default LifeCycle1;