<script>

</script>

<div class="addSubtask">
    <div class="addSubtaskRow">
        <div>
            <img src="plus.png" alt="Plus icon" class="plusIcon">
        </div>
        <div class="addSubtaskText">
            Add Subtask
        </div>
    </div>

</div>

<style>
    .addSubtask {
        border: solid 0.5px;
        border-color: #333f51;
        border-radius: 7px;
        background-color: #243143;
        padding: 0.3em;
        transition: background 0.2s, border-color 0.2s;
    }
    .addSubtask:hover {
        background-color: #334155;
        cursor: pointer;
    }
    .addSubtaskRow {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .plusIcon {
        width: 8px;
        height: 8px;
        margin-bottom: 2px;
    }
    .addSubtaskText {
        color: #e2e8f0;
        font-size: 0.7em;
        margin-left: 10px;
    }
</style>