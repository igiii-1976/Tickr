<script>
    let checked = $state(false);
    let content = "Subtask content goes here";
</script>

<div class="subtaskContainer">
    <div class="subtaskRow">
        <div class="checkbox">
            <input type="checkbox" bind:checked={checked}>
        </div>
        <div class="subtaskContent">
            {content}
        </div>
        <div class="trashIconContainer">
            <img src="trash.png" class="trashIcon" alt="Trash icon"/>
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
        background-color: #333f51;
    }
    .subtaskContent {
        color: #e2e8f0;
        font-size: 0.8em;
        margin-left: 10px;
        flex-grow: 1;
    }
    .trashIcon {
        width: 12px;
        height: 12px;
    }
</style>