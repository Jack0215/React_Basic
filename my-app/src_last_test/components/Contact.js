import React, { Component } from 'react';

export class Contact extends Component {
    constructor(){
        super()
        this.state = {
            contactData: [
              { name: "Allen", phone: "000-000-0001" },
              { name: "Bob", phone: "000-000-0022" },
              { name: "Charlie", phone: "000-000-0333" },
              { name: "David", phone: "000-000-444" },
            ],
            username: "", //사용자 이름 추가
          };
          this.handleEvent = this.handleEvent.bind(this);
          this.handleChange = this.handleChange.bind(this);
    }
    handleEvent(){
        let xxx = this.state.contactData;
        xxx.push({
            name : this.state.username,
        })
        this.setState(
            {
                contactData:xxx,
            }
        )
    }
    handleChange(e){
        let Data = {};
        Data[e.target.name] = e.target.value;
       this.setState(Data);
    }    
    render() {
        return (
            <div>
                {this.state.contactData.map((row,idx)=>{
                    return(
                        <div key={idx}>
                            {row.name} {row.phone}
                            </div>
                    );
                })}
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} ></input>
                <button onClick={this.handleEvent}>사용자 추가</button>
                추가된 사용자 이름:{this.state.username} 
            </div>
        );
    }
}