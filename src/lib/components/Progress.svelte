<script>
    let tasks = [
        { title: "Task 1", completed: true },
        { title: "Task 2", completed: false },
        { title: "Task 3", completed: true }
    ];

    let taskCount = tasks.length;
    let completedTasks = tasks.filter(task => task.completed).length;
    let progressPercent = Math.round((completedTasks / taskCount) * 100);
</script>

<div class="progressContainer">
    <div class="titleRow"> 
        <img src="checked.png" class="checkIcon" alt="Checkmark icon"/>
        <div class="overallProgress">Overall Progress</div>
    </div>
    <div class="progressDetails">
        <div class="percentRow"> 
            <div class="progressText">
                {completedTasks} of {taskCount} tasks completed
            </div>
            <div class="percentage">
                {progressPercent}%
            </div>
        </div>
        <div class="barRow">
            <div class="progressBar">
                <div
                    class="progressFill"
                    style="width: {progressPercent}%;"
                ></div>
            </div>
        </div>
    </div>
</div>

<style>
    .progressContainer {
        display: flex;
        flex-direction: column;
        border: solid 0.3px;
        border-color: #334155;
        border-radius: 10px;
        padding: 1.1em;
        width: 40%;
        margin: 0 auto;
        margin-top: 25px;
        background-color: #1e293b;
        gap: 0.75em;
    }
    .titleRow {
        display: flex;
        align-items: center;
    }
    .checkIcon {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
    .overallProgress {
        color: #e2e8f0;
        font-size: 0.95em;
    }
    .progressDetails {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        margin-left: 5px;
        margin-right: 5px;
    }
    .percentRow {
        display: flex;
        flex-direction: row;
        height: 20px;
        font-size: 0.90em;
        justify-content: space-between;
    }
    .progressText {
        color: #94a3b8;
    }
    .percentage {
        color: #3b82f6;
        font-weight: bold;
    }
    .barRow {
        width: 100%;
    }
    .progressBar {
        width: 100%;
        height: 8px;
        background-color: #334155;
        border-radius: 6px;
        overflow: hidden;
    }
    .progressFill {
        height: 100%;
        background-color: #3b82f6;
        /* width: 0; */
        transition: width 0.3s;
        border-radius: 6px;
    }
</style>