import './style.css';
import { BlogPostType } from '../../../type/blog';

const BlogPost: React.FC<BlogPostType> = ({ title, date, content, link }) => {
  return (
    <div className="blog-post">
      <h3 className="blog-title">{title}</h3>
      <p className="blog-date">{date}</p>
      <p className="blog-content">{content}</p>
      <a href={link} className="blog-link">Read more</a>
    </div>
  );
}

export default BlogPost;