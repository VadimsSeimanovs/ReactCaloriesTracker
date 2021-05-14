import { Component } from "react"

export default class CaloriesCalculator extends Component{
    bmr
    totalCalories
    ideaBodyWeight

    static calculateMaleBmr(weight, height, age){
        bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
        return bmr
    }

    static calculateFemaleBmr(weight, height, age){
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
        return bmr
    }

    static kgToPoundConversion(kg){
        pounds = kg / 0.45
        return pounds
    }

    static cmToInchesConversion(cm){
        inches = 0.39 * cm
        return inches
     }

    static footToInchesConversion(foot){
        inches = 12 * foot
        return inches
      }

    static formulaToMaintainHealhtMale(exerciseLevel, calculatedBmr){
        if(exerciseLevel == 'No Exercise'){
            this.totalCalories = calculatedBmr * 1.2
            console.log("Test" + this.totalCalories)
            return this.totalCalories
        }
        else if(exerciseLevel == '1-3 days'){
            this.totalCalories = calculatedBmr * 1.375
            console.log("Test1" + this.totalCalories)
            return this.totalCalories
        }
        else if(exerciseLevel == '3-5 days'){
            this.totalCalories = calculatedBmr * 1.55
            console.log("Test2" + this.totalCalories)
            return this.totalCalories
        }
        else if(exerciseLevel == '6-7 days'){
            this.totalCalories = calculatedBmr * 1.725
            console.log("Test3 " + this.totalCalories)
            return this.totalCalories
        }
        else if(exerciseLevel == 'Extra'){
            this.totalCalories = calculatedBmr * 1.9
            console.log("Test4" + this.totalCalories)
            return this.totalCalories
        }
    }

    formulaToLoseWeight(){
        this.totalCalories = this.totalCalories - 500
    }

    formulaToGainWeight(){
        this.totalCalories = this.totalCalories + 500
    }

    idealBodyWeightMale(height){
        this.ideaBodyWeight = 50 + (0.91 * (height - 152.4))
    }
    
    idealBodyWeightFemale(height){
        this.ideaBodyWeight = 45.5 + (0.91 * (height - 152.4))
    }
}