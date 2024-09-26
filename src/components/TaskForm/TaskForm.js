import "./TaskForm.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

/**
 * Renderiza um formulário para adicionar novas tarefas.
 *
 * @param {function} onAddTask - Função chamada quando o formulário é submetido.
 * @return {JSX.Element} O formulário de adição de tarefas.
 */
const TaskForm = ({ onAddTask }) => {
  /**
   * Lida com a submissão de um novo formulário de tarefa.
   *
   * @param {Event} event - O evento de submissão do formulário.
   * @return {void} Essa função não retorna nada.
   */
  const handleAddTask = (event) => {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
    // Obtem o valor do campo de tarefa do formulário
    const taskValue = event.target.elements.task.value;
    // Chama a função de adição de tarefa passando o valor do campo de tarefa
    onAddTask(taskValue);
    // Limpa o campo de tarefa
    event.target.reset();
    // Foca no campo de tarefa
    event.target.elements.task.focus();
  };

  return (
    <form action="post" onSubmit={handleAddTask}>
      <FormInput type="text" id="task" inputName="task" label="Task" placeholder="Add a new task" required={true} />
      <Button className="add-button" type="submit" text="Add Task" icon="fa fa-plus" />
    </form>
  );
};

export default TaskForm;
