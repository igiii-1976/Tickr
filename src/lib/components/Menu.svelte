<script>
    import Settings from './menu-components/Settings.svelte';
    import { fly } from 'svelte/transition';

    let showMenu = $state(false);
    let chosenTab = $state('Settings');
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if !showMenu}
    <div class="menuTab" onclick={() => showMenu = true}>
        <img src="menu.png" alt="Menu icon" class="menuIcon">
    </div>
{:else}
    <div class="menuContainer" transition:fly={{ x: -300 , duration: 250 }}>
        <div class="exit" onclick={() => showMenu = false}>
            <img src="exit.png" alt="Exit icon" class="exitIcon">
        </div>
        <div class="menuColumn">
            <!-- Header text & icon -->
            <div class="header">
                {#if chosenTab === "Settings"}
                    <img src="settings.png" alt="Settings icon" class="settingsIcon">
                    <div class="headerText">Options & Settings</div>
                {:else if chosenTab === "Progress"}
                    <img src="progress-blue.png" alt="Progress icon" class="progressIcon">
                    <div class="headerText">Progress & Analytics</div>
                {:else}
                    <img src="archive-blue.png" alt="Archive icon" class="archiveIcon" style="width: 16px; height: 16px;">
                    <div class="headerText">Archive</div>
                {/if}
            </div>

            <div class="menuContents">
            <!-- Settings / Archive tabs -->
                <div class="tabs">
                    <div class="settingsTab" class:active={chosenTab==="Settings"} onclick={() => chosenTab = "Settings"}>
                        <img src="settings-white.png" alt="Settings tab icon" class="settingsTabIcon">
                        <div class="settingsTabText">Settings</div>
                    </div>
                    <div class="progressTab" class:active={chosenTab==="Progress"} onclick={() => chosenTab = "Progress"}>
                        <img src="progress.png" alt="Progress tab icon" class="progressTabIcon">
                        <div class="progressTabText">Progress</div>
                    </div>
                    <div class="archiveTab" class:active={chosenTab==="Archive"} onclick={() => chosenTab = "Archive"}>
                        <img src="archive.png" alt="Archive tab icon" class="archiveTabIcon">
                        <div class="archiveTabText">Archive</div>
                    </div>
                </div>

                <hr class="solid" style="border-top: 1px solid #bbb; width: 100%; opacity: 0.1">

                {#if chosenTab === "Settings"}
                    <Settings/>
                {:else if chosenTab === "Progress"}
                    <!-- insert Daily progress -->
                {:else}
                    <!-- insert Archive -->
                {/if}
            </div>
        </div>
    </div>

    <div class="backdrop" onclick={() => showMenu = false}></div>
{/if}




<style>
    /* Menu and Exit Icons */
    .menuTab {
        position: fixed;
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
    .menuTab:hover, .exit:hover {
        background-color: #1E3475;
    }
    .menuIcon {
        width: 12px;
        height: 12px;
    }
    .exit {
        position: fixed;
        top: 25px;
        left: 20px;
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
    .exitIcon {
        width: 10px;
        height: 10px;
    }
    /* Menu Container */
    .menuContainer {
        position: fixed;
        top: 0;
        left: 0;
        border-right: solid 0.3px;
        border-color: #334155;
        background-color: #1E293B;
        padding: 1em;
        width: 30%;
        height: 100%;
        gap: 5px;
        overflow: auto;
        z-index: 998;
    }
    .menuColumn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
    }
    .settingsIcon, .archiveIcon, .progressIcon {
        width: 17px;
        height: 17px;
    }
    .headerText {
        margin-left: 7px;
        font-size: 15px;
        color: #e2e8f0;
    }

    .menuContents {
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    /* Settings & Archive tabs */
    .tabs {
        position: relative;
        /* width: 95%; */
        padding: 0.2em;
        border: solid 0.3px;
        border-radius: 7px;
        border-color: #334155;
        background-color: #2A3748;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .settingsTab, .archiveTab, .progressTab {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; 
        border-radius: 7px;
        width: 50%;
        height: 17px;
        padding: 5px;
        background-color: transparent;
        opacity: 0.5;
        transition: all 300ms ease;
	    transform: scale(0.95);
    }
    .settingsTab:hover, .archiveTab:hover, .progressTab:hover {
        background-color: #243B7C;
    }
    .settingsTab.active, .archiveTab.active, .progressTab.active {
        opacity: 1;
        background-color: #3A7CE6;
        transform: scale(1);
    }
    .settingsTabIcon, .archiveTabIcon, .progressTabIcon {
        width: 12px;
        height: 12px;
    }
    .settingsTabText, .archiveTabText, .progressTabText {
        font-size: 10px;
        margin-left: 5px;
        margin-top: 2px;
        color: #e2e8f0; 
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