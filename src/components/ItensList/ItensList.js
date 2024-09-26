import "./ItensList.css";
import Button from "../Button/Button";

/**
 * Renderiza uma lista de tarefas com botões de conclusão e remoção.
 *
 * @param {Array} tasks - A lista de tarefas a ser renderizada.
 * @param {Function} onToggleTaskCompletion - A função a ser chamada quando uma tarefa é alternada.
 * @param {Function} onRemoveTask - A função a ser chamada quando uma tarefa é removida.
 * @return {JSX.Element} O elemento JSX que representa a lista de tarefas.
 */
const ItensList = ({ tasks, onToggleTaskCompletion, onRemoveTask }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <li className="task-item">Empty list</li>
      ) : (
        tasks.map((task, index) => (
          <li
            className="task-item"
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.id.toString().padStart(2, "0")} - {task.title}
            <Button
              text="Completed"
              icon={
                task.completed
                  ? "fa-regular fa-check-square"
                  : "fa-regular fa-square"
              }
              onClick={() => onToggleTaskCompletion(index)}
            />
            <Button
              text="Remove"
              icon="fa fa-remove"
              onClick={() => onRemoveTask(index)}
            />
          </li>
        ))
      )}
    </>
  );
};

export default ItensList;
