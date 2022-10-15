import { socials } from "../constants.js"

const HomePage = {
    render() {
        const list = socials.map(s => (
            `
            <div>${s.title}</div>
            `
        ))
        return `
        <section class="home">
            <h1>Start something that matters</h1>
            <h5>Stop wasting valuable time with projects that just isn't you</h5>
            <a href="#about">Learn more</a>
            <div class="socials">
                ${list}
            </div>
        </section>
        `
    }
}

export default HomePage