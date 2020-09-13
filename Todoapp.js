import React, { Component } from 'react'
import "./Todoapp.css";

export default class Todoapp extends Component {
    state={
        input:'',
        items:[]
    }
    handlechange=(event)=>{
        this.setState({
            input: event.target.value
        })
    }
        deleteitem = index => {
            const allitems=this.state.items;
            allitems.splice(index,1);
            this.setState({
                items:allitems
            });
        };
    storeitem=(event)=>{
        event.preventDefault();
        const{input}=this.state;
       // const allitem=this.state.items;
        //allitem.push(input);
        this.setState({
            items:[...this.state.items,input],
            input:""
            //allitem
        });
    }
    render() {
        const{input, items}=this.state;
        return (
            <div className="todoContainer">
                <h1>Todo App</h1>
                <form className="input-section" onSubmit={this.storeitem}>
                    <input type="text" value={input} onChange={this.handlechange} placeholder="Enter items...."/>
                    </form>
                    <ul>
                        {items.map((data,index)=>(
                            <li key={index}>
                                <button onClick={()=>this.deleteitem(index)} className="DeleteButton">Delete</button>
                                <br/>{data}</li>
                        ))}
                    </ul>
            </div>

        )
    }
}
