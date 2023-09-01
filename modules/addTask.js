const addTask = (taskslist, taskName) => {
    return new Promise((resolve, reject) => {
        
        const idTask = taskslist.length === 0 ? 1 : taskslist[taskslist.length-1].id + 1;

        const newTask = {
            id: idTask,
            description: taskName,
            completed: false,
        }    
        taskslist.push(newTask);
        resolve({
            status:"OK",
            code: 201,
            message: "Task successfully added",
            newTask,
        });
    });
}

module.exports = addTask;