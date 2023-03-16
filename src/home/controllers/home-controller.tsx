import React from "react";

import HomeView from "../views/home-view";
import TaskModel from "../../shared/moldes/task-model";

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
            <HomeView></HomeView>
        )
    }
}