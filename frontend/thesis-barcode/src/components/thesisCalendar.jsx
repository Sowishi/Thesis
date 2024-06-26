import React from "react";
import { Calendar, Whisper, Popover, Badge } from "rsuite";
import { getDate } from "date-fns";

const ThesisCalendar = () => {
  const dateFns = { getDate };

  const getTodoList = (date) => {
    const day = dateFns.getDate(date);

    switch (day) {
      case 10:
        return [
          { time: "10:30 am", title: "Meeting" },
          { time: "12:00 pm", title: "Lunch" },
        ];
      case 15:
        return [
          { time: "09:30 pm", title: "Products Introduction Meeting" },
          { time: "12:30 pm", title: "Client entertaining" },
          { time: "02:00 pm", title: "Product design discussion" },
          { time: "05:00 pm", title: "Product test and acceptance" },
          { time: "06:30 pm", title: "Reporting" },
          { time: "10:00 pm", title: "Going home to walk the dog" },
        ];
      default:
        return [];
    }
  };

  const TodoItem = ({ item }) => (
    <li>
      <Badge /> <b>{item.time}</b> - {item.title}
    </li>
  );

  const TodoPopover = ({ list }) => (
    <Popover>
      {list.map((item, index) => (
        <p key={index}>
          <b>{item.time}</b> - {item.title}
        </p>
      ))}
    </Popover>
  );

  const TodoList = ({ list }) => {
    const displayList = list.slice(0, 2);
    const moreCount = list.length - displayList.length;

    return (
      <ul
        className="calendar-todo-list"
        style={{
          border: "1px solid red",
          overflow: "scroll !important !important",
        }}
      >
        {displayList.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
        {moreCount > 0 && (
          <li>
            <Whisper
              placement="top"
              trigger="click"
              speaker={<TodoPopover list={list} />}
            >
              <a>{moreCount} more</a>
            </Whisper>
          </li>
        )}
      </ul>
    );
  };

  const renderCell = (date) => {
    const list = getTodoList(date);
    return list.length > 0 ? <TodoList list={list} /> : null;
  };

  const CalendarComponent = () => <Calendar bordered renderCell={renderCell} />;
  return <CalendarComponent />;
};

export default ThesisCalendar;
