export const projects = [
    {
        title: 'Reactivities',
        url: 'http://reactivities.nicolasnazzaro.me',
        description: 'Twitter clone based on a .NET Core webapi. The front-end is built with a react SPA developed with typescript and MobX for state management. Registration and authentication are managed through .NET Core Identity and jwt tokens. This application is designed for desktop experience only.',
        tags: ['react', 'react hooks', 'mobx', 'typescript', '.net core', 'core identity', 'webapi'],
        image: '/assets/reactivities.png',
        openSource: true,
        github: 'https://github.com/nicolasnazzaro/Reactivities'
    },
    {
        title: 'Kanban board',
        url: 'https://nicolasnazzaro.github.io/kanban-board/',
        description: 'Trello inspired kanban board, realized with react-beatiful-dnd. Lists and cards are draggable and droppable. The board state is managed through Redux and the changes are saved in local storage.',
        tags: ['react', 'react hooks', 'redux'],
        image: '/assets/kanban.png',
        openSource: true,
        github: 'https://github.com/nicolasnazzaro/kanban-board'
    },
    {
        title: 'Personal web page',
        url: '',
        description: 'Web page created with react and react-router-dom.',
        tags: ['react', 'react hooks'],
        image: '/assets/portfolio.png',
        openSource: true,
        github: 'https://github.com/nicolasnazzaro/personal-webpage'
    },
    {
        title: 'Simple To-Do app',
        url: 'https://nicolasnazzaro.github.io/to-do-app/',
        description: 'Simple to-do app create with react stateful components.',
        tags: ['react'],
        image: '/assets/todo.png',
        openSource: true,
        github: 'https://github.com/nicolasnazzaro/to-do-app'
    }
]