import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/Header.js/Header'
import { AddTodo } from './components/AddTodo';
import uuid from 'uuid';




class App extends Component{
  state= {
    todos: [
      {
      id: uuid.v4(),
      title: 'eat',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'pray',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'think',
      completed: false
    },
    {
      id: uuid.v4(),
      title: 'live',
      completed: false
    }
  ]
}

//Delete Todo
delTodo = (id) =>
{
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
    !== id)]});
}

markComplete = (id) => 
{
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  })});
}

addTodo = (title) => {
  const newTodo= {
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}
  render() {

    return (
    <div className="App">
    
     <Header />
     <AddTodo addTodo={this.addTodo} />
     <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
  );
}
}

export default App;
