<script>

</script>

<div class="enterSubtask">
    <input type="text" placeholder="Enter subtask..." class="inputSubtask">
    <div class="addButton">
        Add
    </div>

    <div class="cancelButton">
        Cancel
    </div>

</div>

<style>
    .enterSubtask {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5em;
    }
    .inputSubtask {
        flex-grow: 1;
        padding: 0.5em;
        border: solid 0.5px #334155;
        border-radius: 5px;
        background-color: #1e293b;
        color: #e2e8f0;
        opacity: 0.9;
        font-size: 0.7em;
        height: 1.5em;
        text-indent: 10px;
    }
    .addButton {
        padding: 0.55em;
        background-color: #3b82f6;
        border-radius: 5px;
        color: #ffffff;
        font-size: 0.75em;
        width: 25px;
        text-align: center;
    }
    .cancelButton {
        padding: 0.55em;
        background-color: #d53838;
        border-radius: 5px;
        color: #ffffff;
        font-size: 0.75em;
    }
</style>