import Header from "./components/Header.jsx";
import ManageTasks from "./components/ManageTasks.jsx";
import Priority from "./components/Priority.jsx";
import SideBar from "./components/SideBar.jsx";
import Status from "./components/Status.jsx";
import { useState } from 'react';

function App() {
    const [isTasks, setIsTasks] = useState(false);
    const [isStatuses, setIsStatuses] = useState(true);
    const [isPriority, setIsPriority] = useState(false);

    let content;

    function handleDashboard(value){
        if(value === 'tasks'){
            setIsTasks(true);
            setIsPriority(false);
            setIsStatuses(false);
            content=<ManageTasks />
        }else if(value === 'status'){
            setIsStatuses(true);
            setIsPriority(false);
            setIsTasks(false);
            content = <Status />
        }else{
            setIsPriority(true);
            setIsTasks(false);
            setIsStatuses(false);
        }
    }
    
    return (
        <>
            <Header />
            <div className="dashboard">
                <SideBar handleClick={handleDashboard}/>
                {isStatuses && <Status />}
                {isTasks && <ManageTasks />}
                {isPriority && <Priority />}
            </div>

        </>
    );

}

export default App;
