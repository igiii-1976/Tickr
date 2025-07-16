<script>
    import Subtask from "./Subtask.svelte";
    import AddSubtask from "./AddSubtask.svelte";
    import EnterSubtask from "./EnterSubtask.svelte";

    let task = 
        { 
        name: 'Complete Project Setup', 
        subtasks: [
            {content: 'Initialize repository', completed: true}, 
            {content: 'Set up development environment', completed: false}, 
            {content: 'Write documentation', completed: true}
        ],
        };

    let completedSubtask = task.subtasks.filter(subtask => subtask.completed).length;
    let totalSubtasks = task.subtasks.length;
    let progressPercent = Math.round((completedSubtask / totalSubtasks) * 100);
</script>

<div class="taskContainer">
    <div class="taskDetails">
        <div class="titleRow"> 
            <div class="taskName">{task.name}</div>
            <img src="trash.png" class="trashIcon" alt="Trash icon"/>
        </div>
        <div class="progressDetails">
            <div class="percentRow"> 
                <div class="progressText">
                    {completedSubtask} of {totalSubtasks} tasks completed
                </div>
                <div class="percentage">
                    {progressPercent}%
                </div>
            </div>
            <div class="barRow">
                <div class="progressBar">
                    <div
                        class="progressFill"
                        style="width: {progressPercent}%;"
                    ></div>
                </div>
            </div>
        </div>
        <div class="subtaskDetails">
            <Subtask/>
            <Subtask/>
            <Subtask/>
        </div>
        <div class="addSubtask">
            <AddSubtask/>
        </div>
        <div>
            <EnterSubtask/>
        </div>
    </div>

</div>

<style>
    .taskContainer {
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 10px;
        padding: 1.1em;
        width: 40%;
        margin: 0 auto;
        margin-top: 15px;
        background-color: #1e293b;
    }
    .taskDetails {
        display: flex;
        flex-direction: column;
        gap: 0.75em;
    }
    .titleRow {
        display: flex;
        align-items: center;
    }
    .taskName {
        color: #e2e8f0;
        font-size: 0.95em;
    }
    .trashIcon {
        width: 15px;
        height: 15px;
        margin-left: auto;
    }
    .progressDetails {
        display: flex;
        flex-direction: column;
        gap: 0.1em;
    }
    .percentRow {
        display: flex;
        flex-direction: row;
        height: 20px;
        font-size: 0.75em;
        justify-content: space-between;
    }
    .progressText {
        color: #94a3b8;
    }
    .percentage {
        color: #3b82f6;
        font-weight: bold;
    }
    .barRow {
        width: 100%;
    }
    .progressBar {
        width: 100%;
        height: 8px;
        background-color: #334155;
        border-radius: 6px;
        overflow: hidden;
    }
    .progressFill {
        height: 100%;
        background-color: #3b82f6;
        /* width: 0; */
        transition: width 0.3s;
        border-radius: 6px;
    }
    .subtaskDetails {
        display: flex;
        flex-direction: column;
        gap: 0.4em;
        width: 100%;
        margin-top: 0.5em;
    }
</style>