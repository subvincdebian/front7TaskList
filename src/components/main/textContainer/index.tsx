import './style.css';
import { newsList } from '../../../fixture/newsContainer';

const NewsList = () => {
  return (
    <div className="news-container">
      <ul>
        {newsList.map((item) => (
          <li key={item.id} className={`news-item ${item.isImportant ? 'highlighted' : ''}`}>
            <span className="news-time">{item.time}</span>
            <a href={item.link} className="news-title">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;