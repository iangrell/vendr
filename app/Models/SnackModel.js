import { appState } from "../AppState.js"

export class snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }
    get ListTemplate() {
        return `
        <div class="col-3" onclick="app.snacksController.setActive('${this.name}')">
        <h3>${this.name}</h3>
        <h5>Price: $ ${this.price}</h5>
        <img class="img-fluid snack-card" src="${this.imgUrl}" title="${this.name}" alt="">
        </div>
        `
    }
}