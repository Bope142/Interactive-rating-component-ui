var ratingCount = 0;
const submit = () => {
    document.querySelector('.btn-submit').addEventListener('click', () => {
        document.querySelector('.rating-result').innerHTML =`You selected ${ratingCount} out of 5`
        document.querySelector('.rating__container').classList.replace('menu-active', 'menu-hide')
        document.querySelector('.message__container').classList.replace('menu-hide', 'menu-active')
    })
}
const deselect = () => {
    document.querySelectorAll('.rating').forEach(r => r.classList.remove('rating-select'))
}
const select = (r) => {
    r.classList.add('rating-select')
}
const ratingSelect = (numberRating) => {
    ratingCount = numberRating;
    deselect();
    switch (numberRating) {
        case 1:
            select(document.querySelectorAll('.rating')[numberRating - 1])
            break;
        case 2:
            select(document.querySelectorAll('.rating')[0])
            select(document.querySelectorAll('.rating')[numberRating - 1])
            break;
        case 3:
            select(document.querySelectorAll('.rating')[0])
            select(document.querySelectorAll('.rating')[1])
            select(document.querySelectorAll('.rating')[numberRating - 1])
            break;
        case 4:
            select(document.querySelectorAll('.rating')[0])
            select(document.querySelectorAll('.rating')[1])
            select(document.querySelectorAll('.rating')[2])
            select(document.querySelectorAll('.rating')[numberRating - 1])
            break;
        case 5:
            select(document.querySelectorAll('.rating')[0])
            select(document.querySelectorAll('.rating')[1])
            select(document.querySelectorAll('.rating')[2])
            select(document.querySelectorAll('.rating')[3])
            select(document.querySelectorAll('.rating')[numberRating - 1])
            break;
    }
}
const ratingEvent = () => {
    document.querySelectorAll('.rating').forEach(ratingbtn => {
        ratingbtn.addEventListener('click', (e) => {
            ratingSelect(parseInt(e.target.innerText))
        })
    })
}

window.addEventListener('load', () => {
    submit()
    ratingEvent()
})
//Challenge by Frontend Mentor. Coded by Norbert Yemuang.
