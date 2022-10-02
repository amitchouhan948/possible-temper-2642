import React, { useState } from "react";
import styles from "./HoursPage.module.css";

// Calendar
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { FormModal } from "./FormModal";
import {Button, } from "@chakra-ui/react";
import { AiFillSetting } from 'react-icons/ai';

const locales = {
  "en-IN": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const todos = [
  
];

function HoursPage() {
  const [allTodos, setAllTodos] = useState(todos);

  const handleSubmit = (e, newTodo) => {
    e.preventDefault();
    let id = Date.now();
    setAllTodos([...allTodos, { ...newTodo, id }]);
  };
  const handleDelete = (id) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  };
  console.log(allTodos);
  return (

    <div className={styles.container}>
      <div className={styles.calenderNav}>
        <h3>My Calender</h3>
        <h3>Company Calender</h3>
        <h3>Meeting room avability</h3>
        <select>
          <option value="">Configure Menu</option>
          <option value="">Reset Menu</option>
          <option value="">Hidden</option>
          <option value="">Drag here to Hide</option>
        </select>
      </div>
      <div className={styles.calenderSecondNav}>
        <div>
          <h3>Calender</h3>
        </div>
        <div>
          <FormModal handleSubmit={handleSubmit} />
          <input type="text" placeholder="Filter and Search" />
        </div>
        <div>
          <Button colorScheme={"green"}>CALENDERS</Button>
          <Button colorScheme={"green"}><AiFillSetting/></Button>
        </div>
      </div>
      <div className={styles.todoTag}>
        <Calendar
          localizer={localizer}
          events={allTodos}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 800,
            width: "100%",
            fontSize: "20px",
            backgroundColor: "white",
            color: "black",
            // margin: "100px",
            marginTop:"50px",
            padding: "20px",
            borderRadius: "20px",
          }}
        />
        <div>
          <h2 className={styles.tasks}>TASKS</h2>
          <div style={{ display: "grid",gridTemplateRows:"auto",gridTemplateColumns:"repeat(4,1fr)",padding:"20px",margin:"auto",gap:'50px',width:"100%"}}>
          {allTodos.map((el) => {
            return (
              <div style={{display:"flex"}}>
                <div className={styles.showData} key={el.id}>
                  {el.description}
                <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoursPage;
