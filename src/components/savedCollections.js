import React,{ Component } from "react";
import { element } from "prop-types";
import '../styles/styles.scss'
import { Button } from "@material-ui/core";
let arrayCollection
class savedCollections extends Component{
 
    addToCategory() {
        console.log('working')
        localStorage.setItem(collectionName,);
    }
    componentDidMount(props) {
        var x=JSON.parse(localStorage.getItem('collection'))

        for(var element of localStorage.getItem('collection')){
            // if(x[element].name)
            console.log(x[element].name)
        }
        
            // var newElement=document.createElement("Button")
        
           
               
            //    newElement.innerHTML=element
            //    newElement.className="collectionDiv"
            //    newElement.onclick= ()=> this.addToCategory()
            //     console.log(newElement)
            //     document.getElementById('x').appendChild(newElement)

            
        
    }
        
    render(){
        console.log(document.getElementById('x'))
    
        return(
            <div id='x' className="flex-container">
            </div>
        )
        }
}
export default savedCollections;