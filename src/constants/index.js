import{
  discordBlack,
  twitter,
  telegram,
  facebook,
  instagram,
  bag,
  winking,
  database,
  browser,
  search,
  person,
  react,
  tailwind,
  java,
  python,
  linux,
  vmware,
  stream,
  namp,
  vuetify,
  janette,
  marcell,
  robert,


} from "../assets"

 export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "/",
  },
  {
    id: "1",
    title: "Pricing",
    url: "/Prices",
  },
  {
    id: "2",
    title: "About",
    url: "/About",
  },
  {
    id: "3",
    title: "Blog",
    url: "/Blog",
  },
    {
    id: "4",
    title: "Contact",
    url: "/Contact",
  },

  {
    id: "5",
    title: "New account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const info=[
  {id: '0',
  title: 'Bring Your Own Framework',
  icon: bag,
  details:'Build your site using React, Svelte, Vue, Preact, web components, or just plain ol HTML + JavaScript.'
  },

  {id: '1',
  title: '100% Static HTML, No JS',
  icon: browser,
  details:'Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.'
  },
    {id: '2',
  title: 'On-Demand Components',
  icon: database,
  details:'Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.'
  },
    
  {id: '3',
  title: 'Broad Integration',
  icon: winking,
  details:'Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.'
  },
  
  {id: '4',
  title: 'SEO Enabled',
  icon:search,
  details:'Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!'
  },
  
  {id: '5',
  title: 'Community',
  icon:person,
  details:'Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.'
  },
];

export const icons=[
  {
    id:'0',
    icon: react,
  },
  {
    id:'1',
    icon:tailwind,
  },
  {
    id:'2',
    icon:java,
  },
  {
    id:'3',
    icon:python
  },
  {
    id:'4',
    icon: linux
  },
  {
    id:'5',
    icon:vmware
  },
  {
    id:'6',
    icon:stream
  },
  {
    id:'7',
    icon:namp
  },
  {
    id:'9',
    icon:vuetify
  },
]

export const staff=[
  {
    id:'0',
    imageurl:janette,
    name:'Janette Lynch',
    position:'Senior Director'
  },
  {
    id:'1',
    imageurl:marcell,
    name:'Marcell Ziemann',
    position:'Principal Strategist'
  },
  {
    id:'2',
    imageurl:robert,
    name:'Robert Palmer',
    position:'Marketing Engineer'
  },
]

export const Pricing=[
  {
    id:'0',
    title:'Personal',
    price:'free',
    features:[
      'Lifetime free',
      'Up to 3 users',
      'Unlimited Pages',
      'Astro Sub domain',
      'Basic Integrations',
      'Community Support'
    ]
  },
  {
    id:'1',
    title:'Startup',
    price:'$19',
    features:[
      'All Free Features',
      'Up to 20 users',
      '20 Custom domains',
      'Unlimited Collaborators',
      'Advanced Integrations',
      'Priority Support'
    ]
  },
  {
    id:'2',
    title:'Enterprise',
    price:'Custom',
    features:[
      'All Pro Features',
      'Unlimited Custom domains',
      '99.99% Uptime SLA',
      'SAML & SSO Integration',
      'Dedicated Account Manager',
      '24/7 Phone Support',
    ]
  },
]