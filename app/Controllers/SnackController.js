import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { snackServices } from "../Services/SnackServices.js";


function _drawSnacks() {
    console.log('drawing snacks')
    let snacks = appState.snacks
    let template = ''
    appState.snacks.forEach(s => template += s.ListTemplate)
    setHTML('snacks', template)
}


export class SnacksController {
    constructor() {
        console.log('test from snack controller')
        _drawSnacks()
    }

    // NOTE this function setActive -- when I click on a snack it will identify the snack by name, add the price of the snack to our total price variable, create a template for a 'cart' we can draw out selected snack to our cart after we select it


    // This function identifies the snack and the price
    setActive(snackName){
        console.log('selecting this snack', snackName)
        // send this function to the service
        // remember this is a button function so to select it we need to put it on the snack we want to select in the DOM
    }


    // This function this add our snack to a 'cart' 


    // This function will keep a running total of price the snacks we select
}