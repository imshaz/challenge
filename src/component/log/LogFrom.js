import React from 'react'

function LogFrom() {
    return (
        <div class="form-wrapper">
            <h3 class="title">Add new log</h3>
            <form>
                <div class="input-wrapper">
                    <input type="text" placeholder="Log Title" />
                </div>
                <div class="input-wrapper">
                    <textarea placeholder="Log Message"></textarea>
                </div>
                <button type="submit" class="submit-btn"><i class="fa fa-comment-o" aria-hidden="true"></i>Submit Log</button>
            </form>
        </div>
    )
}

export default LogFrom
