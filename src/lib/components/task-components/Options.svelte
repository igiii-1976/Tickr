<script>
    import { trashTask, archiveTask, restoreTask, deleteTask, moveToHistory } from "$lib/helper.js";

    let { task = $bindable() , showEdit = $bindable(), showOption = $bindable(), isEditHovered = $bindable() } = $props();
    let { isArchiveHovered, isTrashHovered, isSaveHovered, isRestoreHovered, isDeleteHovered, isHistoryHovered } = $state(false);
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
                title="Permanently delete"
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
                title="Edit"
            >    
                <img src={isEditHovered ? "edit-yellow.png" : "edit.png"} class="editIcon" alt="Edit icon" />
            </div>
        {:else}
            <div 
                class = "saveIconContainer" 
                onmouseenter={() => isSaveHovered = true} 
                onmouseleave={() => isSaveHovered = false}
                onclick={() => showEdit = false}
                title="Save"
            >    
                <img src={isSaveHovered ? "save-green.png" : "save.png"} class="saveIcon" alt="Save icon" />
            </div>
        {/if}

        <!-- History and Restore -->
        {#if !task.isHistory}
            <div 
                class = "historyIconContainer" 
                onmouseenter={() => isHistoryHovered = true} 
                onmouseleave={() => isHistoryHovered = false}
                onclick={() => {
                    moveToHistory(task);
                    showOption = false;
                }}
                title="Move to history"
            >
                <img 
                    src={isHistoryHovered ? "history-blue.png" : "history.png"} 
                    class="historyIcon" 
                    alt="History icon"/>
            </div>
        {:else}
            <div 
                class = "restoreIconContainer" 
                onmouseenter={() => isRestoreHovered = true} 
                onmouseleave={() => isRestoreHovered = false}
                onclick={() => { 
                    restoreTask(task);
                    showOption = false;
                }}
                title="Restore"
            >
                <img 
                    src={isRestoreHovered ? "restore-bluegreen.png" : "restore.png"} 
                    class="restoreIcon" 
                    alt="Restore icon"/>
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
                }}
                title="Archive"
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
                }}
                title="Restore"
            >
                <img 
                    src={isRestoreHovered ? "restore-bluegreen.png" : "restore.png"} 
                    class="restoreIcon" 
                    alt="Restore icon"/>
            </div>
        {/if}

        <!-- Trash and Restore -->
        {#if !task.isTrashed} 
            <div 
                class = "trashIconContainer" 
                onmouseenter={() => isTrashHovered = true} 
                onmouseleave={() => isTrashHovered = false}
                onclick={() => {
                    trashTask(task);
                    showOption = false;
                }}
                title="Trash"
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
                }}
                title="Restore"
            >
                <img 
                    src={isRestoreHovered ? "restore-bluegreen.png" : "restore.png"} 
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
        padding: 12px 9px;
        height: 0.5px;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: width 2s, height 4s;
    }
    .editIconContainer, .archiveIconContainer, .trashIconContainer, .saveIconContainer, .restoreIconContainer, .deleteIconContainer, .historyIconContainer {
        padding: 0.3em;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .editIconContainer:hover, .archiveIconContainer:hover, .trashIconContainer:hover, .saveIconContainer:hover, .restoreIconContainer:hover, .deleteIconContainer:hover, .historyIconContainer:hover {
        background-color: #202030;
    }
    .editIcon, .archiveIcon, .saveIcon, .restoreIcon, .historyIcon {
        width: 10px;
        height: 10px;
    }
    .trashIcon, .deleteIcon, .trashRestoreIcon {
        width: 11px;
        height: 11px;
    }
</style>