let bossesBtn = document.querySelectorAll(".boss_list-btn")

let bossListArray = [
    {
        id: 1,
        name: "Dragon",
        hp: 2000,
        img: "../img/dragon.png",
        time: 60
    },
    {
        id: 2,
        name: "Pudge",
        hp: 3000,
        img: "../img/pudge.png",
        time: 80
    },
    {
        id: 3,
        name: "El Primo",
        hp: 4000,
        img: "../img/el-primo.png",
        time: 100
    },
    {
        id: 4,
        name: "Kaido",
        hp: 5000,
        img: "../img/kaido.png",
        time: 120
    },
    {
        id: 5,
        name: "Kratos",
        hp: 6000,
        img: "../img/kratos.png",
        time: 140
    },
]

bossesBtn.forEach(bossBtn => {
    bossBtn.addEventListener("click", () => {
        let bossId = +bossBtn.dataset.bossid
        let index = bossListArray.findIndex(el => el.id === bossId)

        if (index >= 0) {
            saveCurrBossInfo(bossListArray[index])
            location.pathname = "/src/pages/game.html"
        }
    })
})

function saveCurrBossInfo(data) {
    localStorage.setItem("curr-boss-click-game", JSON.stringify(data))
}