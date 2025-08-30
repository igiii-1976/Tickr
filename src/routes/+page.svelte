<script>
    import Progress from '$lib/components/Progress.svelte';
    import Task from '$lib/components/Task.svelte';
    import Tabs from '$lib/components/Tabs.svelte';
    import Placeholder from '$lib/components/Placeholder.svelte';
    import { taskList, archiveList, trashList, historyList } from '$lib/input.svelte.js';
    import { TaskContent } from '$lib/input.svelte.js';
    import { onMount } from 'svelte';

    let showAddNew = $state(false);
    let chosenTab = $state("Home");

    onMount(() => {
        const savedTasks = localStorage?.getItem("taskList");
        const savedArchive = localStorage?.getItem("archiveList");
        const savedTrash = localStorage?.getItem("trashList");
        const savedHistory = localStorage?.getItem("historyList");

        if (savedTasks) {
            const parsed = JSON.parse(savedTasks);
            taskList.length = 0; // clear current contents
            taskList.push(...parsed.map(t =>
                new TaskContent(t.name, t.subtasks, t.isArchived, t.isTrashed, t.isHistory, t.createdAt, t.completedAt)
            ));
        }
        if (savedArchive) {
            const parsed = JSON.parse(savedArchive);
            archiveList.length = 0; // clear current contents
            archiveList.push(...parsed.map(t =>
                new TaskContent(t.name, t.subtasks, t.isArchived, t.isTrashed, t.isHistory, t.createdAt, t.completedAt)
            ));
        }
        if (savedTrash) {
            const parsed = JSON.parse(savedTrash);
            trashList.length = 0; // clear current contents
            trashList.push(...parsed.map(t =>
                new TaskContent(t.name, t.subtasks, t.isArchived, t.isTrashed, t.isHistory, t.createdAt, t.completedAt)
            ));
        }

        if (savedHistory) {
            const parsed = JSON.parse(savedHistory);
            historyList.length = 0; // clear current contents
            historyList.push(...parsed.map(t =>
                new TaskContent(t.name, t.subtasks, t.isArchived, t.isTrashed, t.isHistory, t.createdAt, t.completedAt)
            ));
        }
    });
</script>

<div class="layout">
    <div class="topComponents">
        <Tabs bind:chosenTab={chosenTab}/>

        <Progress {showAddNew} {chosenTab}/>

        <Placeholder {chosenTab}/>
    </div>
    
        
    <div class="tasks">
        {#if chosenTab === "Home"}
            {#each taskList as task}
                <Task {task}/>
            {/each}
        {:else if chosenTab === "History"}
            {#each historyList as task}
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
