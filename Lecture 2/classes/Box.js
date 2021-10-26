export class Color 
{
    r
    g
    b
    a
    constructor(r, g, b, a)
    {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }

    getString()
    {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }
}

export class Box 
{
    color = new Color(0, 0, 0, 0)
    box = document.createElement('div')
    isTarget = false

    constructor()
    {
        this.setUp()
    }

    setUp()
    {
        this.box.className = 'box'
        this.box.addEventListener('click', ()=>
        {
            let event = new CustomEvent('check', 
            {
                detail: {result: this.isTarget} 
            })
            dispatchEvent(event)
        })
    }

    setColor(color)
    {
        this.color = color
        this.box.style.backgroundColor = this.color.getString()
    }

    setTarget()
    {
        this.isTarget = true
        this.color.a = 0.7
        this.setColor(this.color)
    }

    getHTML()
    {
        return this.box
    }

}