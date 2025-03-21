import './style.css';
import { NewsItemType } from '../../../type/news';

const NewsItem = (props: NewsItemType) => {
  return (
    <li className="news-item">
      <span className="news-time">{props.time}</span>
      <a href={props.link} className={`news-title ${props.isImportant ? 'important' : ''}`}>
        {props.title}
      </a>
    </li>
  );
};

export default NewsItem;