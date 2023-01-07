
import './App.css';
import item from "./data";
import Card from "./components/Card";
import Top from './components/Top';

function App() {

  // console.log(item);
  let len=item.length;
  const data=item.map(info=>{
    return(
      <Card 
        key={info.id}
        length={len}
        {...info}
      />
    )
  }
  );

  return (
    <div className="App">
        <Top />
        {data}
    </div>
  );
}

export default App;
