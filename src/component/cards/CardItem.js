import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import moment from 'moment';
import { DELETE_LOG } from "../../constants/action-types";

function CardItem(props) {
  const { id, title, message, time } = props
  const dispatch = useDispatch();
  const deleteLog = (id) => {
    dispatch({ type: DELETE_LOG, payload: id })
  }
  return (
    <div className="paragraph-wrapper">
      <h2 className="title">{title}</h2>
      <p className="text">{message}</p>
      <div className="date">
        {moment(time).format("hh:MM:SS A, DD-MM-YY")}
      </div>
      <span onClick={() => deleteLog(id)} className="delete">Delete</span>
    </div>
  );
}
CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  // time: PropTypes.string.isRequired
};

export default CardItem;
