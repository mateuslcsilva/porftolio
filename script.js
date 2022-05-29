let sectionActive = 0


const closeFloaterDiv = () => {
    let floaterDivs = document.querySelectorAll('.floaterDiv')

    floaterDivs.forEach((element) => {
        element.classList.remove('floaterDivActive')
    })

    resetProjectView(), 1000
}

const floaterDivActive = (index) => {
    let floaterDivs = document.querySelectorAll('.floaterDiv')

    floaterDivs.forEach((element) => {
        element.classList.remove('floaterDivActive')
    })

    resetProjectView()
    floaterDivs[index].classList.add('floaterDivActive')
}

const nextProjectButton = () => {
    switch (sectionActive) {
        case 0: {
            document.querySelector('.carroselDivTwo').classList.add('carroselDivActive')
            document.querySelector('.carroselDivOne').classList.remove('carroselDivActive')
            document.querySelector('.arrowPreviousProject').style.display = 'block'
            sectionActive++
            break
        }
        case 1: {
            document.querySelector('.carroselDivThree').classList.add('carroselDivActive')
            document.querySelector('.carroselDivTwo').classList.remove('carroselDivActive')
            document.querySelector('.arrowNextProject').style.display = 'none'
            sectionActive++
            break
        }
    }
}


const previousProjectButton = () => {
    switch (sectionActive) {
        case 1: {
            document.querySelector('.carroselDivTwo').classList.remove('carroselDivActive')
            document.querySelector('.carroselDivOne').classList.add('carroselDivActive')
            document.querySelector('.arrowPreviousProject').style.display = 'none'
            sectionActive--
            break
        }
        case 2: {
            document.querySelector('.carroselDivTwo').classList.add('carroselDivActive')
            document.querySelector('.carroselDivThree').classList.remove('carroselDivActive')
            document.querySelector('.arrowNextProject').style.display = 'block'
            sectionActive--
            break
        }
    }
}

const resetProjectView = () => {
    document.querySelector('.carroselDivTwo').classList.remove('carroselDivActive')
    document.querySelector('.carroselDivThree').classList.remove('carroselDivActive')
    document.querySelector('.carroselDivOne').classList.add('carroselDivActive')
    document.querySelector('.arrowNextProject').style.display = 'block'
    document.querySelector('.arrowPreviousProject').style.display = 'none'
    sectionActive = 0
}