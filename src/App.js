import './App.css';

function App() {
  const title = 'Welcome to my App';
  const likes = 50;
  const link = 'http://www.google.com'
  
  return (
    <div className="App">
      {/* a variable set as const */}
      <h1>{title}</h1>
      <p>Liked  {likes} times</p>
      {/* Any function */}
      <p>{1+10}</p>
      {/* Strings */}
      <p>{"Hello"}</p>
      {/* Arrays */}
      <p>{[1,2,3,4,5]}</p>
      {/* Evaluate */}
      <p>{Math.random() * 100}</p>
      <a href={link}>Google</a>
    </div>
  );
}

export default App;
