import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);

  const onAddTodo = () => {
    const newTodo = {
      id: todo.length,
      title: title,
      content: content,
      completed: false
    }
    if (title === '' && content === '') { alert('제목과 내용을 작성하세요.') }
    else {
      setTodo([...todo, newTodo])
      setTitle('');
      setContent('');
    }
  }

  const onDone = (id) => {
    const done = todo.find((item) => item.id === id);
    done.completed = true;
    setDoneTodo([...doneTodo, done]);
    setTodo(todo.filter((item) => item.id !== id))
  }

  const onCancel = (id) => {
    const cancel = doneTodo.find((item) => item.id === id);
    cancel.completed = false;

    setTodo([...todo, cancel]);
    setDoneTodo(doneTodo.filter((item) => item.id !== id));
  }

  const onWorkingDelete = (id) => {
    setTodo(todo.filter((item) =>
      item.id !== id
    ));
  }

  const onDoneDelete = (id) => {
    setDoneTodo(doneTodo.filter((item) =>
      item.id !== id
    ));
  }

  const onTitleChangeHandler = (event) => {
    const inputValue = event.target.value
    setTitle(inputValue);
  }

  const onContentChangeHandler = (event) => {
    const inputValue = event.target.value
    setContent(inputValue);
  }

  return (
    <div className='app-container'>

      <div className='main-title'>
        <h1>My Todo List 👧🏻📚️</h1>
      </div>

      <div>
        <div className='input'>
          <p className='title'>제목 :</p> <input className='sub-title' type="text" onChange={onTitleChangeHandler} value={title}></input>
          <p className='content'>내용 :</p> <input className='sub-content' type="text" onChange={onContentChangeHandler} value={content}></input>

          <button className='sub-button' onClick={onAddTodo}>추가하기</button>
        </div>
      </div>

      <div className='working-section'>
        <h2>Working 🔥</h2>
        <div className='working-container'>
          {todo.map((item) => (
            <div className='working-card' key={item.id}>
              <div>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className='working-btn'>
                  <button className='working-delete' onClick={() => onWorkingDelete(item.id)}>삭제하기 🗑️</button>
                  <button className='working-complete' onClick={() => onDone(item.id)}>{item.completed ? '취소 ❌️' : '완료 💚'}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='done-section'>
        <h2>Done ✅️</h2>
        <div className='done-container'>
          {doneTodo.map((item) => (
            <div className='done-card' key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <div className='done-btn'>
              <button className='done-delete' onClick={() => onDoneDelete(item.id)}>삭제하기 🗑️</button>
              <button className='done-cancle' onClick={() => onCancel(item.id)}>{item.completed ? '취소 ❌️' : '완료 💚'}</button>
            </div>
            </div>
          ))}
        </div>
      </div>

    </div >

  );
}

export default App;