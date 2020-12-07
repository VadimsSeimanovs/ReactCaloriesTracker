/*
    This class will collect lall the information about the item that is being scanner ort retirieved fromn the database
    It will also be used to push the data that has been identified or entered by the user as the new item
*/


var barcodeId;
var name;

//Per 100g
var energy;
var fat;
var carbs;
var sugar;
var fiber;
var protein;
var salt;

export default class Item extends React.Component{
    init(){
        barcodeId = '';
        name = '';
        energy = '';
        fat = '';
        carbs = '';
        sugar = '';
        fiber = '';
        protein = '';
        salt = '';
    }

    static setBarcodeId(itemBarcodeId){
        barcodeId = itemBarcodeId;
    }

    static setName(itemName){
        name = itemName;
    }

    static setEnergy(itemEnergy){
        energy = itemEnergy;
    }

    static setFat(itemFat){
        fat = itemFat;
    }

    static setCarbs(itemCarbs){
        carbs = itemCarbs;
    }

    static setSugar(itemSugar){
        sugar = itemSugar;
    }

    static setFiber(itemFiber){
        fiber = itemFiber;
    }

    static setProtein(itemProtein){
        protein = itemProtein;
    }

    static setSalt(itemSalt){
        salt = itemSalt;
    }

    static getBarcodeId(){
        return barcodeId;
    }

    static getName(){
        return name;
    }

    static getEnergy(){
        return energy;
    }

    static getFat(){
        return fat;
    }

    static getCarbs(){
        return carbs;
    }

    static getSugar(){
        return sugar;
    }

    static getFiber(){
        return fiber;
    }

    static getProtein(){
        return protein;
    }

    static getSalt(){
        return salt;
    }
}