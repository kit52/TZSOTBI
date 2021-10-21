import { React } from 'react'
import './App.css';
import { useState } from 'react';
import Form from './Form';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1
}

function App() {
  const [usersFullName, setUsersFullName] = useState([])
  const fetchUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (response.ok) {
      let json = await response.json();
      const num1 = getRandomNumber();
      let num2 = getRandomNumber();
      if (num1 == num2) num2 = getRandomNumber()
      const arr = json.filter(item => item.id != num1 && item.id != num2);
      const arrayFullName = arr.map(item => {
        return `${item.name} ${item.username}`
      })
      setUsersFullName(arrayFullName)
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
  return (
    <div className="App">
      <Form />
      <div className="wrapper">
        <h1>1. Лого яндекса</h1>
        <div className="logo"></div>
      </div>
      <div className="wrapper">
        <h1>2. Анимация подчеркивания текста</h1>
        <p className="text">
          <span className="text__anim">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus provident quisquam quae, amet eos at iusto numquam aliquam ratione temporibus reiciendis dolores corrupti ea omnis nihil laudantium pariatur. Doloribus, reprehenderit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus provident quisquam quae, amet eos at iusto numquam aliquam ratione temporibus reiciendis dolores corrupti ea omnis nihil laudantium pariatur. Doloribus, reprehenderit?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus provident quisquam quae, amet eos at iusto numquam aliquam ratione temporibus reiciendis dolores corrupti ea omnis nihil laudantium pariatur. Doloribus, reprehenderit?</span>
        </p>
      </div>
      <div className="wrapper">
        <h1>3. Get - запрос, фильтрация массива</h1>
        <button className="btn" onClick={fetchUsers}>Загрузить пользователей</button>
        <div className="users">
          {
            usersFullName.map((item, i) => {
              return <p key={i}><span>{i + 1} -</span>{item}</p>
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
