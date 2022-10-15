import { TeamCardComponent } from "../components/Card.js"
import { teamCards } from "../constants.js"

const TeamPage = {
    render(){
        const membersList = teamCards.map(item=> TeamCardComponent.render(item.url,item.name,item.position,item.text,item.mail)).join('')
        return `
        <div class="team">
            <div>
                <p class="pageTitle">THE TEAM</p>
                <p class="pageDescript">The ones who run this company</p>
            </div>
            <div class="teamMembers">
                    ${membersList}
            </div>
        </div>
        
        `
    }
}
export default TeamPage