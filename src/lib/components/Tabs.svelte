<script>
    import { taskList, archiveList, trashList, historyList } from "$lib/input.svelte.js";

    let { chosenTab = $bindable() } = $props();

    let lenTaskList = $derived(taskList.length);
    let lenArchiveList = $derived(archiveList.length);
    let lenTrashList = $derived(trashList.length);
    let lenHistoryList = $derived(historyList.length);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class = "tabs">
        <div class = "homeContainer" class:active={chosenTab==="Home"} onclick={() => chosenTab = "Home"}>
                <img src="home.png" class = "homeIcon" alt="Home Icon">
                <div class = "homeText">Home</div>
                <div class = "homeLength">{lenTaskList}</div>
        </div>

        <div class = "historyContainer" class:active={chosenTab==="History"} onclick={() => chosenTab = "History"}>
                <img src="history.png" class = "historyIcon" alt="History Icon">
                <div class = "historyText">History</div>
                <div class = "historyLength">{lenHistoryList}</div>
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
        border-radius: 25px;
        background-color: #1e293b;
        padding: 1.1em;
        width: 680px;
        height: 1px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.4em;
    }
    .homeContainer, .historyContainer, .trashContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        gap: 0.4em;
        padding: 0.2em;
        width: 33%;
        opacity: 0.5;
        transition: all 300ms ease;
	    transform: scale(1);
    }
    .homeContainer.active, .historyContainer.active, .trashContainer.active{
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 25px;
        background-color: #243143;
        opacity: 1;
        transform: scale(1.05);
    }
    .homeIcon, .historyIcon, .trashIcon{
        position: relative;
        top: 2.5px;
        width: 12px;
        height: 12px;
    }
    .homeText, .historyText, .trashText{
        position: relative;
        top: 1.75px;
        color: #E2E8F0;
        font-size: 0.70em;
    }
    .homeLength, .historyLength, .trashLength{
        font-size: 0.60em;
        padding: 3px;
        width: 1.5em;
        border-radius: 50px;
        background-color: #294167;
        color: #3B82F6;
        text-align: center;
    }
</style>