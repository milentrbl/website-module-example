import { CardComponent } from "../components/Card.js"
import { cards } from "../constants.js"

const AboutPage = {
    render(){
        const cardList = cards.map(item=> CardComponent.render(item.iconClass,item.title,item.text)).join('')
        return `
        <div class="about">
        <div>
            <p class="pageTitle">ABOUT THE COMPANY</p>
            <p class="pageDescript">Key features of our company</p>
        </div>
        <div class="features">
            ${cardList}
        </div>
    </div> 
        `
    }
}

export default AboutPage