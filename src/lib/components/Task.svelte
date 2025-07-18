<script>
    import Subtask from "./task-components/Subtask.svelte";
    import AddSubtask from "./task-components/AddSubtask.svelte";
    import { tasks } from '$lib/input.js';

    let isHovered = $state(false);

    let completedSubtask = tasks[0].subtasks.filter(subtask => subtask.completed).length;
    let totalSubtasks = tasks[0].subtasks.length;
    let progressPercent = Math.round((completedSubtask / totalSubtasks) * 100);
    
</script>

<div class="taskContainer">
    <div class="taskDetails">
        <div class="titleRow"> 
            <div class="taskName">{tasks[0].name}</div>
            <div 
                class="trashIconContainer"
                on:mouseenter={() => isHovered = true}
                on:mouseleave={() => isHovered = false}
            >
                <img 
                    src={isHovered ? "trash-red.png" : "trash.png"}
                    class="trashIcon" 
                    alt="Trash icon"
                />
            </div>
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
        <div>
            <AddSubtask/>
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
        background-color: #1e293b;
    }
    .taskDetails {
        display: flex;
        flex-direction: column;
        gap: 0.75em;
        margin-top: 3px;
    }
    .titleRow {
        display: flex;
        align-items: center;
    }
    .taskName {
        color: #e2e8f0;
        font-size: 0.95em;
        flex-grow: 1;
    }
    .trashIconContainer {
        padding: 0.2em;
        border-radius: 5px;
        width: 3%;
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trashIconContainer:hover {
        background-color: #1C3373;
    }
    .trashIcon {
        width: 15px;
        height: 15px;
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
        margin-top: 0.2em;
    }
</style>