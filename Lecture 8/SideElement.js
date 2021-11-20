export class SideElement {
    img_url = ''
    user_name = ''
    latest_message = ''
    htmlojb

    constructor(img_url, user_name, latest_message)
    {
        this.img_url = img_url
        this.user_name = user_name
        this.latest_message = latest_message
        this.latest_message = latest_message
        this.htmlojb = document.createElement('div')
        this.htmlojb.className = 'side-element'
        let img = document.createElement('img')
        img.src = img_url
        img.className = 'avatar'
        let div = document.createElement('div')
        div.style.marginLeft = '10px'
        let username_div = document.createElement('div')
        username_div.className = "user-name"
        username_div.innerHTML = user_name
        let latest_message_div = document.createElement('div')
        latest_message_div.className = "latest-message"
        latest_message_div.innerHTML = latest_message
        div.insertAdjacentElement('beforeend', username_div)
        div.insertAdjacentElement('beforeend', latest_message_div)
        this.htmlojb.insertAdjacentElement('beforeend', img)
        this.htmlojb.insertAdjacentElement('beforeend', div)
        this.htmlojb.addEventListener('click', ()=>{
            let user_chat = document.getElementById('user-chat')
            let user_chat_avatar = document.getElementById('user-chat-avatar')
            let user_chat_name = document.getElementById('user-chat-name')
            user_chat_avatar.src = this.img_url
            user_chat_name.innerHTML = this.user_name
        })
    }

    getHTML()
    {
        return this.htmlojb
    }
}