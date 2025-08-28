<script>
    import Header from '$lib/components/Header.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import { taskList, archiveList, trashList } from '$lib/input.svelte.js';

    let { children } = $props();
    
    let lenTaskList = $derived(taskList.length);
    let lenArchiveList = $derived(archiveList.length);
    let lenTrashList = $derived(trashList.length);
    let isNotEmpty = $derived(lenTaskList !== 0 || lenArchiveList !== 0 || lenTrashList !== 0);
</script>

<div class="layout" class:isNotEmpty={isNotEmpty}>
    <Menu/>
    
    <Header/>

    {@render children()} 
</div>

<style>
    @keyframes homeNotEmpty {
        from {top: 100px;}
        to {top: 0px;}
    }
    @keyframes homeEmpty {
        from {top: 0px;}
        to {top: 100px;}
    }
    .layout {
        position: relative;
        top: 100px;
        animation-name: homeEmpty;
        animation-duration: 0.5s;
    }
    .layout.isNotEmpty {
        top: 0;
        animation-name: homeNotEmpty;
        animation-duration: 1s;
    }
</style>


