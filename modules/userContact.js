
export function userContact() {
    return `
    <div class="contact">
        <h2 class="contact__title">Contact information</h2>
        <div class="contact__wrapper">
            <div class="contact__street contact__set ">
                <i class="fa-solid fa-location-dot"></i>
                <div class="contact__text">Akershusstranda 20, 0150 Oslo, Norway</div>
            </div>
            <div class="contact__tel contact__set">
                <i class="fa-solid fa-phone"></i>
                <div class="contact__text">120-240-9600</div>
            </div>
            <div class="contact__email contact__set">
                <i class="fa-sharp fa-regular fa-envelope"></i>
                <div class="contact__text">donate@charity.org</div>
            </div>
        </div>
        <button class="btn">Get Direction</button>
    </div>
    `
}