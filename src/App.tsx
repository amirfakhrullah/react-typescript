import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";

import List from './components/List';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.shopify.com/s/files/1/0414/8917/0599/collections/NBA_Store_Player_Headshot_Guide_-_LeBron_James.png?v=1592988861",
      age: 36,
      note: "Allergic to staying on the same team"
    },
    {
      name: "Kobe Bryant",
      url: "https://epmgaa.media.clients.ellingtoncms.com/img/photos/2020/02/27/Kobe_Bryant_headshot_smile.jpg",
      age: 42,
      note: "GOAT"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
