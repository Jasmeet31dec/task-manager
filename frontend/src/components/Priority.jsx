import { useEffect, useState } from 'react';

export default function Priority() {
    let [priority, setPriority] = useState([]);
    useEffect(() => {
        async function handleGetStatuses() {
            try {
                const response = await fetch('http://localhost:8080/priority/');
                const resData = await response.json();
                setPriority(()=> {return resData});
            } catch (error) {
                console.log(error);
            }

        }

        handleGetStatuses();
    }, [])
    return (
        
        <div className="task-table-container">
            <div className="task-table-header">
                <h1>Manage Priorities</h1>
                <button className="add-task-btn">+ Add Priority</button>
            </div>
            {!priority && <p>Loading data..</p>}
            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {priority && priority.map((priority,index) => (
                        <tr key={index}>
                            <td>{priority.id}</td>
                            <td>{priority.level}</td>
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
