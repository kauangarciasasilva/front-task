export default class TaskModel {
    id: number | undefined ;
    status: boolean;    
    description: string;
    createDate: number;

    constructor(status: boolean, description: string, createDate: number){
        this.status = status;
        this.description = description;
        this.createDate = createDate;
    }
}