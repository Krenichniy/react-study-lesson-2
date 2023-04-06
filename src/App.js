
import { Component } from 'react';
import './App.css';
import initialToDos from './todos.json';
// import ColorPicker from './components/ColorPicker';
// import { Alert } from './components/Alert/Alert';
// import { LoginButton, FollowButton } from './components/Buttons';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import ToDoList from './components/ToDoList/ToDoList';
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2496F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialToDos,
  }

  deleteToDo = (todoId) => {
    this.setState( prevState =>({
          todos: prevState.todos.filter(todo => todo.id !== todoId),
        }))
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        

        <div className='todo-Info'>
          <span>Total toDos:{todos.length}</span>
          <span>Total completed toDos:{todos.filter(todo=>todo.completed === true).length }</span>
        </div>

        <ToDoList todos={todos} deleteOne={this.deleteToDo} />
      </>

    )
  }
}
// function App() {
//   return (
//     <div className="App">
       
//       <h1>Component State</h1>
//       <ToDoList options={colorPickerOptions} />
//       {/* <Counter initialValue={10} /> */}
//       {/* <Dropdown/> */}
//       {/* <ColorPicker options={colorPickerOptions } /> */}
//         {/* <Alert variant="info">
//           Would you like to browse our recommended products?
//         </Alert>
//         <Alert variant="error" outlined>
//           There was an error during your last transaction
//         </Alert>
//         <Alert variant="success" elevated>
//           Payment received, thank you for your purchase
//         </Alert>
//         <Alert variant="warning" outlined elevated>
//           Please update your profile contact information
//       </Alert>
//       <LoginButton/>
//       <FollowButton/> */}

//     </div>
//   );
// }

export default App;
