<script>
    import Progress from '$lib/components/Progress.svelte';
    import Task from '$lib/components/Task.svelte';
    import Tabs from '$lib/components/Tabs.svelte';
    import Placeholder from '$lib/components/Placeholder.svelte';
    import { taskList, archiveList, trashList } from '$lib/input.svelte.js';

    let showAddNew = $state(false);
    let chosenTab = $state("Home");
</script>

<div class="layout">
    <div class="topComponents">
        <Tabs bind:chosenTab={chosenTab}/>

        <Progress {showAddNew}/>

        <Placeholder {chosenTab}/>
    </div>
    
        
    <div class="tasks">
        {#if chosenTab === "Home"}
            {#each taskList as task}
                <Task {task}/>
            {/each}
        {:else if chosenTab === "Archive"}
            {#each archiveList as task}
                <Task {task}/>
            {/each}
        {:else}
            {#each trashList as task}
                <Task {task}/>
            {/each}
        {/if}
    </div>
</div>


<style>
    :global(body) {
        font-family: sans-serif;
        background-color: #0F172A;
    }
    .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .topComponents {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 13px;
        width: 100%;
        height: 100%;
    }
    .tasks {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;
        height: 100%;
    }
</style>
