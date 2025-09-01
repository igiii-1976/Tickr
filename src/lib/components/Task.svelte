<script>
    import Subtask from "./task-components/Subtask.svelte";
    import AddSubtask from "./task-components/AddSubtask.svelte";
    import Options from "./task-components/Options.svelte";
    import { SubtaskContent } from "$lib/input.svelte.js";
    import { fly } from 'svelte/transition';
    import { taskList, historyList, archiveList, trashList } from "$lib/input.svelte.js";
    import { getProgressColor, isAtBottom } from "$lib/helper.js";

    let { task = $bindable() } = $props();
    let { isOptionHovered, isExpandHovered, showOption, showEdit, isEditHovered } = $state(false);
    let title = $derived((task.createdAt ? `Created at: ${new Date(task.createdAt).toLocaleString()}` : "No creation date") + "\n" +
        (task.completedAt ? `Completed at: ${new Date(task.completedAt).toLocaleString()}` : ""));

    let completedSubtask = $derived(task.subtasks.filter(subtask => subtask.completed).length);
    let totalSubtasks = $derived(task.subtasks.length);
    let progressPercent = $derived.by(() => {
        return totalSubtasks !== 0 ? Math.round((completedSubtask / totalSubtasks) * 100) : 0}
    );

    // Functions for Task component
    function addSubtask(subtask) {
        const newSubtask = new SubtaskContent(subtask);
        task.subtasks.push(newSubtask);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            showEdit = false;
            isEditHovered = false;
        }
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    function setTaskCompletionDate() {
        if (progressPercent === 100) {
            task.completedAt = new Date();
        } else {
            task.completedAt = null;
        }
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }

    function updateExpansionState() {
        if (task.isHistory) {
            localStorage.setItem("historyList", JSON.stringify(historyList));
        } else if (task.isArchived) {
            localStorage.setItem("archiveList", JSON.stringify(archiveList));
        } else if (task.isTrashed) {
            localStorage.setItem("trashList", JSON.stringify(trashList));
        } else {
            localStorage.setItem("taskList", JSON.stringify(taskList));
        }
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore event_directive_deprecated -->
<div 
    class="taskContainer" 
    class:isTrashed={task.isTrashed} 
    class:isArchived={task.isArchived} 
    class:isHistory={task.isHistory} 
    class:isAtBottom={isAtBottom(task, taskList)}
>
    <div class="taskDetails">
        <div class="titleRow">
            <!-- Task Name -->
            {#if !showEdit}
                <div class="taskName">{task.name}</div>
            {:else}
                <input type="text" class="editTaskName" bind:value={task.name} on:keydown={handleKeydown}/>
            {/if}

            <!-- Options tab -->
            {#if showOption}
                <div class="optionContainer" transition:fly={{ duration: 250 }}>
                    <Options
                        bind:task={task}
                        bind:showEdit={showEdit}
                        bind:showOption={showOption}
                        bind:isEditHovered={isEditHovered}
                    />
                </div>   
            {/if}

            <div 
                class="optionIconContainer"
                on:mouseenter={() => isOptionHovered = true}
                on:mouseleave={() => isOptionHovered = false}
                on:click={() => showOption = !showOption}
            >
                <img 
                    src={isOptionHovered ? "option-white.png" : showOption ? "option-selected.png" : "option.png"}
                    class="optionIcon" 
                    alt="Option icon"
                />
            </div>
            
            <div 
                class="expandIconContainer"
                on:mouseenter={() => isExpandHovered = true}
                on:mouseleave={() => isExpandHovered = false}
                on:click={() => {
                    task.isExpanded = !task.isExpanded;
                    updateExpansionState();
                }}
                style="margin-left: 3px;"
            >
                <img 
                    src={task.isExpanded ? "expand.png" : "collapse.png"} 
                    class="expandIcon" 
                    alt="Expand icon"
                />
            </div>
        </div>
        <div class="progressDetails" title={title}>
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
                        style="width: {progressPercent}%; background-color: {getProgressColor(progressPercent)}"
                    ></div>
                </div>
            </div>
        </div>
        {#if task.isExpanded}
            <div class="subtaskDetails" class:isTrashed={task.isTrashed} class:isArchived={task.isArchived} class:isHistory={task.isHistory}>
                {#each task.subtasks as subtask}
                    <Subtask
                        task={task}
                        subtaskList={task.subtasks} 
                        subtask={subtask}
                    />
                {/each}
            </div>
        {/if}
            <div class="addSubtask" class:isTrashed={task.isTrashed} class:isArchived={task.isArchived} class:isHistory={task.isHistory}>
                <AddSubtask
                    add={addSubtask}
                    task = {task}
                />
            </div>
    </div>
</div>

<style>
    .taskContainer {
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 15px;
        background-color: #1e293b;
        padding: 1.1em;
        width: 680px;
        transition: opacity 500ms ease, transform 500ms ease;
    }
    .taskContainer:hover {
        background-color: #1B2637;
    }
    .taskContainer.isTrashed {
        opacity: 0.6;
        transition: opacity 500ms ease, transform 500ms ease;
    }
    .taskContainer.isArchived, .taskContainer.isHistory {
        opacity: 0.8;
        transition: opacity 500ms ease, transform 500ms ease;
    }
    .taskContainer.isAtBottom {
        margin-bottom: 20px;
    }
    .taskDetails {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.75em;
        margin: 10px;
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
    .editTaskName{
        border: transparent;
        background-color: #1e293b;
        color: #e2e8f0;
        opacity: 0.9;
        font-size: 0.95em;
        width: 100%;
    }
    .editTaskName:focus {
        outline: none;
    }
    .optionContainer{
        position: relative;
        bottom: 13.5px;
        right: 135px;
    }
    .optionIconContainer, .expandIconContainer {
        padding: 0.3em;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .optionIconContainer:hover, .expandIconContainer:hover {
        background-color: #1C3373;
    }
    .optionIcon, .expandIcon {
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
        transition: width 0.3s;
        border-radius: 6px;
    }
    .subtaskDetails {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        margin-top: 0.2em;
    }
    .subtaskDetails.isTrashed, .subtaskDetails.isArchived, .subtaskDetails.isHistory, .addSubtask.isTrashed, .addSubtask.isArchived, .addSubtask.isHistory {
        pointer-events: none;
    }
</style>