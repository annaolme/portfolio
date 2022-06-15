import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: '', // e.g: 'Name | Developer'
    lang: '', // e.g: en, es, fr, jp
    description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: ' ',
    name: 'Anna Olme',
    subtitle: 'Junior web developer',
    cta: '',
};

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: 'I am self tought front-end developer who is passionate about building awesome website’s and application’s! On personal level, I am self-driven & hard working, I am able to adapt very quick and overall I am very curious. Also, I am really friendly who can fit in any team.',
    paragraphTwo: 'My current skills:',
    paragraphThree: 'HTML, CSS, JavaScript (ES2015), Bootstrap, jQuery, API, EJS, React, C# and .NET, NodeJS, Express, MongoDB, Mongoose, Gatsby, Git Version Control, Heroku, Authentication & Security',
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'project.jpg',
        title: 'Favourite restaurants in Espoo',
        info: 'I decided to make web page responsive with dinamically populated content by JavaScript. To make it easier to update info on the website when needed.',
        info2: 'Technology used: HTML, CSS, JavaScript.',
        url: 'https://annaolme.github.io/favourite-restaurants/',
        repo: 'https://github.com/annaolme/favourite-restaurants', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project2.jpg',
        title: 'To Do List',
        info: 'Built with HTML, CSS, JavaScript, React, NodeJS, and deployed with Heroku.',
        info2: '',
        url: 'https://heroku-todolist-april.herokuapp.com/',
        repo: 'https://github.com/annaolme/To-Do-List', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'project3.jpg',
        title: 'Simon Game',
        info: 'Online version of Simon Game',
        info2: '',
        url: 'https://annaolme.github.io/Simon-game/',
        repo: 'https://github.com/annaolme/Simon-game', // if no repo, the button will not show up
    },
];

// CONTACT DATA
export const contactData = {
    cta: '',
    btn: '',
    email: '',
};

// FOOTER DATA
export const footerData = {
    networks: [,
        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/annaolme/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/annaolme',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};