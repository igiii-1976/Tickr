<script>
    let darkMode = $state(true);
    let autoHistory = $state(false);
    let dateAsName = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="settings">
    <div class="title">
        <img src="settings-white.png" alt="Settings icon" class="settingsIcon">
        <div class="titleText">General Settings</div>
    </div>
    
    <div class="settingsContent">
        <!-- Dark mode settings -->
        <div class="darkMode">
            <div class="darkModeTitle">
                <img src="moon.png" alt="Dark mode icon" class="darkModeIcon">
                <div class="avgText">Dark Mode</div>
                <div class="darkModeToggle" class:active={darkMode} onclick={() => darkMode = !darkMode}>
                    <div class="slider"></div>
                </div>
            </div>
            <div class="smallText">Toggle between light and dark theme</div>
        </div>

        <hr class="solid" style="border-top: 1px solid #bbb; width: 100%; opacity: 0.1">

        <!-- Auto move to history -->
        <div class="autoHistory">
            <div class="autoHistoryTitle">
                <img src="restore.png" alt="Auto history icon" class="autoHistoryIcon">
                <div class="avgText">Auto Move to History</div>
                <div class="autoHistoryToggle" class:active={autoHistory} onclick={() => autoHistory = !autoHistory}>
                    <div class="slider"></div>
                </div>
            </div>
            <div class="smallText">Automatically move completed todos to history</div>
        </div>

        <hr class="solid" style="border-top: 1px solid #bbb; width: 100%; opacity: 0.1">
        
        <!-- Date as default name -->
        <div class="dateAsName" style="margin-bottom: 3px;">
            <div class="dateAsNameTitle">
                <img src="calendar.png" alt="Date as name icon" class="dateAsNameIcon">
                <div class="avgText">Date as Default Name</div>
                <div class="dateAsNameToggle" class:active={dateAsName} onclick={() => dateAsName = !dateAsName}>
                    <div class="slider"></div>
                </div>
            </div>
            <div class="smallText">New tasks start with today's date as the title</div>
        </div>
    </div>
</div>

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
    .darkMode, .autoHistory, .dateAsName {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .darkModeTitle, .autoHistoryTitle, .dateAsNameTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .darkModeIcon, .autoHistoryIcon, .dateAsNameIcon {
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
</style>