<script>
    import { dateAsName } from "$lib/settings.svelte.js";
    
    let newTaskName = $derived(dateAsName.value ? "To do: " + new Date().toLocaleDateString("en-US", {year: "numeric", month: "long", day: "2-digit"}) : "");
    let { add, close } = $props();
    let newTask = $derived(newTaskName);

    function addTask(event) {
        if (event.key === 'Enter' && newTask !== "") {
            add(newTask);
            close;
            newTask = "";
        }
    }
</script>

<div class="addNew">
    <div class="addNewRow">
        <input type="text" placeholder="Enter new task..." class="inputTask" bind:value={newTask} onkeydown={addTask}/>
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
        width: 680px;
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
        border: solid 0.3px;
        border-radius: 5px;
        border-color: #334155;
        color: #ffffff;
        font-size: 0.7em;
    }
    .addButton:hover {
        background-color: #3879E3;
    }
    .cancelButton {
        padding: 0.7em;
        background-color: #243143;
        border: solid 0.3px;
        border-radius: 5px;
        border-color: #334155;
        color: #ffffff;
        font-size: 0.7em;
    }
    .cancelButton:hover {
        background-color: #293548;
    }
</style>