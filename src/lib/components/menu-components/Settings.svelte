<script>
    import { darkMode, autoHistory, dateAsName } from "$lib/settings.svelte.js";
    
    let showDeleteConfirm = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="settings">
    <div class="title">
        <img src="settings-white.png" alt="Settings icon" class="settingsIcon">
        <div class="titleText">General Settings</div>
    </div>
    
    <div class="settingsContent">
        <!-- Dark mode -->
        <div class="darkMode">
            <div class="darkModeTitle">
                <img src="moon.png" alt="Dark mode icon" class="darkModeIcon">
                <div class="avgText">Dark Mode</div>
                <div 
                    class="darkModeToggle" 
                    class:active={darkMode.value} 
                    onclick={() => {
                        darkMode.value = !darkMode.value;
                        localStorage.setItem("darkMode", JSON.stringify(darkMode));
                    }}>
                    <div class="slider"></div>
                </div>
            </div>
            <div class="smallText">Toggle between light and dark theme.</div>
        </div>

        <hr class="solid" style="border-top: 1px solid #bbb; width: 100%; opacity: 0.1">

        <!-- Auto move to history -->
        <div class="autoHistory">
            <div class="autoHistoryTitle">
                <img src="history.png" alt="Auto history icon" class="autoHistoryIcon">
                <div class="avgText">Auto Move to History</div>
                <div 
                    class="autoHistoryToggle" 
                    class:active={autoHistory.value} 
                    onclick={() => {
                        autoHistory.value = !autoHistory.value;
                        localStorage.setItem("autoHistory", JSON.stringify(autoHistory));
                    }}>
                    <div class="slider"></div>
                </div>
            </div>
            <div class="smallText">Automatically move completed todos to history.</div>
        </div>

        <hr class="solid" style="border-top: 1px solid #bbb; width: 100%; opacity: 0.1">
        
        <!-- Date as default name -->
        <div class="dateAsName">
            <div class="dateAsNameTitle">
                <img src="calendar.png" alt="Date as name icon" class="dateAsNameIcon">
                <div class="avgText">Date as Default Name</div>
                <div 
                    class="dateAsNameToggle" 
                    class:active={dateAsName.value} 
                    onclick={() => {
                        dateAsName.value = !dateAsName.value;
                        localStorage.setItem("dateAsName", JSON.stringify(dateAsName));
                    }}>
                    <div class="slider"></div>
                </div>
            </div>
            <div class="smallText">New tasks start with today's date as the title.</div>
        </div>

        <hr class="solid" style="border-top: 1px solid #bbb; width: 100%; opacity: 0.1">

        <!-- Delete all data -->
        <div class="deleteAll" style="margin-bottom: 2px;">
            <div class="deleteAllTitle">
                <img src="delete-red.png" alt="Delete all icon" class="deleteAllIcon">
                <div class="avgText" style="color: #DC2626;">Delete All Data</div>
            </div>
            <div class="smallText" style="margin-bottom: 2px">This will permanently delete all todos, progress data, and reset all settings. This action cannot be undone.</div>
            <div class="deleteAllBox" onclick={() => showDeleteConfirm = true}>
                <img src="trash.png" alt="Trash icon" style="width: 11px; height: 11px;">
                <div class="deleteText" style="margin-left: 5px; font-size: 11px; color: white;">Delete all data</div>
            </div>
        </div>
    </div>
</div>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if showDeleteConfirm}
    <div class="backdrop" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1000;"></div>

    <div class="deleteAllPopup">
        <div class="deleteAllPopupTitle" style="font-size: 14px; font-weight: bold; color: black; margin-top: 2px;">Are you absolutely sure?</div>
        <div class="deleteAllPopupSmallText" style="font-size: 11px; color: black; opacity: 0.6; line-height: 1.4; margin-top: 2px;">
            This action cannot be undone. This will permanently delete all your todos.<br>
            Progress history, and reset all settings to their defaults.
        </div>
        <div class="deleteButtons">
            <div class="cancelButton" onclick={() => showDeleteConfirm = false}>Cancel</div>
            <div class="deleteButton" style="background-color: #DC2626; color: white">Delete everything</div>
        </div>
        
    </div>
{/if}

<style>
    .settings {
        padding: 25px;
        background-color: transparent;
        border: solid 0.3px #334155;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 25px;
    }
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .settingsIcon {
        width: 13px;
        height: 13px;
    }
    .titleText {
        margin-left: 7px;
        font-size: 13px;
        color: #e2e8f0;
    }

    /* Text format for settings content */
    .smallText {
        font-size: 10px;
        color: #94A3B8;
    }
    .avgText {
        flex-grow: 1;
        margin-left: 7px;
        font-size: 11px;
        color: #e2e8f0;
    }

    /* Settings content */
    .settingsContent {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }
    .darkMode, .autoHistory, .dateAsName, .deleteAll {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .darkModeTitle, .autoHistoryTitle, .dateAsNameTitle, .deleteAllTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .darkModeIcon, .autoHistoryIcon, .dateAsNameIcon, .deleteAllIcon {
        width: 12px;
        height: 12px;
    }
    .darkModeToggle, .autoHistoryToggle, .dateAsNameToggle {
        position: relative;
        width: 27px;
        height: 14px;
        border: solid 0.3px #334155;
        border-radius: 10px;
        background-color: #2F3C50;
    }
    .slider {
        position: absolute;
        left: 0;      
        top: 0;
        bottom: 0;
        width: 50%;
        height: 100%;
        border-radius: 50%;
        background-color: white;
        transition: transform 0.25s ease;
    }
    .darkModeToggle.active, .autoHistoryToggle.active, .dateAsNameToggle.active {
        background-color: #3A7CE6;
    }
    .darkModeToggle.active .slider, .autoHistoryToggle.active .slider, .dateAsNameToggle.active .slider {
        transform: translateX(13px);
    }
    .deleteAllBox {
        width: 100%;
        height: 25px;
        border-radius: 5px;
        background-color: #90272F;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center; 
    }
    .deleteAllBox:hover {
        opacity: 0.9;
        cursor: pointer;
    }
    .deleteAllPopup {
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 25px;
        background-color: white;
        border: solid 0.3px #334155;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        z-index: 1001;
    }
    .deleteButtons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 7px;
    }
    .cancelButton, .deleteButton {
        padding: 9px;
        border-radius: 7px;
        font-size: 11px;
        margin-top: 5px;
        background-color: transparent; 
        border: solid 0.3px #E2E8F0;
    }
    .cancelButton:hover {
        background-color: #F1F5F9;
        cursor: pointer;
    }
    .deleteButton:hover {
        opacity: 0.9;
        cursor: pointer;
    }
</style>