import { menuItems } from "../constants.js"
const HeaderComponent = {
    render(){
        const list = menuItems.map(item => `
            <li>
                <a href="#${item.url}">${item.title}</a>
            </li>
        `).join('');

        return `
            <nav>
                <div class="logo-container">
                   <a href="#home">Logo</a>
                </div>
                <div class="nav-list">
                    <ul>
                        ${list}
                    </ul>
                </div>
            </nav>
        `
    }
}

export default HeaderComponent