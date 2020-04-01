import React from "react";
import dash from './Process.module.css'
import ProcessList  from "../../ProcessList/ProcessList";


export default class Propcess extends React.Component {

    render() {  
        const process = this.props.processData;
    
        return (
            
            <div className={dash.content} >
                <div className={dash.form}>
                    <div className={dash.nameBlock}>   
                        {process.name}
                    </div>
                    <div className={dash.data}>

                        <div className={dash.firstData}>
                            <span className={dash.firstNumb}>{process.numberOfExecutions}</span>
                            <p className={dash.underNumb}>выполнено раз</p>
                        </div>

                        <div className={dash.secondData}>

                            <div>
                                    <span className={dash.numb}>
                                       
                                        {process.averageLeadTime}
                                    </span>
                                <p className={dash.underNumb}>среднее время выполнения</p>
                            </div>

                            <div>
                                    <span className={dash.numb}>
                                       
                                    {process.averageActiveTime} (10,5%)
                                    </span>
                                <p className={dash.underNumb}>среднее активное время</p>
                            </div>

                        </div>
                        <div className={dash.secondData}>
                            <div>

                                    <span className={dash.numb}>
                                        
                                       {process.employeesInvolvedProcess} сотрудников
                                    </span>
                                <p className={dash.underNumb}>учавствует в процессе</p>
                            </div>
                            <div>

                                    <span className={dash.numb}>
                                       
                                    {process.numberOfScenarios} сценариев
                                    </span>
                                <p className={dash.underNumb}>в процессе</p>
                            </div>
                        </div>
                        <div className={dash.procesTime}>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Начало</span>
                                 <span> {process.start}</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Окончание</span>
                                <span> {process.end}</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Загрузка</span>
                                <span> {process.loading}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}