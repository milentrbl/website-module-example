export const CardComponent = {
    render(iconClass,title,text){
        return `
        <div>
            <i class="${iconClass} mrgn"></i>
            <p class="title mrgn">${title}</span>
            <p class="text mrgn">${text}</p>
        </div>
        `
    }
}

export const TeamCardComponent = {
    render(url,name,position,text,mail){
        return `
        <div>
            <img src="${url}" alt="">
            <p id="name">${name}</p>
            <p id="position">${position}</p>
            <p id="about">${text}</p>
            <a id="mail" href="mailto:${mail}">Contact</a>
        </div>`
    }
}
