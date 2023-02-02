import { Injectable } from '@nestjs/common';
import { ITareas } from 'src/commons/interfaces/task.interface';
import { TareaDto } from './dtos/task.dto';

@Injectable()
export class TaskService {

    tareas:ITareas[] = [{
        id:'aŕe8f7pqug',
        message:'first message',
        isDone: false
    },{
        id:'aŕe8f7psfqug',
        message:'second message',
        isDone: true
    }]


    obtenerTareas():ITareas[]{
        return this.tareas;
    }

    crearTarea(tarea:TareaDto):ITareas{
        const newTarea:ITareas = {
            id: Math.floor(Math.random() * 1000).toString(),
            ...tarea
        }

        this.tareas.push(newTarea);
        return newTarea
    }
}
