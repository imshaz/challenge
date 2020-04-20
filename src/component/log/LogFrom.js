import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_LOG } from '../../constants/action-types';
import { v4 as uuidv4 } from 'uuid';

function LogFrom() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const AddLog = () => {
        if ((title === "") || (message === "")) {
            return
        }
        const log = {};
        log.id = uuidv4();
        log.title = title;
        log.message = message;
        log.time = new Date();

        dispatch({ type: ADD_LOG, payload: log });
        setTitle("")
        setMessage("")
    }

    return (
        <div className="form-wrapper">
            <h3 className="title">Add new log</h3>
            <div className="input-wrapper">
                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Log Title" />
            </div>
            <div className="input-wrapper">
                <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Log Message"></textarea>
            </div>
            <button onClick={() => AddLog()} className="submit-btn"><i className="fa fa-comment-o" aria-hidden="true"></i>Submit Log</button>
        </div>
    )
}

export default LogFrom
