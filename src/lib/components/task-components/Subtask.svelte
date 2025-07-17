<script>
    let checked = $state(false);
    let isTrashHovered = $state(false);
    let content = "Subtask content goes here";
</script>

<div class="subtaskContainer">
    <div class="subtaskRow">
        <div class="checkbox">
            <input type="checkbox" bind:checked={checked}>
        </div>
        <div class="subtaskContent {checked ? 'strikethrough' : ''}">
            {content}
        </div>
        <div 
            class="trashIconContainer"
            on:mouseenter={() => isTrashHovered = true}
            on:mouseleave={() => isTrashHovered = false}
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
    .strikethrough {
        text-decoration: line-through;
        color: #94a3b8;
    }
    .trashIcon {
        width: 12px;
        height: 12px;
    }
</style>