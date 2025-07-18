<script>
    import Header from '$lib/components/Header.svelte';
    import Progress from '$lib/components/Progress.svelte';
    import Task from '$lib/components/Task.svelte';
    import AddNew from '$lib/components/AddNew.svelte';
    import { fade, slide } from 'svelte/transition';

    let showAddNew = $state(false);
</script>

<div class="layout">
    <Progress {showAddNew}/>
    <Task/>
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
