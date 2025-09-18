const tasks = [{
    id: 1, name: 'TO-DO'
}, { id: 2, name: 'IN-Progress' }]

import { useEffect, useState } from 'react';

export default function Status() {
    let [statuses, setStatuses] = useState([]);
    useEffect(() => {
        async function handleGetStatuses() {
            try {
                const response = await fetch('http://localhost:8080/status/');
                const resData = await response.json();
                setStatuses(()=> {return resData});
            } catch (error) {
                console.log(error);
            }

        }

        handleGetStatuses();
    }, [])
    return (
        
        <div className="task-table-container">
            <div className="task-table-header">
                <h1>Manage Statuses</h1>
                <button className="add-task-btn">+ Add Status</button>
            </div>
            {!statuses && <p>Loading data..</p>}
            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {statuses && statuses.map((status,index) => (
                        <tr key={index}>
                            <td>{status.id}</td>
                            <td>{status.name}</td>
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
