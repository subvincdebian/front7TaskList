import { useState } from "react";

import { Do } from "./type/mainPage";
import Layout from "./components/main/textContainer/index";
import DoList from "./components/main/textContainer/dolist";

function App() {

  const [dos, setEvent] = useState<Do[]>([]);
  const [task, setTask] = useState("");

  const handleClick = () => {
    if (!task.trim()) return;
    setEvent([...dos, { id: Date.now(), name: task, isActive: true }]);
    setTask("");
  };

  const toggleDo = (id: number) => {
    setEvent(
      dos.map((doItem) =>
        doItem.id === id ? { ...doItem, isActive: !doItem.isActive } : doItem
      )
    );
  };

  return (
    <Layout>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
           placeholder="Додати нову справу"/>
        <button onClick={handleClick}>Додати</button>
      </div>
      <DoList dos={dos} toggleDo={toggleDo} />
    </Layout>
  );
};

export default App;
