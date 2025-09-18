import { useEffect, useState } from "react";

const tasksRaw = [
    { id: 1, title: 'string', assignee: 'Anil', status: 'ToDo', priority: 'Low' },
    { id: 2, title: 'test', assignee: 'Faizan', status: 'In-Progress', priority: 'Medium' },
    { id: 3, title: 'work on healthcare admin page', assignee: 'Anuj', status: 'In-Progress', priority: 'Medium' },
];




export default function ManageTasks() {
    const [tasks, setTasks] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    function handleCreateTask() {
        try {
            const response = fetch("http://localhost:8080/tasks/create-task", {
                method: POST,
                body: { id: 1, title: 'string', assignee: 'Anil', status: 'ToDo', priority: 'Low' }
            });
            const resData = response.json();
            setTasks((prevValue) => {
                [...prevValue, resData]
            })
        } catch (error) {
            console.log("error in creation");
        }
    }

    return (
        <div className="task-table-container">
            <div className="task-table-header">
                <h1>Manage Tasks</h1>
                <button className="add-task-btn" onClick={handleCreateTask}>+ Add Task</button>
            </div>

            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Assignee</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksRaw.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.assignee}</td>
                            <td>{task.status}</td>
                            <td>{task.priority}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                                <button className="view-btn">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

