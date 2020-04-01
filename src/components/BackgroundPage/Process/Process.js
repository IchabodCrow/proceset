import React from "react";
import dash from './Process.module.css'
import ProcessList  from "../../ProcessList/ProcessList";

// import content from "../content/Content.module.css";

export default class Propcess extends React.Component {

    render() {  
        const process = this.props.processData;
        console.log(process)
        return (
            
            <div className={dash.content} >
                <div className={dash.form}>
                    <div className={dash.nameBlock}>   
                        {process.name}
                    </div>
                    <div className={dash.data}>

                        <div className={dash.firstData}>
                            <span className={dash.firstData}>304304</span>
                            <p className={dash.underNumb}>выполнено раз</p>
                        </div>

                        <div className={dash.secondData}>

                            <div>
                                    <span className={dash.numb}>
                                       
                                        10 ч 36 мин
                                    </span>
                                <p className={dash.underNumb}>среднее время выполнения</p>
                            </div>

                            <div>
                                    <span className={dash.numb}>
                                       
                                        1 ч 7 мин (10,5%)
                                    </span>
                                <p className={dash.underNumb}>среднее активное время</p>
                            </div>

                        </div>
                        <div className={dash.secondData}>
                            <div>

                                    <span className={dash.numb}>
                                        
                                        120 сотрудников
                                    </span>
                                <p className={dash.underNumb}>учавствует в процессе</p>
                            </div>
                            <div>

                                    <span className={dash.numb}>
                                       
                                        129 сценариев
                                    </span>
                                <p className={dash.underNumb}>в процессе</p>
                            </div>
                        </div>
                        <div className={dash.procesTime}>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Начало</span>
                                <span> 11 ноября 2017</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Окончание</span>
                                <span> 11 ноября 2017</span>
                            </div>
                            <div className={dash.time}>
                                <span className={dash.underNumb}>Загрузка</span>
                                <span> 11 ноября 2017</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}