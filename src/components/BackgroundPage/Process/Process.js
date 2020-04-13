import React from "react";
import dash from './Process.module.css'
import ProcessList  from "../../ProcessList/ProcessList";
import {ReactComponent as Circle} from '../../../resources/circle.svg';
import {ReactComponent as Time} from '../../../resources/time.svg';
import {ReactComponent as TimeDes} from '../../../resources/timeDes.svg';
import {ReactComponent as Humans} from '../../../resources/humans.svg';
import {ReactComponent as Road} from '../../../resources/road.svg';

export default class Propcess extends React.Component {
    constructor(props){
        super(props)
        this.getDDMMYYYY = this.getDDMMYYYY.bind(this);
        this.msToTime = this.msToTime.bind(this);
        this.getTimeFromMins = this.getTimeFromMins.bind(this);
        this.declOfNum = this.declOfNum .bind(this);
    }

    getDDMMYYYY = (msec) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        const d = new Date(Number(msec));

        return d.toLocaleDateString("ru", options).slice(0, -3);
    }

    msToTime = (msec) => {
          let milliseconds = parseInt((msec % 1000) / 100)
          let seconds = Math.floor((msec / 1000) % 60)
          let minutes = Math.floor((msec / (1000 * 60)) % 60)
          let hours = Math.floor((msec / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return `${hours === 0 ? '' : hours}` + ' ' + `${hours === 0 ? '' : 'ч'}` + ' ' + minutes + '' + ' ' + 'мин';
      }

    getTimeFromMins = (msec) => {
        const sec = msec / 1000
        const hours = Math.trunc(sec/3600);
        const minutes = Math.trunc(sec % 60);
        return `${hours === 0 ? '' : hours}` + ' ' + `${hours === 0 ? '' : 'ч'}` + ' ' + minutes + '' + ' ' + 'мин';
    };

    declOfNum = (number, titles) => {  
        const cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    render() {  
        const process = this.props.processData;
        const averageLeadTimeStr = this.msToTime(process.averageLeadTime)
        const averageActiveTimeStr = this.msToTime(process.averageActiveTime)
        const persent = process.averageActiveTime / (process.averageLeadTime / 100)

    
        return (
            
            <div className={dash.content} >
                <div className={dash.form}>
                    <div className={dash.nameBlock}>   
                        {process.name}
                    </div>
                    <div className={dash.data}>

                        <div className={dash.firstData}>
                            <Circle className={dash.icon}/>
                            <span className={dash.firstNumb}>{process.numberOfExecutions}</span>
                            <p className={dash.underNumb}>выполнено раз</p>
                        </div>

                        <div className={dash.secondData}>

                            <div>
                            <Time className={dash.icon}/>
                                    <span className={dash.numb}>
                                      
                                        {averageLeadTimeStr}
                                    </span>
                                <p className={dash.underNumb}>среднее время выполнения</p>
                            </div>

                            <div className={dash.block2}>
                                    <span className={dash.numb}>
                                    <TimeDes className={dash.icon}/>
                                    {averageActiveTimeStr} ({ persent.toFixed(1)  + ' ' + '%'  })
                                    </span>
                                <p className={dash.underNumb}>среднее активное время</p>
                            </div>

                        </div>
                        <div className={dash.secondData}>
                            <div>
                                   
                                    <span className={dash.numb}>
                                    <Humans  className={dash.icon}/>
                                       {process.employeesInvolvedProcess} {this.declOfNum(process.employeesInvolvedProcess, ['сотрудников','сотрудника','сотрудников'])}
                                       
                                    </span>
                                <p className={dash.underNumb}>учавствует в процессе</p>
                            </div>
                            <div className={dash.block2}>
                            <Road  className={dash.icon}/>
                                    <span className={dash.numb}>
                                    
                                    {process.numberOfScenarios} {this.declOfNum(process.employeesInvolvedProcess, ['сценария','сценария','сценариев'])}
                                    </span>
                                <p className={dash.underNumb}>в процессе</p>
                            </div>
                        </div>
                        <div className={dash.procesTime}>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Начало</span>
                                 <span> { this.getDDMMYYYY(process.start) }</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Окончание</span>
                                <span> { this.getDDMMYYYY(process.end) }</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Загрузка</span>
                                <span> { this.getDDMMYYYY(process.loading) }</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}