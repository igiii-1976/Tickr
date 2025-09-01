<script>
    import AddNew from "./task-components/AddNew.svelte";
    import { TaskContent, taskList } from '$lib/input.svelte.js';
    import { slide } from 'svelte/transition';
    import { getProgressColor, getIconColor, computeProgress, computeTotalSubtasks, emptyTrash } from "$lib/helper.js";
    
    let { showAddNew, chosenTab } = $props();
    let addisHovered = $state(false);
    let showEmptyPopup = $state(false);

    let taskCount = $derived(computeTotalSubtasks());
    let completedTasks = $derived(computeProgress());
    let progressPercent = $derived.by(() => {
        return taskCount != 0 ? Math.round((completedTasks / taskCount) * 100) : 0}
    );

    function addNewTask(newTask) {
        const task = new TaskContent(newTask);
        taskList.push(task);
        showAddNew = false;
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="overallProgress">
    <div class="progressContainer">
        <div class="titleRow"> 
            <img src={getIconColor(progressPercent, taskCount)} class="checkIcon" alt="Checkmark icon"/>
            <div class="titleText">Overall Progress</div>
             <div class="addIconTemplate" title="{chosenTab === 'Trash' ? 'Empty Trash' : 'Add New Task'}">
                {#if chosenTab === "Trash"}
                    <div 
                        class="addIconContainer"
                        onmouseenter={() => addisHovered = true}
                        onmouseleave={() => addisHovered = false}
                        onclick={emptyTrash}
                    >
                    <img 
                        src={addisHovered ? "delete-red.png" : "delete.png"} 
                        class="addIcon" 
                        alt="Add icon"
                    />
                    </div>
                {:else}
                    <div 
                        class="addIconContainer" class:disableAdd={chosenTab !== "Home"}
                        onmouseenter={() => addisHovered = true}
                        onmouseleave={() => addisHovered = false}
                        onclick={() => showAddNew = true}
                    >
                    <img 
                        src={addisHovered ? "square-plus-green.png" : "square-plus-white.png"} 
                        class="addIcon" 
                        alt="Add icon"
                    />
                    </div>
                {/if}
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
                        style="width: {progressPercent}%; background-color: {getProgressColor(progressPercent)};"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showAddNew}
    <div class="addNewContainer" transition:slide={{ duration: 900 }}>
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
        border-radius: 15px;
        padding: 1.1em;
        width: 680px;
        background-color: #1e293b;
    }
    .progressContainer {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .titleRow {
        position: relative;
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
        position: relative;
        color: #e2e8f0;
        font-size: 0.95em;
        flex-grow: 1;
        top: 0.5px;
    }
    .addIconTemplate {
        position: relative;
        right: 26px;
        bottom: 12.5px;
    }
    .addIconContainer {
        position: absolute;
        padding: 0.7em;
        border-radius: 5px;
        width: 5px;
        height: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .addIconContainer:hover {
        background-color: #1C3373;
    }
    .addIconContainer.disableAdd {
        pointer-events: none;
        opacity: 0.6;
    }
    .addIcon {
        width: 15px;
        height: 15px;
    }
    .progressDetails {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
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