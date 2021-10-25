class Timer
{
    maxtime = 0
    time = 0
    interval = 0
    time_step = 0
    progress_bar = document.createElement('div')
    bar = document.createElement('div')
    game

    constructor(maxtime, time_step, game)
    {
        this.setUp()
        this.maxtime = maxtime
        this.time_step = time_step
        this.time = maxtime
        this.game = game
    }

    setUp()
    {
        this.progress_bar.className = "progressbar"
        let barframe = document.createElement('div')
        barframe.className = "barframe"
        this.bar.className = "bar"
        this.progress_bar.insertAdjacentElement('beforeend', this.bar)
        this.progress_bar.insertAdjacentElement('beforeend', barframe)
    }

    setTime(time)
    {
        this.time = time
        this.bar.style.width = (this.time / this.maxtime * 100) + '%'
    }

    start()
    {
        this.interval = setInterval(()=>
        {
            this.setTime(this.time - this.time_step)
            if (this.time <= 0)
            {
                this.stop()
                this.game.check(false)
            } 
        }, this.time_step*1000)
    }

    setColor(color)
    {
        this.bar.style.backgroundColor = color.getString()
    }

    stop()
    {
        clearInterval(this.interval)
    }

    reset()
    {
        this.stop()
        this.setTime(this.maxtime)
    }

    getHTML()
    {
        return this.progress_bar
    }

}

export {Timer}