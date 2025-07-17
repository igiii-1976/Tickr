export let tasks = [
    { 
        name: 'Complete Project Setup', 
        subtasks: [
            {content: 'Initialize repository', completed: true}, 
            {content: 'Set up development environment', completed: false}, 
            {content: 'Write documentation', completed: true}
        ],
    },
    { 
        name: 'Design UI Mockups', 
        subtasks: [
            {content: 'Create wireframes', completed: false}, 
            {content: 'Review with team', completed: false}, 
            {content: 'Finalize design', completed: false}
        ],
    },
    { 
        name: 'Implement Authentication', 
        subtasks: [
            {content: 'Set up login page', completed: false}, 
            {content: 'Integrate OAuth', completed: false}, 
            {content: 'Test authentication flow', completed: false}
        ],
    }
];