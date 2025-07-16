<script>
    import Header from '$lib/components/Header.svelte';
    import Progress from '$lib/components/Progress.svelte';
    import Task from '$lib/components/Task.svelte';
</script>

<Header/>

<Progress/>

<Task/>

<style>
    :global(body) {
        font-family: sans-serif;
        /* padding: 20px; */
        background-color: #14141f;
        color: #B2C6CF;
    }
</style>
