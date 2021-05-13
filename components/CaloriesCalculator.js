
class CaloriesCalculator{
    bmr
    totalCalories
    ideaBodyWeight

    calculateMaleBmr(weight, height, age){
        bmr = 66 + (6.3 * weight) + (12.7 * height) - (6.8 * age)
    }

    calculateFemaleBmr(weight, height, age){
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
    }

    formulaToMaintainHealhtMale(exerciseLevel){
        if(exerciseLevel == 'no exercise'){
            this.totalCalories = bmr * 1.2
        }
        else if(exerciseLevel == '1-3 days'){
            this.totalCalories = bmr * 1.375
        }
        else if(exerciseLevel == '3-5 days'){
            this.totalCalories = bmr * 1.55
        }
        else if(exerciseLevel == '6-7 days'){
            this.totalCalories = bmr * 1.725
        }
        else{
            this.totalCalories = bmr * 1.9
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