import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-awesome-modal';
import {ip,port} from "../setIP/setting";
import { useHistory } from 'react-router-dom';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            idkey:"",
            firstname:"",
            lastname:"",
            province:"",
            email:""
        }
        this.handleChang   = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }

    componentDidMount() {
        this.getDataprovince();
    }

    getDataprovince = () => {
        console.log("before fetch data");
        fetch('/province')
            .then(res => res.json())
            .then(list => this.setState({ list }))
        console.log("after fetch data");
    }

    call=(province)=>{
        this.openModal();
        this.setState({
            idkey:province.province_ID,
            province:province.province_name
        })
    }

    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClicked() {
        if (this.state.selectProvince === undefined) {
            this.state.selectProvince = "00";
            console.log("undefined set value to: " + this.state.selectProvince);
        }

        console.log('Province: ' + this.state.selectProvince);
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            province:this.state.selectProvince,
            email:window.localStorage.getItem("emailUser")
        }
        axios.post(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            province:"",
            email:""
        })
        window.history.back("https://localhost:3000/Showdata");
    }

    render() {
        let {list} = this.state;
        return(
            <div>
                <div className="App">
                <h2 className="my-4">Register<br/></h2>
                    <hr/>
                </div>
                <form className="container" >
                    <div className="form-group">
                        <label className="text-white"  htmlFor="id">Id</label>
                        <input type="text" className="form-control" size="10" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                    </div>

                    <div className="form-group">
                        <label className="text-white" >First Name</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                    </div>

                    <div className="form-group">
                        <label className="text-white"  >Last Name</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                    </div>

                    <div className="form-group">
                        <label className="text-white">Province</label>
                        <select className="form-control" id="selectProvince" onChange={this.handleChang} required>
                            <option value="00" selected> -- </option>
                            {list.map((province) =>{
                                return(
                                    <option value={province.provinceID} >{province.province_name}</option>
                                )})}    
                        </select>
                    </div>
                    
                    <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                </form>
            </div>
        );
    }
}

export default function WithRouter(props) {
    const navigate = useHistory();
    return (<Register {...props} navigate={navigate}/>);
}