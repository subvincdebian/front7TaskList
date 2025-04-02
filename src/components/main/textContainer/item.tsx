import { Do } from "../../../type/mainPage";
import './style.css'

type DoItemProps = {
  doItem: Do;
  toggleDo: (id: number) => void;
};

const DoItem = ({ doItem, toggleDo }: DoItemProps) => {
  return (
    <li className={doItem.isActive ? "active" : "completed"}>
      <span>{doItem.name}</span>
      <button onClick={() => toggleDo(doItem.id)}>
        {doItem.isActive ? "Завершити" : "Активувати"}
      </button>
    </li>
  );
};

export default DoItem;
