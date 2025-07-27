<script>
    let { subtaskList = $bindable(), subtask = $bindable() } = $props();
    
    let { isTrashHovered, isEditHovered, isSaveHovered } = $state(false);
    let { showEdit } = $state(false);

    let completed = $derived(subtask.completed);

    // Add separate files for functions
    function toggleCompletion() {
        subtask.completed = !subtask.completed;
    }

    function removeSubtask() {
        const index = subtaskList.indexOf(subtask);
        if (index !== -1) {
            subtaskList.splice(index, 1);
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            subtask.content = subtask.content;
            showEdit = false;
            isEditHovered = false;
        }
    }
    // Add separate files for functions
</script>

<div class="subtaskContainer">
    <div class="subtaskRow">
        <div class="checkbox">
            <input type="checkbox" bind:checked={completed} onchange={toggleCompletion}/>
        </div>
        {#if !showEdit}
            <div class="subtaskContent {completed ? 'strikethrough' : ''}">
                {subtask.content}
            </div>

            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div 
                class="editIconContainer"
                onmouseenter={() => isEditHovered = true}
                onmouseleave={() => isEditHovered = false}
                onclick={() => showEdit = true}
            >
                <img 
                    src={isEditHovered ? "edit-yellow.png" : "edit.png"} 
                    class="editIcon" 
                    alt="Edit icon"
                />
            </div>
        {:else}
            <input type="text" class="editSubtask" bind:value={subtask.content} onkeydown={handleKeydown}/>

            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div 
                class="saveIconContainer"
                onmouseenter={() => isSaveHovered = true}
                onmouseleave={() => isSaveHovered = false}
                onclick={() => {
                    subtask.content = subtask.content;
                    showEdit = false;
                }}
            >
                <img 
                    src={isSaveHovered ? "save-green.png" : "save.png"} 
                    class="saveIcon" 
                    alt="Save icon"
                />
            </div>
        {/if}

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class="trashIconContainer"
            onmouseenter={() => isTrashHovered = true}
            onmouseleave={() => isTrashHovered = false}
            onclick={() => removeSubtask()}
        >
            <img 
                src={isTrashHovered ? "trash-red.png" : "trash.png"} 
                class="trashIcon" 
                alt="Trash icon"
            />
        </div>
    </div>
</div>

<style>
    .subtaskContainer {
        border: solid 0.3px;
        border-color: #333f51;
        border-radius: 9px;
        padding: 0.6em;
        background-color: #333f51;
    }
    .subtaskContainer:hover {
        background-color: #3A4759;
    }
    .subtaskRow {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .checkbox {
        cursor: pointer;
    }
    .checkbox input[type="checkbox"] {
        width: 11px;
        height: 11px;
    }
    .subtaskContent {
        color: #e2e8f0;
        font-size: 0.75em;
        margin-left: 10px;
        flex-grow: 1;
    }
    .strikethrough {
        text-decoration: line-through;
        color: #94a3b8;
    }
    .editSubtask {
        flex-grow: 1;
        padding: 0.3em;
        border: solid 0.5px #334155;
        border-radius: 5px;
        background-color: #333f51;
        color: #e2e8f0;
        opacity: 0.9;
        font-size: 0.7em;
        text-indent: 10px;
        margin-right: 10px;
    }
    .editIconContainer {
        padding: 0.2em;
        border-radius: 5px;
        width: 3%;
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .editIconContainer:hover {
        background-color: #1e293b;
    }
    .editIcon {
        width: 12px;
        height: 12px;
    }
    .saveIconContainer {
        padding: 0.2em;
        border-radius: 5px;
        width: 3%;
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .saveIconContainer:hover {
        background-color: #1e293b;
    }
    .saveIcon {
        width: 12px;
        height: 12px;
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
        background-color: #1e293b;
    }
    .trashIcon {
        width: 12px;
        height: 12px;
    }
</style>