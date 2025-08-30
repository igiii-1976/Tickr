export let taskList = $state([]);
export let archiveList = $state([]);
export let trashList = $state([]);
export let historyList = $state([]);

export class SubtaskContent {
	constructor(content, completed = false, createdAt = new Date(), completedAt = null) {
		this.content = $state(content);
		this.completed = $state(completed);
		this.createdAt = $state(createdAt);
		this.completedAt = $state(completedAt);
	}

	toJSON() {
		return {
			content: this.content,
			completed: this.completed,
			createdAt: this.createdAt,
			completedAt: this.completedAt
		};
	}
}

export class TaskContent {
	constructor(name, subtasks = [], isArchived = false, isTrashed = false, isHistory = false, createdAt = new Date(), completedAt = null) {
		this.name = $state(name);
		this.subtasks = $state(subtasks.map(
			st => new SubtaskContent(st.content, st.completed, st.createdAt, st.completedAt)
		));
		this.isArchived = $state(isArchived);
		this.isTrashed = $state(isTrashed);
		this.isHistory = $state(isHistory);
		this.createdAt = $state(createdAt);
		this.completedAt = $state(completedAt);
	}

	toJSON() {
		return {
			name: this.name,
			subtasks: this.subtasks.map((s) => s.toJSON()),
			isArchived: this.isArchived,
			isTrashed: this.isTrashed,
			isHistory: this.isHistory,
			createdAt: this.createdAt,
			completedAt: this.completedAt
		};
	}
}
