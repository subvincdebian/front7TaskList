import './style.css'
import { Do } from "../../../type/mainPage";
import DoItem from "./item";

type DoListProps = {
  dos: Do[];
  toggleDo: (id: number) => void;
};

const DoList = ({ dos, toggleDo }: DoListProps) => {
  return (
    <ul>
      {dos.map((doItem) => (
        <DoItem key={doItem.id} doItem={doItem} toggleDo={toggleDo} />
      ))}
    </ul>
  );
};

export default DoList;
