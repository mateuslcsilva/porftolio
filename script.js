const closeFloaterDiv = () => {
    let floaterDivs = document.querySelectorAll('.floaterDiv')
    
    floaterDivs.forEach((element) => {
        element.classList.remove('floaterDivActive')
    })

}

const floaterDivActive = (index) => {
    let floaterDivs = document.querySelectorAll('.floaterDiv')

    floaterDivs.forEach((element) => {
        element.classList.remove('floaterDivActive')
    })

    floaterDivs[index].classList.add('floaterDivActive')
}