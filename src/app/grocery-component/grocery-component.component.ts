import { Component, OnInit } from '@angular/core';
import { ITasks } from '../itasks';

@Component({
  selector: 'app-grocery-component',
  templateUrl: './grocery-component.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'] //./grocery-component.component.css
})
export class GroceryComponentComponent implements OnInit {
  tasks = {
    name: '',
    id: 0
  };
  task: ITasks;

  onClick(){
    if(this.task['id'] == 0){
        this.tasks.push({id: (new Date()).getTime(), name: this.task.name, strike: false});
    }

    this.task.name = '';
    this.task.id = 0;
  }

  onEdit(item){
    this.task = item;
  }

  onDelete(item){
    for(var i = 0; i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
            this.tasks.splice(i,1);
            break;
        }
    }
  }

  onStrike(item){
    for(var i = 0; i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        }
        else{
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
