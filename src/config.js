module.exports = {
  socialLinks: [
    {
      id: 'github',
      name: 'Github',
      url: 'https://github.com/scirocco21',
    },
    {
      id: 'linkedin-in',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebastian-gertz/',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      url: 'https://twitter.com/cryptocyclops',
    }
  ],
  pages: [
    {
      title: "Home",
      id: "/",
      icon: 'home'
    }, 
    {
      title: "Portfolio",
      id: "/portfolio",
      icon: "th"
    },
    {
      title: "Blog",
      id: "/blog",
      icon: "pencil-alt"
    },
    {
      title: "About",
      id: "/about",
      icon: "user"
    },
    {
      title: "Contact",
      id: "/contact",
      icon: 'envelope'
    }
  ],
  projects: [
    {
      name: "NYC Museums Explorer",
      desc: "Visualize Google Maps Data",
      tags: [
        "React",
        "Google Maps API",
        "Foursquare API"
      ],
      url: "https://nyc-museums-explorer.herokuapp.com",
      imgName: "museums-explorer.jpg",
      github: "https://github.com/scirocco21/react-neighbourhood-app"
    },
    {
      name: "DoubleCheck",
      desc: "React/Rails interface for Watson API, with Redux state management",
      tags: [
        "React",
        "Rails"
      ],
      url: "https://doublecheck-react-rails-app.herokuapp.com/",
      imgName: "doublecheck.png",
      github: "https://github.com/scirocco21/doublecheck-react-app"
    },
    {
      name: "Coinopoly",
      desc: "Cryptocurrency Portfolio Tracker",
      tags: [
        "Ruby",
        "JavaScript"
      ],
      url: "https://coinopoly.herokuapp.com",
      imgName: "coinopoly.jpg",
      github: "https://github.com/scirocco21/coinopoly-rails-app-with-js-frontend"
    },
    {
      name: "Biblio",
      desc: "Booknotes Manager built with Sinatra",
      tags: [
        "Sinatra",
        "Ruby"
      ],
      url: "https://biblio-sinatra-app.herokuapp.com/",
      imgName: "biblio.jpg",
      github: "https://github.com/scirocco21/biblio-app"
    },
    {
      name: "MyReads",
      desc: "Bookshelf Organizer built with React",
      tags: [
        "React"
      ],
      url: "https://myreads-bookshelf-app.herokuapp.com/",
      imgName: "myReads.jpg",
      github: "https://github.com/scirocco21/myreads-react-project"
    },
    // {
    //   name: "Pixabay Viewer",
    //   desc: "React Native Image Viewing App",
    //   tags: [
    //     "React Native",
    //     "Pixabay API"
    //   ],
    //   url: "none yet",
    //   img: "undefined"
    // },
    {
      name: "Matching Game",
      desc: "Voynich Manuscript Themed Matching Game",
      tags: [
        "JavaScript",
      ],
      url: "https://scirocco21.github.io/js-project-memory-game/",
      imgName: "voynich.jpg",
      github: "https://github.com/scirocco21/js-project-memory-game"
    }, 
    {
      name: "Bug Runner",
      desc: "Arcade Game using HTML Canvas and JavaScript",
      tags: [
        "JavaScript"
      ], 
      url: "https://scirocco21.github.io/oo-js-arcade-game/",
      imgName: "arcade-game.jpg",
      github: "https://github.com/scirocco21/oo-js-arcade-game"
    }, 
    {
      name: "Pixel Painter",
      desc: "In-broswer pixel art drawing tool",
      tags: [
        "JavaScript"
      ],
      url: "https://scirocco21.github.io/pixel-painter",
      imgName: "pixel-painter.png",
      github: "https://github.com/scirocco21/pixel-painter"
    }
  ],
  projectFilters: [
    "All",
    "React",
    "Ruby",
    "JavaScript"
  ],
  blogFilters: [
    {
      name: "All",
      iconRef: "list-alt"
    },
    {
      name: "JavaScript",
      iconRef: ["fab", "js"]
    },
    {
      name: "Coding Challenge",
      iconRef: "puzzle-piece"
    }
  ],
  skills: [
    {
      name: "React",
      iconRef: "react"
    },
    {
      name: "Javascript",
      iconRef: "javascript"
    },
    {
      name: "JQuery",
      iconRef: "jquery"
    },
    {
      name: "Node.js",
      iconRef: "nodejs"
    },
    {
      name: "NPM",
      iconRef: "npm"
    },
    {
      name: "Ruby",
      iconRef: "ruby"
    },
    {
      name: "Ruby on Rails",
      iconRef: "ror"
    },
    {
      name: "SQLite",
      iconRef: "sqllite"
    },
    {
      name: "HTML",
      iconRef: "html5"
    },
    {
      name: "CSS",
      iconRef: "css3"
    }, 
    {
      name: "Bootstrap",
      iconRef: "bootstrap"
    },
    {
      name: "SASS",
      iconRef: "sass"
    },
    {
      name: "Git",
      iconRef: "git"
    },
    {
      name: "Heroku",
      iconRef: "heroku"
    }
  ],
  experience: [
    {
      title: "Java Developer Training",
      employer: "MThree Consulting",
      dates: "02/2019-04/2019"
    },
    {
      title: "Supernumerary Teaching Fellow in Philosophy",
      employer: "St John’s College, Oxford",
      dates: "10/2012-10/2017"
    }, 
    {
      title: "Assistant Editor and Research Associate",
      employer: "King’s College London",
      dates: "09/2010⎯09/2012"
    }
  ],
  education: [
    {
      name: "Software Engineering Program",
      school: "Flatiron School",
      year: "2018"
    },
    {
      name: "Front-End Web Development Nanodegree",
      school: "Udacity",
      year: "2018"
    },
    {
      name: "PhD Classics",
      school: "University of Cambridge",
      year: "2010"
    }
  ]
}