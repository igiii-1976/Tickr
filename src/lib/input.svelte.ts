export let taskList = $state([]);
export let archiveList = $state([]);
export let trashList = $state([]);

export class SubtaskContent {
  constructor(content, completed = false) {
    this.content = $state(content);
    this.completed = $state(completed);
  }
}

export class TaskContent {
  constructor(name, subtasks = [], archived = false, trashed = false) {
    this.name = $state(name);
    this.subtasks = $state(subtasks.map(
      st => new SubtaskContent(st.content, st.completed)
    ));
    this.archived = $state(archived);
    this.trashed = $state(trashed);
  }

  get completionPercentage() {
    const total = this.subtasks.length;
    const done = this.subtasks.filter(s => s.completed).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }
}
