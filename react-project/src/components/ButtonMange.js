import React, {Component} from 'react';

class ButtonManage extends Component{
  constructor(props){
    super(props);
    this.state = { id : props.postId }
    this.onDel = this.onDel.bind(this);
  }
  onDel(){
    fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${this.state.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
  render(){

    if(localStorage.getItem("userId")){
      return(
      <div className="w-100 pt2 tr">
        <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" href={`/editNews/${this.state.id}`}>edit</a>
        <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={this.onDel}>delete</a>
      </div>
      )
    }else{
      return('')
    }
  }
}

export default ButtonManage;
