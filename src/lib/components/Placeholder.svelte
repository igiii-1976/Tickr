<script>
    import { taskList, archiveList, trashList } from '$lib/input.svelte.js';

    let { chosenTab } = $props();

    let lenTaskList = $derived(taskList.length);
    let lenArchiveList = $derived(archiveList.length);
    let lenTrashList = $derived(trashList.length);
</script>

{#if lenTaskList === 0 && chosenTab === "Home"}
    <div class="placeholder">No active todos yet. Create your first todo above!</div>
{:else if lenArchiveList === 0 && chosenTab === "Archive"}
    <div class="placeholder">Your archive is empty. Tasks you archive will show up here for safekeeping.</div>
{:else if lenTrashList === 0 && chosenTab === "Trash"}
    <div class="placeholder">Nice and clean! No tasks in the trash — keep it that way or delete something 👀</div>
{/if}


<style>
    .placeholder {
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 10px;
        background-color: #1e293b;
        padding: 1.29em;
        width: 45%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #94a3b8;
        font-size: 0.85em;
    }
</style>