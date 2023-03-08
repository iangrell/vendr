import { appState } from "../AppState.js";
import { SnacksController } from "../Controllers/SnackController.js";

class SnackServices{


    setActive(snackName) {
        console.log(snackName, 'set active from service')
    }

}

export const snackServices = new SnackServices()