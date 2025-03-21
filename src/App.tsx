import './App.css';
import NewsList from './components/main/textContainer/index';
import BlogPost from './components/main/textContainer/indexblog';


function App() {
  return (
    <div className="App">
      <h1>Новини (Практика 1 рівня:)</h1>
      <NewsList />
      <h1>Блог (Практика 2 рівня:)</h1>
      <BlogPost />
    </div>
  );
}

export default App;