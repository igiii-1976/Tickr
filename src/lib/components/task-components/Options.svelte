<script>
    import { taskList, archiveList, trashList } from "$lib/input.svelte.js";

    let { task = $bindable() , showEdit = $bindable(), showOption = $bindable(), isEditHovered = $bindable() } = $props();

    let { isArchiveHovered, isTrashHovered, isSaveHovered, isRestoreHovered, isDeleteHovered } = $state(false);

    function trashTask(task) {
        if (task.isArchived) {
            const index = archiveList.indexOf(task);
            if (index !== -1) {
                archiveList.splice(index, 1);
                trashList.push(task);
            }
        }
        else {
            const index = taskList.indexOf(task);
            if (index !== -1) {
                taskList.splice(index, 1);
                trashList.push(task);
            }
        }        
    }

    function archiveTask(task) {
        if (task.isTrashed) {
            const index = trashList.indexOf(task);
            if (index !== -1) {
                trashList.splice(index, 1);
                archiveList.push(task);
            }
        }
        else {
            const index = taskList.indexOf(task);
            if (index !== -1) {
                taskList.splice(index, 1);
                archiveList.push(task);
            }
        }
    }

    function restoreTask(task) {
        if (task.isArchived) {
            const index = archiveList.indexOf(task);
                if (index !== -1) {
                    archiveList.splice(index, 1);
                    taskList.push(task);
                }
        }
        else if (task.isTrashed) {
            const index = trashList.indexOf(task);
                if (index !== -1) {
                    trashList.splice(index, 1);
                    taskList.push(task);
                }
        }
    }

    function deleteTask(task) {
        const index = trashList.indexOf(task);
            if (index !== -1) {
                trashList.splice(index, 1);
            }
    }
    

</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class = "optionsContainer">
        <!-- Permanently delete, Edit, and  Save -->
        {#if task.isTrashed}
            <div 
                class = "deleteIconContainer" 
                onmouseenter={() => isDeleteHovered = true} 
                onmouseleave={() => isDeleteHovered = false}
                onclick={() => {deleteTask(task); showOption = false;}}
            >
                <img 
                    src={isDeleteHovered ? "delete-red.png" : "delete.png"} 
                    class="deleteIcon" 
                    alt="Delete icon"/>
            </div>
        {:else if !showEdit}
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
        
        <!-- Archive and Restore -->
        {#if !task.isArchived}
            <div 
                class = "archiveIconContainer" 
                onmouseenter={() => isArchiveHovered = true} 
                onmouseleave={() => isArchiveHovered = false}
                onclick={() => { 
                    archiveTask(task);
                    showOption = false;
                    task.isArchived = true;
                    task.isTrashed = false;
                }}
            >
                <img 
                    src={isArchiveHovered ? "archive-blue.png" : "archive.png"} 
                    class="archiveIcon" 
                    alt="Archive icon"/>
            </div>
        {:else}
            <div 
                class = "restoreIconContainer" 
                onmouseenter={() => isRestoreHovered = true} 
                onmouseleave={() => isRestoreHovered = false}
                onclick={() => { 
                    restoreTask(task);
                    showOption = false;
                    task.isArchived = false;
                    task.isTrashed = false;
                }}
            >
                <img 
                    src={isRestoreHovered ? "restore-blue.png" : "restore.png"} 
                    class="restoreIcon" 
                    alt="Restore icon"/>
            </div>
        {/if}

        <!-- Trash and Delete Permanently -->
        {#if !task.isTrashed} 
            <div 
                class = "trashIconContainer" 
                onmouseenter={() => isTrashHovered = true} 
                onmouseleave={() => isTrashHovered = false}
                onclick={() => {
                    trashTask(task);
                    showOption = false;
                    task.isTrashed = true;
                    task.isArchived = false;
                }}
            >
                <img 
                    src={isTrashHovered ? "trash-red.png" : "trash.png"} 
                    class="trashIcon" 
                    alt="Trash icon"/>
            </div>
        {:else}
            <div 
                class = "restoreIconContainer" 
                onmouseenter={() => isRestoreHovered = true} 
                onmouseleave={() => isRestoreHovered = false}
                onclick={() => { 
                    restoreTask(task);
                    showOption = false;
                    task.isArchived = false;
                    task.isTrashed = false;
                }}
            >
                <img 
                    src={isRestoreHovered ? "restore-blue.png" : "restore.png"} 
                    class="restoreIcon" 
                    alt="Restore icon"/>
            </div>
        {/if}
        
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
    .editIconContainer, .archiveIconContainer, .trashIconContainer, .saveIconContainer, .restoreIconContainer, .deleteIconContainer {
        padding: 0.3em;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .editIconContainer:hover, .archiveIconContainer:hover, .trashIconContainer:hover, .saveIconContainer:hover, .restoreIconContainer:hover, .deleteIconContainer:hover {
        background-color: #202030;
    }
    .editIcon, .archiveIcon, .saveIcon, .restoreIcon {
        width: 10px;
        height: 10px;
    }
    .trashIcon, .deleteIcon {
        width: 11px;
        height: 11px;
    }
</style>