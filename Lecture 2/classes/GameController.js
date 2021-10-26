import {Timer} from "./Timer.js"
import {Box, Color} from "./Box.js"

export class GameController 
{
    timer
    boxes = new Array(9)
    boxcontainer

    constructor()
    {
        this.timer = new Timer(3, 0.02)
        document.body.insertAdjacentElement('beforeend', this.timer.getHTML())

        this.boxcontainer = document.createElement('div')
        this.boxcontainer.className = 'box-container'
        document.body.insertAdjacentElement('beforeend', this.boxcontainer)

        for (let i = 0; i < 9; i++)
        {
           this.boxes[i] = new Box(this)
           this.boxcontainer.insertAdjacentElement('beforeend', this.boxes[i].getHTML())      
        }

        addEventListener('check',(e) => {this.check(e.detail.result)})
    }
    
    generateLevel()
    {
        this.resetTarget()
        let color = this.getRandomColor()
        this.timer.setColor(color)
        let bgcolor = new Color(color.r, color.g, color.b, 0.2)
        document.body.style.backgroundColor = bgcolor.getString()
        
        for (let i = 0; i < 9; i++)
        {
            this.boxes[i].setColor(color)
        }

        let target_index = Math.floor(Math.random()*this.boxes.length)
        this.boxes[target_index].setTarget()

        this.timer.reset()
        this.timer.start()
    }

    resetTarget()
    {
        for (let box of this.boxes)
        {
            box.isTarget = false
        }
    }

    getRandomColor()
    {
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)  
        let b = Math.floor(Math.random()*256)  
        let a = 1
        return new Color(r, g, b, a)
    }

    lose()
    {
        alert(":(")
    }

    check(result)
    {
        if (result) this.generateLevel()
        else this.lose()
    }
}
