import { useState, FC } from "react";

export interface User {
  id: number;
  name: string;
  avatar?: string;
}

const UserForm: FC<{ newUser: (newUser: User) => void }> = ({newUser}) => {
  const id = Math.floor(Math.random()*10000) + 1;
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      newUser({ id, name });
      setName('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom :
            <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default UserForm; 