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
import { background, Box, Button, HStack } from "@chakra-ui/react";
import { AiFillSetting } from 'react-icons/ai';
import TopNavbar from "../feeds/TopNavbar";

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
  {
    id: Date.now(),
    title: "Big Meeting",
    // allDay: true,
    description: "suscipit eius.",
    start: new Date(2022, 8, 27),
    end: new Date(2022, 8, 29),
  },
];

function HoursPage() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });
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


  const [hours, setHours] = useState(Number);
  const [minutes, setMinute] = useState(Number);
  const [Seconds, setSeconds] = useState(Number);

  //------------------=- time -=--------------
  const time = new Date();
  const hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();


  setTimeout(() => {

    setHours(hrs);
    setMinute(min);
    setSeconds(sec);
  }, 1000);



  return (

    <div>
      <TopNavbar minutes={minutes} hours={hours}/>
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
          <Button>CALENDERS</Button>
          <Button><AiFillSetting/></Button>
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
          {allTodos.map((el) => {
            return (
              <div style={{ display: "flex" }}>
                <div className={styles.showData} key={el.id}>
                  {el.description}
                </div>
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HoursPage;
