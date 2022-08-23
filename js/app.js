let elSelect = $(".js-select")
let elList = $(".js-list")

function addListItem(){
    pokemons.forEach(el => {
        let elItem = creatElement("li", "class", "col-md-6 col-lg-4 col-xl-2");

        let elItemContent = creatElement("div", "class", "card bg-primary bg-gradient bg-opacity-50");
        elItemContent.setAttribute("style", "height: 320px;")

        let elItemImg = creatElement("img", "src", `${el.img}`);
        elItemImg.setAttribute("style", "width: 100%; height: 100%; object-fit: contan;");

        let elItemName = creatElement("h3", "class", "text-warning text-center mt-3", `${el.name}`);

        let elItemText = creatElement("p", "class", "text-center text-danger")

        el.weaknesses.forEach((element,i) => {
            let elItemTextContennt = creatElement("span", "class", "px-1")
            elItemTextContennt.textContent= element
            elItemText.append(elItemTextContennt);
        })

        elItemContent.append(elItemImg, elItemName, elItemText)
        elItem.appendChild(elItemContent)
        elList.appendChild(elItem);

    })
}
addListItem()

