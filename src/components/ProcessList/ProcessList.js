import * as React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import processListQuery from "../../components/queries/processListQuery";
import { map } from "lodash";
import style from "./ProcessList.module.css"

import Process from "../BackgroundPage/Process/Process";


const ProcessList = props => {
  const { loading, data, error } = useQuery(
    processListQuery,
    {
      fetchPolicy: "network-only"
    }
  )
  
  
  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
 console.log(data)
  return (
      <div>
        {data.processList && map(data.processList, process => (
          <Process key={process.id} processData={process} className={style.process} />
        ))}
      </div>
  );
};


export default ProcessList