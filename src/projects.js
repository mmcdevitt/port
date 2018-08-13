const projects = [
  {
    id: 1, 
    name: 'SpreadsheetJS', 
    description: 'Development of a spreadsheet application with React and Redux',
    stack: 'react, redux, nodeJS, express',
    link: 'http://thrice.herokuapp.com',
    github: 'https://github.com/mmcdevitt/spreadsheets/tree/master/client',
    deployed: false,
    img: '',
  },
  {
    id: 2, 
    name: 'Thrice', 
    description: "Created a peer-to-peer e-commerce platform for men's clothing with Ruby on Rails",
    stack: 'ruby, ruby on rails, postgreSQL',
    link: 'http://www.thriceclothing.com',
    github: 'https://github.com/mmcdevitt/thrice',
    deployed: true,
    img: `${process.env.PUBLIC_URL}/thrice.jpg`,
  },
  {
    id: 3, 
    name: 'GamesStacked', 
    description: 'Development of shopping cart functionality of an e-commerce website during Fullstack Academy',
    stack: 'react, redux, postgreSQL, nodeJS, express, stripe',
    link: 'http://gamesstacked.herokuapp.com',
    github: 'https://github.com/Seal-Team-Six/gamesstacked',
    deployed: true,
    img: `${process.env.PUBLIC_URL}/gamesstacked.jpg`,
  },
  {
    id: 4, 
    name: 'Thelius Capital File Sharing', 
    description: 'Creation of a file sharing system for Thelius Capital and Institutional Investors with Ruby on Rails',
    stack: 'commercial real estate, ruby, ruby on rails, postgreSQL, aws',
    github: 'https://github.com/mmcdevitt/eastgate',
    link: 'http://thrice.herokuapp.com',
    deployed: false,
    img: `${process.env.PUBLIC_URL}/thelius.jpg`,
  }
]

export default projects;