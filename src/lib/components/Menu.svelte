<script>
    import Settings from './menu-components/Settings.svelte';
    import { fly } from 'svelte/transition';

    let showMenu = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if !showMenu}
    <div class="menuTab" onclick={() => showMenu = true}>
        <img src="menu.png" alt="Menu icon" class="menuIcon">
    </div>
{:else}
    <div class="menuContainer" transition:fly={{ x: -300 , duration: 250 }}>
        <div class="header">
            <img src="settings.png" alt="Settings icon" class="settingsIcon">
            <div class="headerText">Options & Settings</div>
            <div class="exit" onclick={() => showMenu = false}>
                <img src="exit.png" alt="Exit icon" class="exitIcon">
            </div>
        </div>
        <Settings/>
    </div>

    <div class="backdrop" onclick={() => showMenu = false}></div>
{/if}




<style>
    .menuTab {
        position: absolute;
        border: solid 0.3px;
        border-radius: 7px;
        border-color: #334155;
        background-color: #1E293B;
        padding: 12px;
        top: 25px;
        left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
    .menuTab:hover {
        background-color: #1E3475;
    }
    .menuIcon {
        width: 12px;
        height: 12px;
    }
    
    .menuContainer {
        position: fixed;
        top: 0;
        left: 0;
        border-right: solid 0.3px;
        border-color: #334155;
        background-color: #1E293B;
        padding: 1.2em;
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        z-index: 998;
    }
    .header {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        top: 15px;
    }
    .settingsIcon {
        width: 17px;
        height: 17px;
    }
    .headerText {
        flex-grow: 1;
        margin-left: 7px;
        font-size: 15px;
        color: #e2e8f0;
    }
    .exit {
        position: relative;
        border: solid 0.3px;
        border-radius: 7px;
        border-color: #334155;
        background-color: #1E293B;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
    .exit:hover {
        background-color: #1E3475;
    }
    .exitIcon {
        width: 10px;
        height: 10px;
    }

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 997;
    }


    
</style>