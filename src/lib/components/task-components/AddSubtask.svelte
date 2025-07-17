<script>
    let showEnterSubtask = $state(false);
</script>

{#if !showEnterSubtask}
    <button class="addSubtask" onclick={() => showEnterSubtask = true}>
        <div class="addSubtaskRow">
            <img src="plus.png" alt="Plus icon" class="plusIcon">
            <div class="addSubtaskText">Add Subtask</div>
        </div>
    </button>
{:else}
    <div class="enterSubtask">
        <input type="text" placeholder="Enter subtask..." class="inputSubtask">
        <button class="addButton">Add</button>
        <button class="cancelButton" onclick={() => showEnterSubtask = false}>Cancel</button>
    </div>
{/if}

<style>
    .addSubtask {
        width: 100%;
        height: 100%;
        border: solid 0.5px;
        border-color: #333f51;
        border-radius: 7px;
        background-color: #243143;
        padding: 0.7em;
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
    }
    .addSubtaskText {
        color: #e2e8f0;
        font-size: 0.7em;
        margin-left: 10px;
    }
    .enterSubtask {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }
    .inputSubtask {
        flex-grow: 1;
        padding: 0.7em;
        border: solid 0.5px #334155;
        border-radius: 5px;
        background-color: #1e293b;
        color: #e2e8f0;
        opacity: 0.9;
        font-size: 0.7em;
        text-indent: 10px;
    }
    .addButton {
        padding: 0.6em;
        background-color: #3b82f6;
        border-radius: 5px;
        color: #ffffff;
        font-size: 0.7em;
    }
    .cancelButton {
        padding: 0.6em;
        background-color: #d53838;
        border-radius: 5px;
        color: #ffffff;
        font-size: 0.7em;
    }
</style>