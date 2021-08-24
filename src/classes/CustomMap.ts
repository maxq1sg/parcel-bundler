import Company from "./Company"
import User from "./User"

interface ICoords{
    lat:number,
    lng:number
}

export default class CustomMap{
    private googleMap:google.maps.Map
    constructor(){
        this.googleMap = new google.maps.Map(document.getElementById("map"),{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        }
        )}
    addFromCoords(obj:ICoords){
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:obj.lat,
                lng:obj.lng
            }
        })
    }
    
}