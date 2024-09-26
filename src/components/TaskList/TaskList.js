import "./TaskList.css";
import Button from "../Button/Button";

/**
 * Um componente funcional que renderiza uma lista de tarefas e um botão para limpar a lista.
 *
 * @param {function} onResetTaskList - Uma função de callback para lidar com o evento de clique no botão de limpar lista.
 * @param {ReactNode} children - A lista de tarefas a ser renderizada.
 * @return {JSX.Element} O elemento JSX que representa a lista de tarefas e o botão de limpar lista.
 */
const TaskList = ({ onResetTaskList, children }) => {
  return (
    <div className="task-list">
      <ul>
        { children }
      </ul>
      <Button className="clear-button" text="Clear List" icon="fa fa-trash" onClick={onResetTaskList} />
    </div>
  );
};

export default TaskList;
