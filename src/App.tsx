import './App.css'
import Movies from './components/Movies';
// import Button from './components/Button'
// import Counter from './components/Counter'
// import Users from './components/Users';
// import EventListener3 from './exerices/EventListener3';
// import EventListener4 from './exerices/EventListener4';
// import State from './exerices/State';
// import LifeCycle1 from './exerices/Lifecycle1';
// import Lifecycle2 from './exerices/Lifecycle2';
// import LifecycleChallenge from './exerices/LifecycleChallenge';

const App = ()  => {

  return (
    <>
      <div className='flex flex-col w-full items-start self-center'>
        {/* <div className='flex flex-row w-full'>
          <Button className="basis-1/4 md:basis-1/3">Valider</Button>
          <Button emoji="🐈‍⬛" className="basis-1/4 md:basis-1/3">Envoyer</Button>
          <Button emoji='🐆' className="basis-1/4 md:basis-1/3">Sauvegarder</Button>
          <Counter initialValue={0} step={2} className="basis-1/4 md:basis-1/3"></Counter>
        </div> */}
        {/* <Users newUser={newUser}/> */}
        {/* <State></State>
        <EventListener3></EventListener3> */}
        {/* <EventListener4></EventListener4> */}
        {/* <LifeCycle1></LifeCycle1> */}
        {/* <Lifecycle2></Lifecycle2> */}
        {/* <LifecycleChallenge></LifecycleChallenge> */}
        <Movies></Movies>
      </div>
    </>
  );
}

export default App
