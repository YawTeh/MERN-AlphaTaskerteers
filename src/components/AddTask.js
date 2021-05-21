import React from 'react'

const AddTask = () => {
    return (
        <div>
            <form className="add-form">
                <div className="form-control">
                    <label>Add Task</label>
                    <input type="text" placeholder="Add Task" />
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text" placeholder="Add Day & Time" />
                </div>
                <div className="form-control">
                    <label>Set Reminder</label>
                    <input type="text" placeholder="Set Reminder" />
                </div>
                <input type="submit" value="Save Task" />
            </form>
        </div>
    )
}

export default AddTask
