<script>
    import AddNew from "./task-components/AddNew.svelte";
    import { TaskContent, taskList } from '$lib/input.svelte.js';
    
    let { showAddNew } = $props();
    let addisHovered = $state(false);

    let taskCount = $derived(computeTotalSubtasks());
    let completedTasks = $derived(computeProgress());
    let progressPercent = $derived.by(() => {
        return taskCount != 0 ? Math.round((completedTasks / taskCount) * 100) : 0}
    );

    // Create a new file for functions
    function addNewTask(newTask) {
        const task = new TaskContent(newTask);
        taskList.push(task);
        showAddNew = false;
        console.log("taskList:", taskList);
    }

    function computeProgress() {
        let total = 0;
        for (const task of taskList) {
            total += task.subtasks.filter(s => s.completed).length;
        }
        return total
    }

    function computeTotalSubtasks() {
        let total = 0;
        for (const task of taskList) {
            total += task.subtasks.length;
        }
        return total;
    }
    // Create a new file for functions
</script>

<div class="overallProgress">
    <div class="progressContainer">
        <div class="titleRow"> 
            <img src="checked.png" class="checkIcon" alt="Checkmark icon"/>
            <div class="titleText">Overall Progress</div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div 
                class="addIconContainer"
                onmouseenter={() => addisHovered = true}
                onmouseleave={() => addisHovered = false}
                onclick={() => showAddNew = true}
            >
                <img src={addisHovered ? "square-plus-green.png" : "square-plus-white.png"} 
                class="addIcon" 
                alt="Add icon"/>
            </div>
        </div>
        <div class="progressDetails">
            <div class="percentRow"> 
                <div class="progressText">
                    {completedTasks} of {taskCount} tasks completed
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
    </div>
</div>

{#if showAddNew}
    <div class="addNewContainer">
        <AddNew
            add={addNewTask}
            close={() => showAddNew = false}
        />
    </div>
{/if}

<style>
    .overallProgress {
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 10px;
        padding: 1.1em;
        width: 40%;
        height: auto;
        background-color: #1e293b;
    }
    .progressContainer {
        display: flex;
        flex-direction: column;
        gap: 0.6em;
    }
    .titleRow {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .checkIcon {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
    .titleText {
        color: #e2e8f0;
        font-size: 0.95em;
        flex-grow: 1;
    }
    .addIconContainer {
        padding: 0.4em;
        border-radius: 5px;
        width: 3%;
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .addIconContainer:hover {
        background-color: #1C3373;
    }
    .addIcon {
        width: 15px;
        height: 15px;
    }
    .progressDetails {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        margin-left: 5px;
        margin-right: 5px;
    }
    .percentRow {
        display: flex;
        flex-direction: row;
        height: 20px;
        font-size: 0.90em;
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
    .addNewContainer {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>