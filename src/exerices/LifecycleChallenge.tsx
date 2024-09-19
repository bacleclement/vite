import { useEffect, useState } from "react";

const LifecycleChallenge = () => {
  const [factsOnCats, setFactsOnCats] = useState([{text: ''}]);

  /**
   * Simule une requête sur une API qui prend du temps et renvoie des faits sur les chats
   */
  const fetchFacts = () => {
    setTimeout(() => {
      setFactsOnCats([
        { text: 'Un chat a fait tomber le sapin' },
        { text: 'Un chat est rentré chez lui pour manger des croquettes' },
        { text: 'Un chat est rentré par intérêt chez son maître' },
        { text: 'Un chat est finalement adorable' },
      ]);
    }, 300);
  }

  const displayCats = () => {

  };

  /**
   * Cette fonction est appelée dès qu'une mise à jour du DOM est effectuée.
   * Elle est aussi appelée au chargement du composant.
   * La fonction retournée contient l'ancien state avant la mise à jour
   */
  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);

  return (
    <div>
      <h1>Fetch their soul !</h1>
      <div className="flex flex-col gap-2">
        {factsOnCats.map(f => 
          <span className="bg-slate-500 rounded-md text-cyan-50">{f.text}</span>
        )}
      </div>
      <button onClick={displayCats} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">Afficher les chats</button>
      <Instructions />
    </div>
  )
}

function Instructions() {
  return (
    <div>
      <p>Dans le code se trouve une fonction fetchFacts</p>
      <p>Cette fonction va récupérer des faits (on simule une API) sur les chats et les mettre dans le state factsOnCats</p>
      <p>Afficher le contenu de factsOnCats. La fonction fetchFacts ne doit pas être modifiée et ne renvoie rien, il faut l'appeler quelque part.</p>
      <p>Pour chaque fait, ajouter un bouton qui permet de retirer ce fait du tableau factsOnCats</p>
      <p>Remplir le useEffect de manière à ce que si factsOnCats est vide, alors on retourne automatiquement charger des chats.</p>
    </div>
  )
}

export default LifecycleChallenge;