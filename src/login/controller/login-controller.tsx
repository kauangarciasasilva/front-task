import React from "react";


import TaskModel from "../../shared/moldes/task-model";
import LoginView from "../view/login-view";

interface Props{

}

interface State{
    todoList: TaskModel[];
}

export default class HomeController extends React.Component<Props, State>{
    
    constructor(props){
        super(props);
        this.state = {todoList: []}
    }

    render(){
        return(
            <LoginView></LoginView>
        )
    }
}