export let taskList = $state([]);
export let archiveList = $state([]);
export let trashList = $state([]);

export class SubtaskContent {
	constructor(content, completed = false) {
		this.content = $state(content);
		this.completed = $state(completed);
	}

	toJSON() {
		return {
			content: this.content,
			completed: this.completed
		};
	}
}

export class TaskContent {
	constructor(name, subtasks = [], isArchived = false, isTrashed = false) {
		this.name = $state(name);
		this.subtasks = $state(subtasks.map(
			st => new SubtaskContent(st.content, st.completed)
		));
		this.isArchived = $state(isArchived);
		this.isTrashed = $state(isTrashed);
	}

	toJSON() {
		return {
			name: this.name,
			subtasks: this.subtasks.map((s) => s.toJSON()),
			isArchived: this.isArchived,
			isTrashed: this.isTrashed
		};
	}
}
