import React from "react";
import CardItem from "./CardItem";
import { useSelector } from 'react-redux'


function Cards(props) {
  const [filter, setFilter] = React.useState('')
  const logs = useSelector(state => state.logs)

  const filteredLogs = logs.filter(log => {
    return log.title.toLowerCase().includes(filter.toLowerCase()) || log.message.toLowerCase().includes(filter.toLowerCase())
  }).reverse();

  return (
    <div className="content business-content">
      <div className="input-filter">
        <input value={filter} onChange={(e) => { setFilter(e.target.value) }} type="text" placeholder="Filter logs" />
      </div>

      {
        logs.length > 0 ? filteredLogs.map(item => {
          return <CardItem key={item.id} id={item.id} title={item.title} message={item.message} time={item.time} />
        }) : null
      }
    </div>
  );
}

export default Cards;
