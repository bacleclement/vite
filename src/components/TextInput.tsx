import { useState } from "react";
import Button from "./Button";

const TextInput = () => {
  const [name, setName] = useState('');
  return (  
    <>
      <p>{name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={() => setName(name)} disabled={!name}>Valider</Button>
    </>
  );
}

export default TextInput;