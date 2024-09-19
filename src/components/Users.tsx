import { useState, FC } from "react";
import Button from "./Button";

const List = ()  => {
  const [users, setUsers] = useState([
      { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
      { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
      { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
    ]);

  const addUser = () => {
    setUsers([{ id: users.length, name: 'Tutu', avatar: 'https://i.pravatar.cc/150?u=Tutu' }, ...users])
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (  
    <>
    <main>
    </main>
      <div className="flex flex-col">
        {users.map(user => 
          <div key={user.id} className="flex flex-row items-start self-center">
            <img src={user.avatar}></img>
            <span className="basis-1/3">{user.name}</span>
            <Button onClick={() => deleteUser(user.id)}>Supprimer</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default List;