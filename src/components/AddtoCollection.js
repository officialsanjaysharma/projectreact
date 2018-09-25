import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { array } from 'prop-types';
let arrayCollection=[],collectionmovies=[];
class AddtoCollection extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleCloseandsave = () => {
        var collectionData=document.getElementById('collection').value
        // if(localStorage.getItem(collectionData)){
        //    var temp=localStorage.getItem(collectionData);
        //    console.log("temo",temp)
        //     localStorage.setItem(collectionData,`${this.props.match.params.id}"+++"${temp}`);
        // }
        // localStorage.setItem(collectionData,this.props.match.params.id)
        // localStorage.removeItem('loglevel:webpack-dev-server');
        // localStorage.removeItem('__proto__');
        // localStorage.removeItem('length');
        // console.log(localStorage)


        var Collection={};
        collectionmovies.push(this.props.match.params.id)
        console.log(collectionData)
        // console.log(collectionmovies)
        Collection.name=`"${collectionData}"`;
        Collection.movies=`"${collectionmovies}"`;
        // console.log(Collection)
        arrayCollection.push(Collection);
        console.log("arrayCollection",arrayCollection)
        localStorage.setItem('collection',JSON.stringify(arrayCollection));
        // console.log("localStorage.getItem")
        console.log(localStorage.getItem('collection'))
        var x=localStorage.getItem('collection');
        console.log('without json parse',x);
        x=JSON.parse(x)
        console.log('json parse',x)
        this.setState({ open: false });
    };

    constructor(props) {
        super(props);
        this.state = {
            collection: []
        }
    }
    componentDidMount() {
        localStorage.getItem('key', 'value');
    }

    compponentDidUpdate(prevProps, prevState) {
        // write code here to save your data to Local Storage or JSON server
    }
    render() {
        // console.log(this.props.match.params.id)
        return (
            // To create New components
            <div className="buttonDiv">
               
                    <Button className="buttonStyle" onClick={this.handleClickOpen}>Create Components</Button>
                    <Button className="buttonStyle" ><NavLink class="routerStyle" to={`/savedCollections/${this.props}`} activeClassName="is-active">Add to saved Components </NavLink></Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title-save"
                        aria-describedby="alert-dialog-description-save"
                    >
                        <DialogTitle id="alert-dialog-title-save">Create Component</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description-save">
                                <Input className="searchfieldStyle"
                                    placeholder="Enter COmponent Name"
                                    disableUnderline
                                    id="collection"
                                    onChange={this.handleOnChange}
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Disagree
              </Button>
              <Button onClick={this.handleCloseandsave} color="primary" autoFocus>
              <NavLink class="routerStyle" to="/" activeClassName="is-active">
                                Save
                                </NavLink>
              </Button>
                        </DialogActions>
                    </Dialog>
              </div>





                
        );
    }
}

export default AddtoCollection;