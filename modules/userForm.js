
export function userForm() {
    return `
    <div class="user">
        <div class="container">
            <div class="user__descr">
                <div class="user__title">Contact form</div>
                <div class="user__subtitle">Or, you can send an email: <a href="mailto:info@charity.org">info@charity.org</a></div>
                <form action="#">
                    <div class="form__flex">
                        <input type="text" class="name" placeholder="name">
                        <input type="text" class="lastname" placeholder="last name">    
                    </div>
                    <input type="email" class="email" placeholder="email">
                    <textarea name="text" id="textarea" cols="30" rows="10" class="text" placeholder="What can we help you?"></textarea>
                    <button class="btn btn__length">Send Message</button>
                </form>
            </div>
        </div>
    </div>
    `
}