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
      imgName: "museums-explorer.jpg"
    },
    {
      name: "Coinopoly",
      desc: "Cryptocurrency Portfolio Tracker",
      tags: [
        "Ruby",
        "React"
      ],
      url: "https://coinopoly.herokuapp.com",
      imgName: "coinopoly.jpg"
    },
    {
      name: "Biblio",
      desc: "Booknotes Manager built with Sinatra",
      tags: [
        "Sinatra",
        "Ruby"
      ],
      url: "https://biblio-sinatra-app.herokuapp.com/",
      imgName: "biblio.jpg"
    },
    {
      name: "MyReads",
      desc: "Bookshelf Organizer built with React",
      tags: [
        "React"
      ],
      url: "https://myreads-bookshelf-app.herokuapp.com/",
      imgName: "myReads.jpg"
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
      url: "coming soon",
      imgName: "voynich.jpg"
    }
  ],
  filters: [
    "All",
    "React",
    "Ruby",
    "JavaScript"
  ]
}