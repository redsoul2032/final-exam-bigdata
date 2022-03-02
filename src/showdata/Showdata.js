import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-awesome-modal';
import './Showdata.css';
//import '../../server/app';
import {ip,port} from "../setIP/setting";

export default class Showdata extends Component{
    constructor() {
        super();
        this.state ={
            listUser:[],
            idkey:"",
            firstname:"",
            lastname:"",
            province_ID:"",

            listProvince:[],
            provinceID:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
        //console.log("hello show data");
    }
    componentDidMount() {
        this.getData();
    }
    
    getData = () => {
        fetch('/data')
            .then(res => res.json())
            .then(listUser => this.setState({ listUser }))

        fetch('/province')
            .then(res => res.json())
            .then(listProvince => this.setState({ listProvince }))
        console.log("after fetch data");
    }

    call=(user)=>{    
        this.openModal();
        this.setState({
            idkey:user.id,
            firstname:user.firstname,
            lastname:user.lastname,
            province:user.province_ID,
            provinceName:user.province_name
        })
    }

    onDelete=(user)=>{
        let url = `https://localhost:3000/delete`;
        let data = {
            idkey:user.id
        }
        axios.put(url,data)
        setTimeout(()=>{this.componentDidMount()},1)
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.form.reset()

        this.setState({
            visible : false
        });
    }
    
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log([e.target.id]+ ": "+ e.target.value);
    }

    handleClicked(){
        if (this.state.EditProvince === undefined) {
            this.state.EditProvince = this.state.province;
            console.log("undefined set new value: " + this.state.EditProvince);
        }

        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            provinceEdit:this.state.EditProvince,
            email:window.localStorage.getItem("emailUser")
        }
        axios.put(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            provinceEdit:"",
            email:""
        });

        this.form.reset()
        this.state.EditProvince = undefined;

	    this.closeModal();
        setTimeout(()=>{this.componentDidMount()},1)
    }

    render() {
        
        let {listUser} = this.state;
   
        return (
            <div className="App">
                <h2 className="my-4">Users Information<br/></h2>
                <hr/>
                <div className="container p-3 my-3 bg-dark text-white">
                    <table className="table table-dark w-80">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Province</th>
                                <th>Regis by</th>
                                <th>Timestamp</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {listUser.map((user) =>{

                                    return(
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.province_name}</td>
                                            <td>{user.facebookAddress}</td>
                                            <td>{user.regisTime.slice(0,10)}</td>
                                            <td>
                                                <button type="button" class="btn btn-warning button" onClick={()=>this.call(user)}>Edit</button>
                                                <button type="button" class="btn btn-danger button"  onClick={()=>this.onDelete(user)}>Delete</button>
                                            </td>
                                            <div className="box">
                                                <Modal visible={this.state.visible}
                                                       width="1200"
                                                       height="600"
                                                       effect="fadeInUp"
                                                       onClickAway={() => this.closeModal()}
                                                >
                                                    <form className="container" id='form' ref={form => this.form = form}>
                                                        <div className="form-group">
                                                            <h3><label htmlFor="id">ID: {this.state.idkey}<br/></label></h3>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>firstname:</label>
                                                            <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>lastname:</label>
                                                            <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                                                        </div>

                                                        <div className="form-group" id="formProvince">
                                                            <label>Province</label>
                                                                <select className="form-control" id="EditProvince" onChange={this.handleChang} required>
                                                                    <option value={this.state.province} selected> {this.state.provinceName} </option>
                                                                    <option value="00" > -- </option>
                                                                    {this.state.listProvince.map(get => {
                                                                        return(
                                                                            <option value={get.provinceID}>{get.province_name}</option>
                                                                        )})}
                                                            </select>
                                                        </div>
                                                        
                                                        <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                                                    </form>
                                                </Modal>
                                            </div>
                                        </tr>
                                    )})}
                        </tbody>
                    </table>
                </div><br/>
            </div>
        );
    }
}
