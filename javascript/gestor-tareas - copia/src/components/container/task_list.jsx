import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = ({ task, complete }) => {
    
    
    const defaultTask1 = new Task('Example', 'Default description', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Task2', 'Default description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Task3', 'Default description3', false, LEVELS.BLOCKING)

    const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TasklistComponent will unmount')
        };
    }, [tasks]);
    
    
    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // Update the state of the component and it will update the
        // Iteration of the task in order to show the task update
        setTask(tempTasks)
        console.log('complete this task:', task);
    }

    function deleteTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTask(tempTasks);
        
    }

    function addTask(task){
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTask(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                               {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}>
                                        </TaskComponent>
                                        );
                                    }
                                )}     
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}/>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
