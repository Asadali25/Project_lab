const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

update()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
        else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--
        }
    
        smallCups.forEach((cup, idx2) => {
            if(idx2 <= idx) {
                cup.classList.add('full')
            } else {
                cup.classList.remove('full')
            }
        })
    
        update()
    })
});



function update() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.opacity = 0
        percentage.style.height = 0
    } else {
        percentage.style.opacity = 1
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.opacity = 0
        remained.style.height = 0
    } else {
        remained.style.opacity = 1
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
