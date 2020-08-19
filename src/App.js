import React from 'react';
import { Typography, Fab, TextField, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import 'fontsource-roboto';

const date = new Date();
let day = '';
let month = '';
let num = date.getDate();

switch (date.getDay()) {
    case 0:
    day = 'Sunday';
    break;
    case 1:
    day = 'Monday';
    break;
    case 2:
    day = 'Tuesday';
    break;
    case 3:
    day = 'Wednesday';
    break;
    case 4:
    day = 'Thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6:
    day = 'Saturday';
    break;
    default:
    day = 'Saturday';
    break;
}

switch (date.getMonth()) {
    case 0:
    month = 'January';
    break;
    case 1:
    month = 'February';
    break;
    case 2:
    month = 'March';
    break;
    case 3:
    month = 'April';
    break;
    case 4:
    month = 'May';
    break;
    case 5:
    month = 'June';
    break;
    case 6:
    month = 'July';
    break;
    case 7:
    month = 'August';
    break;
    case 8:
    month = 'September';
    break;
    case 9:
    month = 'October';
    break;
    case 10:
    month = 'November';
    break;
    case 11:
    month = 'December';
    break;
    default:
    month = 'January';
    break;
}

export default class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
        day: day,
        month: month,
        num: num,
        tasks: [],
        value: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    
    handleClick(name) {
        if (name.trim().length > 0) {
        this.setState(
            {
            tasks: this.state.tasks.concat({
                id: this.state.tasks.length,
                name: name
            }),
            value: ''
            }
            );
        }
    }
        
    handleChange(event) {
        this.setState(
            { value: event.target.value }
        )
    }

    deleteTask(id) {
        let currTasks = this.state.tasks;
        const newTasks = currTasks.filter((task) => {
            return task.id !== id
        });
        this.setState(
            { tasks: newTasks }
        )
    }
        
    render() {
        return (
        <div>
            <Grid container direction={'column'} spacing={1}>
                <Grid container direction={'row'} spacing={'1'} style={{'border-bottom': '3px solid #7e57c2'}}>
                    <Grid item xs={9}>
                        <Typography color="primary" variant="h5">{this.state.day}, {this.state.month} {this.state.num}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" style={{float: 'right', 'font-weight': 'bold', color: '#ffffff'}}>{this.state.tasks.length === 1 ? `${this.state.tasks.length} task` : `${this.state.tasks.length} tasks`}</Typography>
                    </Grid>
                </Grid>
                <br />
                <Grid item xs={12} style={{'max-height': '622px', 'min-height': '622px' , overflow: 'auto'}}>
                    {this.state.tasks.map(task =>

                        <Grid container direction={'row'} spacing={'0'} style={{'background-color': '#7e57c2'}}>
                            <Grid item xs={10}>
                                <Typography style={{color: '#ffffff', 'fontSize': '15px', 'margin-top': '7px', 'margin-left': '5px'}}>{task.name}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Button onClick={() => {this.deleteTask(task.id)}}>
                                    <CloseIcon style={{float: 'right', color: '#ffffff'}} />
                                </Button>
                            </Grid>
                        </Grid> 

                    )}
                </Grid>
                <Grid container direction={'row'} spacing={'1'}>
                    <Grid item xs={10}>
                        <TextField style={{'margin-left': '5px'}} id="standard-basic" color="primary" label="Do something..." fullWidth={true} value={this.state.value} onChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={2} style={{float: 'bottom'}}>
                        <Fab style={{float: 'right', 'margin-right': '5px'}} color="secondary" aria-label="add" onClick={() => {this.handleClick(this.state.value)}} >
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>   
            </Grid>
        </div>
        );
    }
}
        