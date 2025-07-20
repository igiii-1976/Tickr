export let taskList = $state([]);

export class SubtaskContent {
  constructor(content, completed = false) {
    this.content = $state(content);
    this.completed = $state(completed);
  }
}

export class TaskContent {
  constructor(name, subtasks = []) {
    this.name = $state(name);
    this.subtasks = $state(subtasks.map(
      st => new SubtaskContent(st.content, st.completed)
    ));
  }

  get completionPercentage() {
    const total = this.subtasks.length;
    const done = this.subtasks.filter(s => s.completed).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }
}
