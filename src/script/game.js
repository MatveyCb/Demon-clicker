let toggleShopBtn = document.querySelector(".toggle_shop")
let shop = document.querySelector(".modal-shop")
let bossEl = document.querySelector(".boss")

let allGuns = document.querySelectorAll(".shop_item")

let hpBar = document.querySelector(".HP_bar")
let hpText = document.querySelector(".HP_text")

let timerEl = document.querySelector(".timer")
let timerCount
let timer

let fullHp = 0
let currHp = 0
let hpPercent = 100
let damage = 1
let damagePercent

toggleShopBtn.addEventListener("click", () => {
    shop.classList.add("open")
})

shop.addEventListener("click", (event) =>{
    if (!event.target.closest (".shop")) {
        shop.classList.remove("open")
    }
})

function getCurrBoss() {
    let info = JSON.parse(localStorage.getItem("curr-boss-click-game"))

    if (info) {
        bossEl.innerHTML = `<img src="${info.img}" alt="${info.name}">`

        let bossElimg = document.querySelector(".boss img")
        bossElimg.style.cursor = `url(../img/hit.png), default`

        fullHp = info.hp
        currHp = info.hp
        hpText.innerHTML = `${fullHp}/${fullHp}`
        calcDamage (damage)

        timerCount = info.time
        timerEl.innerHTML = timerCount

        timer = setInterval(() => {
            if (timerCount <= 0) {
                timerCount = 0
                clearInterval(timer)
                alert("you lose")
                location.pathname = "/src/pages/bosses.html"
            }else {
                timerCount = timerCount - 1
            }
            timerEl.innerHTML = timerCount
        }, 1000)
    }
}



function calcDamage(dmg) {
    damagePercent = dmg * 100 / fullHp
}

bossEl.addEventListener("click", (event) => {
    let clickedBoss = event.target.closest("img")
    
    if (clickedBoss) {
        currHp -= damage
        hpPercent = +(hpPercent - damagePercent).toFixed(2)
        hpBar.style.width = hpPercent + "%"
        hpText.innerHTML = `${currHp}/${fullHp}`
        
        if (hpPercent < 90) {
            allGuns[1].disabled = false
        }
        
        if (hpPercent < 80) {
            allGuns[2].disabled = false
        }
        
        if (hpPercent < 70) {
            allGuns[3].disabled = false
        }
        
        if (hpPercent < 60) {
            allGuns[4].disabled = false
        }
        
        if (hpPercent < 50) {
            allGuns[5].disabled = false
        }
        
        if (hpPercent < 40) {
            allGuns[6].disabled = false
        }

        if (hpPercent < 30) {
            allGuns[7].disabled = false
        }

        if (currHp <= 0) {
            currHp = 0
            hpPercent = 0
            hpBar.style.width = 0 + "%"
            hpText.innerHTML = `${0}/${fullHp}`
            alert ("you win")
            location.pathname = "/src/pages/bosses.html"
        }
    }
})
getCurrBoss()
allGuns.forEach(gun => {
    gun.disabled = true
        
    gun.addEventListener("click", () => {

        removeActiveClass()
         gun.classList.add("active")
        damage = +gun.dataset.damage
        let cursorImg = gun.dataset.image
        
        let bossElimg = document.querySelector(".boss img")
        bossElimg.style.cursor = `url(${cursorImg}), default`

        console.log(cursorImg)
        calcDamage(damage)
        console.log(bossElimg)
    })
})

function removeActiveClass() {
    allGuns.forEach(gun => {
        gun.classList.remove("active")
    })
}

allGuns[0].disabled = false

