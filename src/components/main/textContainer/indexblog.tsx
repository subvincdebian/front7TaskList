import './style.css';
import { blogPosts } from '../../../fixture/blogContainer';
import BlogPost from '../customLi/index2';

const BlogList = () => {
  return (
    <div className="blog-container">
      {blogPosts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogList;
