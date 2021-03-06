function rot13(str)
{
    let uppercase = str.toUpperCase()
    let result = ''
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    for (let i = 0; i < uppercase.length; i++)
    {
        let char = uppercase[i]
        let index = alphabet.indexOf(char)
        if (index != -1)
        {
            char = alphabet[(index + 13) % 26]
        }

        result += char
    }
    return result
}

console.log(rot13('aBc 123.,-)'))

function translatePigLatin(str)
{
    let vowels = 'ueoai'.split('')
    let result = ''

    let firstConsonants = ''
    for (let char of str)
    {
        if (vowels.indexOf(char) == -1)
            firstConsonants += char
        else
            break
    }
    if (firstConsonants != '')
        result = str.substr(firstConsonants.length) + firstConsonants + 'ay'
    else
        result = str + 'way'

    return result
}

console.log(translatePigLatin("schwartz"))

function pandovan(m, n)
{
    let P = 
    {
        0: 1,
        1: 1,
        2: 1,
    }

    function P1(n)
    {
        if (!P.hasOwnProperty(n))
        {
            P[n] = P1(n-2) + P1(n-3)
        }

        return P[n]
    }

    function P2(m)
    {
        if (!P.hasOwnProperty(m))
        {
            P[m] = P2(m+3) - P2(m+1)
        }

        return P[m]
    }

    let result = []

    for (let i = m; i <= n; i++)
    {
        if (i < 0) result.push(P2(i))
        else result.push(P1(i))
    }

    return result
}

console.log(pandovan(-50, 1))

let colortable = document.getElementById('ColorTable')
let boxes = colortable.getElementsByTagName('td')
for (let box of boxes)
{
    box.addEventListener('click', ()=>{
        document.body.style.backgroundColor = box.style.backgroundColor
    })
}
