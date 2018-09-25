import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss'

class MovieCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    }
  }
showMovie(node){
  console.log(node)
  var collectionDiv=document.getElementById('movieCollectiondiv')
  collectionDiv.innerHTML='';
  
}
  componentDidMount() {
    var collectionDiv=document.getElementById('movieCollectiondiv')
    collectionDiv.innerHTML='';
    x=JSON.parse(localStorage.getItem('collection'))
    for(var element in localStorage){
      if(element=='length' || element=='setItem' || element=='removeItem'|| element=='clear'|| element=='getItem'|| element=='key'||element=="loglevel:webpack-dev-server"){
       console.log(x[element].name)
        }
        else{
      var div=document.createElement('Div')
      div.innerHTML=element;
      div.onclick=this.showMovie(this);
      collectionDiv.appendChild(div)
        }
    }
  }

  compponentDidUpdate(prevProps, prevState) {
    // write code here to save your data to Local Storage or JSON server
  }

  render() {
    return <div id="movieCollectiondiv" className="flex-container styleText"></div>
  }
}

export default MovieCollection;