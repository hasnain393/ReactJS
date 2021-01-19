import logo from '../logo.svg';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Counter from "./Counter"
import { useState } from 'react';
import Form from "./Form";
import DeleteIcon from '@material-ui/icons/Delete';



function App() {
  const [notes, setNotes] = useState([]);

   function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }
  function DeleteNote(id) {
    setNotes((prevNotes) => {
      return notes.filter((noteItem, index) => {
        return noteItem !== id;
      });
      
    });
  }
  function removeAll(){
    setNotes([]);
  }

  return (
    <div className="App">
      <Header />
      <Form onAdd={addNote}/>
 {
   notes.map((note)=>{
     return <Counter key={note} id={note} list={note} onDelete={DeleteNote}  />
   })

 }
<DeleteIcon  onClick={removeAll}/>

      <Footer />
    </div>
  );
}

export default App;
