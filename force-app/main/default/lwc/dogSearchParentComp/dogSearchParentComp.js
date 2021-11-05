import { LightningElement,track } from 'lwc';

export default class DogSearchParentComp extends LightningElement {

@track dogImage;
objects=[];
get options() {
    const BREEDS = [
                 "affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", 
                 "husky","kelpie", "komondor", "kuvasz", "labrador", 
                 "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", 
                 "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", 
                "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug"
                 ];
                 for ( var i = 0;i<BREEDS.length;i++){
                    const option = { label : BREEDS[i],value : BREEDS[i]};
                    this.objects = [...this.objects, option];      
                }
                return this.objects;  
            }
            handleChange(event) 
            {
                this.value = event.detail.value;
                let endPoint = "https://dog.ceo/api/breed/"+this.value+"/images/random";
                fetch(endPoint, {
                    method: "GET"
                })
                .then((response) => response.json())
                .then((dogImage) => {
                 this.dogImage = dogImage;
                });
            }   }