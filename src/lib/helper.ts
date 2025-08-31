import { taskList, archiveList, trashList, historyList } from "$lib/input.svelte.js";

// Functions for Task.svelte
export function getProgressColor(progressPercent) {
    if (progressPercent <= 25) {
        return "#F79022";
    } else if (progressPercent <= 50) {
        return "#F7D124";
    } else if (progressPercent <= 75) {
        return "#17D948";
    } else {
        return "#3b82f6";
    }
}

export function isAtBottom(item, array) {
    return array.length > 0 && array[array.length - 1] === item;
}


// Functions for Progress.svelte
export function computeProgress() {
    let total = 0;
    for (const task of taskList) {
        total += task.subtasks.filter(s => s.completed).length;
    }
    return total
}

export function computeTotalSubtasks() {
    let total = 0;
    for (const task of taskList) {
        total += task.subtasks.length;
    }
    return total;
}

export function getIconColor(progressPercent, taskCount) {
    if (taskCount == 0) {
        return "checked.png";
    } else if (progressPercent <= 25) {
        return "checked-orange.png";
    } else if (progressPercent <= 50) {
        return "checked-yellow.png";
    } else if (progressPercent <= 75) {
        return "checked-green.png";
    } else {
        return "checked.png";
    }
}


// Functions for Options.svelte
export function trashTask(task) {
    if (task.isArchived) {
        const index = archiveList.indexOf(task);
        if (index !== -1) {
            task.isTrashed = true;
            task.isArchived = false;
            task.isHistory = false;
            task.isExpanded = false;
            trashList.push(task);
            localStorage.setItem("trashList", JSON.stringify(trashList)); 
            setTimeout(() => {
                archiveList.splice(index, 1);
                localStorage.setItem("archiveList", JSON.stringify(archiveList));
            }, 500);
        }
    } else if (task.isHistory) {
        const index = historyList.indexOf(task);
        if (index !== -1) {
            task.isTrashed = true;
            task.isArchived = false;
            task.isHistory = false;
            task.isExpanded = false;
            trashList.push(task);
            localStorage.setItem("trashList", JSON.stringify(trashList)); 
            setTimeout(() => {
                historyList.splice(index, 1);
                localStorage.setItem("historyList", JSON.stringify(historyList));
            }, 500);
        }
    } else {
        const index = taskList.indexOf(task);
        if (index !== -1) {
            task.isTrashed = true;
            task.isArchived = false;
            task.isHistory = false;
            task.isExpanded = false;
            trashList.push(task);
            localStorage.setItem("trashList", JSON.stringify(trashList)); 
            setTimeout(() => {
                taskList.splice(index, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            }, 500);
        }
    }
}

export function archiveTask(task) {
    if (task.isTrashed) {
        const index = trashList.indexOf(task);
        if (index !== -1) {
            task.isArchived = true;
            task.isTrashed = false;
            task.isHistory = false;
            task.isExpanded = false;
            archiveList.push(task);
            localStorage.setItem("archiveList", JSON.stringify(archiveList));
            setTimeout(() => {
                trashList.splice(index, 1);
                localStorage.setItem("trashList", JSON.stringify(trashList));   
            }, 500);
        }
    } else if (task.isHistory) {
        const index = historyList.indexOf(task);
        if (index !== -1) {
            task.isArchived = true;
            task.isTrashed = false;
            task.isHistory = false;
            task.isExpanded = false;
            archiveList.push(task);
            localStorage.setItem("archiveList", JSON.stringify(archiveList));
            setTimeout(() => {
                historyList.splice(index, 1);
                localStorage.setItem("historyList", JSON.stringify(historyList));   
            }, 500);
        }
    } else {
        const index = taskList.indexOf(task);
        if (index !== -1) {
            task.isArchived = true;
            task.isTrashed = false;
            task.isHistory = false;
            task.isExpanded = false;
            archiveList.push(task);
            localStorage.setItem("archiveList", JSON.stringify(archiveList));
            setTimeout(() => {
                taskList.splice(index, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            }, 500);
        }
    }
}
    
export function restoreTask(task) {
    if (task.isArchived) {
        const index = archiveList.indexOf(task);
        if (index !== -1) {
            task.isArchived = false;
            task.isTrashed = false;
            task.isHistory = false;
            task.isExpanded = true;
            taskList.push(task);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            setTimeout(() => {
                archiveList.splice(index, 1);
                localStorage.setItem("archiveList", JSON.stringify(archiveList));
            }, 500);
        }
    } else if (task.isTrashed) {
        const index = trashList.indexOf(task);
        if (index !== -1) {
            task.isArchived = false;
            task.isTrashed = false;
            task.isHistory = false;
            task.isExpanded = true;
            taskList.push(task);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            setTimeout(() => {
                trashList.splice(index, 1);
                localStorage.setItem("trashList", JSON.stringify(trashList)); 
            }, 500);
        }
    } else {
        const index = historyList.indexOf(task);
        if (index !== -1) {
            task.isArchived = false;
            task.isTrashed = false;
            task.isHistory = false;
            task.isExpanded = true;
            taskList.push(task);
            localStorage.setItem("taskList", JSON.stringify(taskList));
            setTimeout(() => {
                historyList.splice(index, 1);
                localStorage.setItem("historyList", JSON.stringify(historyList)); 
            }, 500);
        }
    }
}

export function moveToHistory(task) {
    if (task.isTrashed) {
        const index = trashList.indexOf(task);
        if (index !== -1) {
            task.isHistory = true;
            task.isTrashed = false;
            task.isArchived = false;
            task.isExpanded = false;
            historyList.push(task);
            localStorage.setItem("historyList", JSON.stringify(historyList));
            setTimeout(() => {
                trashList.splice(index, 1);
                localStorage.setItem("trashList", JSON.stringify(trashList));   
            }, 500);
        }
    } else if (task.isArchived) {
        const index = archiveList.indexOf(task);
        if (index !== -1) {
            task.isHistory = true;
            task.isTrashed = false;
            task.isArchived = false;
            task.isExpanded = false;
            historyList.push(task);
            localStorage.setItem("historyList", JSON.stringify(historyList));
            setTimeout(() => {
                archiveList.splice(index, 1);
                localStorage.setItem("archiveList", JSON.stringify(archiveList));   
            }, 500);
        }
    } else {
        const index = taskList.indexOf(task);
        if (index !== -1) {
            task.isHistory = true;
            task.isTrashed = false;
            task.isArchived = false;
            task.isExpanded = false;
            historyList.push(task);
            localStorage.setItem("historyList", JSON.stringify(historyList));
            setTimeout(() => {
                taskList.splice(index, 1);
                localStorage.setItem("taskList", JSON.stringify(taskList));
            }, 500);
        }
    }
}

export function deleteTask(task) {
    const index = trashList.indexOf(task);
    if (index !== -1) {
        trashList.splice(index, 1);
        localStorage.setItem("trashList", JSON.stringify(trashList)); 
    }
}


// Functions for Subtask.svelte
export function removeSubtask(subtask, subtaskList) {
    const index = subtaskList.indexOf(subtask);
    if (index !== -1) {
        subtaskList.splice(index, 1);
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
}