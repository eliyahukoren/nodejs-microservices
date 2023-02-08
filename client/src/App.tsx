
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (

    <div className="container">
      <div className='mt-3 mb-3'>
        <h2>Create Post</h2>
        <PostCreate />
        <hr />
        <h2>Posts</h2>
        <PostList />
      </div>
    </div>
  );
}

export default App;
