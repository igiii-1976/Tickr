<script>
    let { add, close } = $props();
    let newTask = $state('');
</script>

<div class="addNew">
    <div class="addNewRow">
        <input type="text" placeholder="Enter new task..." class="inputTask" bind:value={newTask}/>
        <button class="addButton" onclick={() => {
            return newTask !== '' ? add(newTask) : 0}}
        >Add</button>
        <button class="cancelButton" onclick={close}>Cancel</button>
    </div>
</div>

<style>
    .addNew {
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 10px;
        padding: 1.1em;
        width: 45%;
        background-color: #1e293b;
        display: block;
    }
    .addNewRow {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }
    .inputTask {
        flex-grow: 1;
        padding: 0.8em;
        border: solid 0.5px #334155;
        border-radius: 5px;
        background-color: #1e293b;
        color: #e2e8f0;
        opacity: 0.9;
        font-size: 0.7em;
        text-indent: 10px;
    }
    .addButton {
        padding: 0.7em;
        background-color: #3b82f6;
        border-radius: 5px;
        color: #ffffff;
        font-size: 0.7em;
    }
    .cancelButton {
        padding: 0.7em;
        background-color: #d53838;
        border-radius: 5px;
        color: #ffffff;
        font-size: 0.7em;
    }
</style>