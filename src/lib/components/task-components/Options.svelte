<script>
    import { taskList, archiveList, trashList } from "$lib/input.svelte.js";

    let isEditHovered = $state(false);
    let isArchiveHovered = $state(false);
    let isTrashHovered = $state(false);
    let isSaveHovered = $state(false);

    let { showEdit = $bindable(), task } = $props();

    function trashTask(task) {
        const index = taskList.indexOf(task);
        if (index !== -1) {
            taskList.splice(index, 1);
            trashList.push(task);
        }
        console.log("Task trashed:", trashList);
    }

    function archiveTask(task) {
        const index = taskList.indexOf(task);
        if (index !== -1) {
            taskList.splice(index, 1);
            archiveList.push(task);
        }
        console.log("Task archived:", archiveList);
    }

</script>

<div class = "optionsContainer">
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        {#if !showEdit}
            <div 
                class = "editIconContainer" 
                onmouseenter={() => isEditHovered = true} 
                onmouseleave={() => isEditHovered = false}
                onclick={() => showEdit = true}
            >    
                <img src={isEditHovered ? "edit-yellow.png" : "edit.png"} class="editIcon" alt="Edit icon" />
            </div>
        {:else}
            <div 
                class = "saveIconContainer" 
                onmouseenter={() => isSaveHovered = true} 
                onmouseleave={() => isSaveHovered = false}
                onclick={() => showEdit = false}
            >    
                <img src={isSaveHovered ? "save-green.png" : "save.png"} class="saveIcon" alt="Save icon" />
            </div>
        {/if}
        
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class = "archiveIconContainer" 
            onmouseenter={() => isArchiveHovered = true} 
            onmouseleave={() => isArchiveHovered = false}
            onclick={() => archiveTask(task)}
        >
            <img 
                src={isArchiveHovered ? "archive-blue.png" : "archive.png"} 
                class="archiveIcon" 
                alt="Archive icon"/>
        </div>

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class = "trashIconContainer" 
            onmouseenter={() => isTrashHovered = true} 
            onmouseleave={() => isTrashHovered = false}
            onclick={() => trashTask(task)}
        >
            <img 
                src={isTrashHovered ? "trash-red.png" : "trash.png"} 
                class="trashIcon" 
                alt="Trash icon"/>
        </div>
</div>


<style>
    .optionsContainer {
        position: absolute;
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 7px;
        padding: 0.7em;
        width: 80px;
        height: 0.5px;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.7em;
    }
    .editIconContainer, .archiveIconContainer, .trashIconContainer, .saveIconContainer {
        padding: 0.3em;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .editIconContainer:hover, .archiveIconContainer:hover, .trashIconContainer:hover, .saveIconContainer:hover {
        background-color: #202030;
    }
    .editIcon, .archiveIcon, .saveIcon {
        width: 10px;
        height: 10px;
    }
    .trashIcon {
        width: 11px;
        height: 11px;
    }
</style>