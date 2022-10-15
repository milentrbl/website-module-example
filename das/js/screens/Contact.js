const ContactPage= {
    render(){
        return `
        <div class="contact">
            <div>
                <p class="pageTitle">CONTACT</p>
                <p class="pageDescript">Lets get in touch. Send us a message:</p>
            </div>   
            <div>
                <h3><i class='bx bxs-map contactIcon' style="font-size: 3rem;"></i>Chicago,US</h3>
                <h3><i class='bx bxs-phone contactIcon' style="font-size: 3rem;"></i></i>Phone: +00 151515</h3>
                <h3><i class='bx bx-envelope contactIcon' style="font-size: 3rem;"></i>Email: mail@mail.com</h3>
            </div>
            <div>
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="text" placeholder="Subject">
                <input type="text" placeholder="Message">
                <button>SEND MESSAGE</button>
            </div>
        </div>
        `
    }
}
export default ContactPage