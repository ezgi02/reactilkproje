import Temperature from './components/temperature';



function App() {
  return (
    <div className="App">
      <h1>Hava Nasil</h1>
      <h2>Derece</h2>
      <header className="App-header">
            <h3>Celciustan Fahreneita Cevirme</h3>
            <Temperature />
        </header>
      
    </div>
  );
}

export default App;