import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ITareas } from 'src/commons/interfaces/task.interface';
import { TareaDto } from './dtos/task.dto';
import { TaskService } from './task.service';

@Controller('tareas')
@ApiTags('tareas')
export class TaskController {

    constructor(private service:TaskService){}


    @Get('obtener')
    obtenerTareas():ITareas[]{
        return this.service.obtenerTareas();
    }

    @Get(':id')
    obtenerPorId(@Param('id') id:string){
        return id;
    }

    @Post('crear')
    crearTare(@Body() tarea:TareaDto):ITareas{
        return this.service.crearTarea(tarea);
    }
}
