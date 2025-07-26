<script>
    import Subtask from "./task-components/Subtask.svelte";
    import AddSubtask from "./task-components/AddSubtask.svelte";
    import Options from "./task-components/Options.svelte";
    import { SubtaskContent } from "$lib/input.svelte.js";

    let { task = $bindable() } = $props();

    // Add a new file for functions
    function addSubtask(subtask) {
        const newSubtask = new SubtaskContent(subtask);
        task.subtasks.push(newSubtask);
    }
    // Add a new file for functions

    let isHovered = $state(false);
    let showOption = $state(false);
    let showEdit = $state(false);

    let completedSubtask = $derived(task.subtasks.filter(subtask => subtask.completed).length);
    let totalSubtasks = $derived(task.subtasks.length);
    let progressPercent = $derived.by(() => {
        return totalSubtasks !== 0 ? Math.round((completedSubtask / totalSubtasks) * 100) : 0}
    );
</script>

<div class="taskContainer">
    <div class="taskDetails">
        <div class="titleRow">
            <!-- Task Name -->
            {#if !showEdit}
                <div class="taskName">{task.name}</div>
            {:else}
                <input type="text" class="editTaskName" bind:value={task.name}/>
            {/if}

            <!-- Options tab -->
            {#if showOption}
                <div class="optionContainer">
                    <Options 
                        bind:showEdit={showEdit}
                        task={task}
                    />
                </div>   
            {/if}

            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore event_directive_deprecated -->
            <div 
                class="optionIconContainer"
                on:mouseenter={() => isHovered = true}
                on:mouseleave={() => isHovered = false}
                on:click={() => showOption = !showOption}
            >
                <img 
                    src={isHovered ? "option-white.png" : showOption ? "option-selected.png" : "option.png"}
                    class="optionIcon" 
                    alt="Option icon"
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
            {#each task.subtasks as subtask}
                <Subtask
                    subtaskList={task.subtasks} 
                    subtask={subtask}
                />
            {/each}
        </div>
        <div>
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
        border-radius: 10px;
        background-color: #1e293b;
        padding: 1.1em;
        width: 40%;
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
        bottom: 12px;
        right: 110px;
    }

    .optionIconContainer {
        padding: 0.3em;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .optionIconContainer:hover {
        background-color: #1C3373;
    }
    .optionIcon {
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
        gap: 0.5em;
        margin-top: 0.2em;
    }
</style>