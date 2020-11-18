
var email;
var password;
var name;
var age;
var height;
var heightType;
var weight;
var weightType;
var goal;
var goalWeight;
var goalWeightType;
var uid;

export default class User{

    static init(){
        email = '';
        password ='';
        name = '';
        age = '';
        gender = '';
        height = '';
        heightType = '';
        weight = '';
        weightType = '';
        goal = '';
        goalWeight = '';
        goalWeightType = '';
    }

    static setEmail(userEmail){
        email = userEmail;
    }

    static setPassword(userPassword){
        password = userPassword;
    }

    static setName(userName){
        name = userName;
    }

    static setAge(userAge){
        age = userAge;
    }

    static setHeight(userHeight){
        height = userHeight;
    }

    static setWeight(userWeight){
        weight= userWeight;
    }

    static setWeightType(userWeightType){
        weightType = userWeightType;
    }

    static setGoal(userGoal){
        goal = userGoal;
    }

    static setGender(userGender){
        gender = userGender;
    }

    static setGoalWeight(userGoalWeight){
        goalWeight = userGoalWeight;
    }

    static setGoalWeightType(userGoalWeightType){
        goalWeightType = userGoalWeightType;
    }

    static setHeightType(userHeightType){
        heightType = userHeightType;
    }

    static getEmail(){
        return email;
    }

    static getPassword(){
        return password;
    }

    static getName(){
        return name;
    }

    static getAge(){
        return age;
    }

    static getHeight(){
        return height;
    }

    static getHeightType(){
        return heightType;
    }

    static getWeight(){
        return weight;
    }

    static getWeightType(){
        return weightType;
    }

    static getGoal(){
        return goal;
    }

    static getGoalWeight(){
        return goalWeight;
    }

    static getGoalWeightType(){
        return goalWeightType;
    }

    static getGender(){
        return gender;
    }

    static setUid(userUid){
        uid = userUid;
    }

    static getUid(){
        return uid;
    }
}