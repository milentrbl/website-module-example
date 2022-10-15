import HeaderComponent from "./components/header.js";
import HomePage from "./screens/Home.js";
import AboutPage from "./screens/About.js";
import ErrorPage from "./screens/Error.js";
import TeamPage from "./screens/Team.js";
import WorkPage from "./screens/Work.js";
import ContactPage from "./screens/Contact.js";

const header = document.getElementById('header');
const root = document.getElementById('root')

const routes = {
    home: HomePage,
    about: AboutPage,
    team: TeamPage,
    work:WorkPage,
    contact:ContactPage
}

function init() {
    header.innerHTML = HeaderComponent.render()
    location.hash = '#home'
    root.innerHTML = HomePage.render()
}

document.addEventListener('DOMContentLoaded', () => { 
    init()
})

window.addEventListener('hashchange', () => {
    if(routes[location.hash.slice(1)]){
        root.innerHTML = routes[location.hash.slice(1)].render()
    } else {
        root.innerHTML = ErrorPage.render()
    }
})