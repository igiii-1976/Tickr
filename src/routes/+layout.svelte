<script>
    import Header from '$lib/components/Header.svelte';
    import Progress from '$lib/components/Progress.svelte';
    import Task from '$lib/components/Task.svelte';
    import AddNew from '$lib/components/AddNew.svelte';

    let { children } = $props();
</script>

<Header/>

{@render children()}

