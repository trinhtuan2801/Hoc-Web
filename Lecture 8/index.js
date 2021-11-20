import {SideElement} from './SideElement.js'
import {UserData} from './UserData.js'
let inputsearch = document.getElementById('searchbox')

let friend_list = document.getElementsByClassName('side-element')
let data = [
    new UserData("https://i.pinimg.com/736x/54/12/11/541211d3d6faf98854cb9b3da2373c4e.jpg", "Sad cat", "Hi"),
    new UserData("https://i.pinimg.com/474x/57/64/32/576432ab92e270631eaab49f5a78f355.jpg", "Confused Dog", "Hello?"),
    new UserData("https://i.pinimg.com/474x/57/64/32/576432ab92e270631eaab49f5a78f355.jpg", "Polite Cat", "Hello")
]

let side_friend_list = document.getElementById('side-friend-list')

for (let userdata of data)
{
    let sideelement = new SideElement(userdata.img_url, userdata.user_name, userdata.latest_message)
    side_friend_list.insertAdjacentElement('beforeend', sideelement.getHTML())
    console.log(sideelement.getHTML())
}

inputsearch.addEventListener('input', ()=>
{
    while (side_friend_list.firstChild)
    {
        side_friend_list.removeChild(side_friend_list.firstChild)
    }
    let search_name = inputsearch.value.toLocaleLowerCase()
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].user_name.toLocaleLowerCase().indexOf(search_name) != -1)
        {
            let userdata = data[i]
            let sideelement = new SideElement(userdata.img_url, userdata.user_name, userdata.latest_message)
            side_friend_list.insertAdjacentElement('beforeend', sideelement.getHTML())
        }
    } 
})

let user_chat = document.getElementById('user-chat')
let user_chat_avatar = document.getElementById('user-chat-avatar')
let user_chat_name = document.getElementById('user-chat-name')
user_chat_avatar.src = "https://i.pinimg.com/474x/57/64/32/576432ab92e270631eaab49f5a78f355.jpg"
user_chat_name.innerHTML = "Confused Dog"




