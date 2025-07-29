<script>
    import { taskList, archiveList, trashList } from "$lib/input.svelte.js";

    let { chosenTab = $bindable() } = $props();

    let lenTaskList = $derived(taskList.length);
    let lenArchiveList = $derived(archiveList.length);
    let lenTrashList = $derived(trashList.length);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class = "tabs">
        <div class = "homeContainer" class:active={chosenTab==="Home"} onclick={() => chosenTab = "Home"}>
                <img src="home.png" class = "homeIcon" alt="Home Icon">
                <div class = "homeText">Home</div>
                <div class = "homeLength">{lenTaskList}</div>
        </div>

        <div class = "archiveContainer" class:active={chosenTab==="Archive"} onclick={() => chosenTab = "Archive"}>
                <img src="archive.png" class = "archiveIcon" alt="Archive Icon">
                <div class = "archiveText">Archive</div>
                <div class = "archiveLength">{lenArchiveList}</div>
        </div>

        <div class = "trashContainer" class:active={chosenTab==="Trash"} onclick={() => chosenTab = "Trash"}>
                <img src="trash.png" class = "trashIcon" alt="Trash Icon">
                <div class = "trashText">Trash</div>
                <div class = "trashLength">{lenTrashList}</div>
        </div>
</div>

<style>
    .tabs {
        border: solid 0.3px;
        border-color: #334155;
        /* border-radius: 15px; */
        border-radius: 25px;
        /* border-top-left-radius: 15px;
        border-top-right-radius: 15px; */
        background-color: #1e293b;
        padding: 1.1em;
        /* padding-top: 1.1em;
        padding-bottom: 1.1em;
        padding-left: 0.35em;
        padding-right: 0.35em; */
        /* width: 46.6%; */
        width: 45%;
        height: 1px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.4em;
    }
    .homeContainer, .archiveContainer, .trashContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        gap: 0.4em;
        padding: 0.2em;
        width: 33%;
        opacity: 0.5;
    }
    .homeContainer.active, .archiveContainer.active, .trashContainer.active{
        border: solid 0.3px;
        border-color: #334155;
        /* border-radius: 10px; */
        border-radius: 25px;
        background-color: #243143;
        opacity: 1;
    }
    .homeIcon, .archiveIcon, .trashIcon{
        position: relative;
        top: 2.5px;
        width: 12px;
        height: 12px;
    }
    .homeText, .archiveText, .trashText{
        position: relative;
        top: 1.75px;
        color: #E2E8F0;
        font-size: 0.70em;
    }
    .homeLength, .archiveLength, .trashLength{
        font-size: 0.60em;
        padding: 3px;
        width: 1.5em;
        border-radius: 50px;
        background-color: #294167;
        color: #3B82F6;
        text-align: center;
    }
</style>