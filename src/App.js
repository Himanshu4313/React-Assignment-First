import "./App.css";
import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";
function App() {
  return (
    <div className="App">
      {/* Call Person component */}
      <Person personName="Alex" personAge="30" />
      {/* Call Button Component */}
      <Button text="ClickMe" onClick={() =>{
        alert('Thanks u for click me!');
      }}/>
      {/* Call Header component */}
      <Header title = "This is a header"/>
      {/* Call List Component */}
      <List item = {['apple' , 'Banana' , 'lichi', ' kiwi']}/>
    </div>
    
  );
}

export default App;
