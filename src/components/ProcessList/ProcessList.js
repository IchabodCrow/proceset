import * as React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import processListQuery from "../../components/queries/processListQuery";
import { map } from "lodash";
import loginMutation from "../queries/loginMutation";

const ProcessList = props => {
  const { loading, data, error } = useQuery(
    processListQuery,
    {
      fetchPolicy: "network-only"
    }
  );

  // test mutation
  const [addTodo, result] = useMutation(
      loginMutation,
      {
        fetchPolicy: 'network-only'
      }
  );

  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  console.warn(data?.processList);

  return (
    <div
      onClick={(e) => {
        addTodo({
          variables: {
            id: 1,
            str: ""
          }
        });
      }}
    >
      {map(data?.processList, process => (
        <ProcessComponent key={process.id} processData={process} />
      ))}
    </div>
  );
};

const ProcessComponent = () => {
  return null;
};

export default ProcessList;
