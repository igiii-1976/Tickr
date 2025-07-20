<script>
    import Progress from '$lib/components/Progress.svelte';
    import Task from '$lib/components/Task.svelte';
    import { taskList } from '$lib/input.svelte.js';

    let showAddNew = $state(false);

</script>

<div class="layout">
    <Progress {showAddNew}/>

    {#each taskList as task}
        <Task {task}/>
    {/each}
</div>


<style>
    :global(body) {
        font-family: sans-serif;
        background-color: #14141f;
    }
    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
</style>
