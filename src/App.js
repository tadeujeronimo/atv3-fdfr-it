import { createRoot } from "react-dom/client";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import ItensList from "./components/ItensList/ItensList";
import tasksMock from "./data/taskMock";
import {
  addTask,
  resetTaskList,
  toggleTaskCompletion,
  removeTask,
} from "./utils/taskUtils";

/**
 * O componente principal da aplicação, responsável por renderizar a lista de tarefas e gerenciar as interações do usuário.
 *
 * @return {JSX.Element} O elemento JSX que representa a aplicação.
 */
function App() {
  let tasks = tasksMock; // Inicializa a lista de tarefas com os dados mockados
  let taskListRoot = null; // Declara a raiz da lista de tarefas nula

  /**
   * Atualiza a visualização da lista de tarefas, criando a raiz da lista se necessário.
   *
   * @return {void} Essa função não retorna nada.
   */
  const refreshTaskList = () => {
    // Seleciona o elemento <ul> que representa a lista de tarefas
    const ul = document.querySelector("ul");

    // Verifica se a raiz da lista de tarefas ainda não foi criada
    if (!taskListRoot) {
      // Define a criação da raiz da lista de tarefas a partir do elemento <ul>
      taskListRoot = createRoot(ul);
    }

    // Atualiza a visualização da lista de tarefas
    taskListRoot.render(
      <ItensList
        tasks={tasks}
        onToggleTaskCompletion={handleToggleTaskCompletion}
        onRemoveTask={handleRemoveTask}
      />
    );
  };

  /**
   * Adiciona uma nova tarefa à lista de tarefas e atualiza a visualização.
   *
   * @param {string} task - Título da nova tarefa a ser adicionada.
   * @return {void} Essa função não retorna nada.
   */
  const handleAddTask = (task) => {
    tasks = addTask(tasks, task);
    refreshTaskList();
  };

  /**
   * Reinicia a lista de tarefas para o seu estado inicial e atualiza a visualização da lista de tarefas.
   *
   * @return {void} Essa função não retorna nada.
   */
  const handleResetTaskList = () => {
    if (tasks.length === 0) {
      alert("The list is already empty!");
      return;
    }
    tasks = resetTaskList(tasks);
    refreshTaskList();
  };

  /**
   * Alterna o estado de conclusão de uma tarefa no índice fornecido e atualiza a lista de tarefas.
   *
   * @param {number} index - O índice da tarefa para alternar a conclusão.
   * @return {void} Esta função não retorna nada.
   */
  const handleToggleTaskCompletion = (index) => {
    tasks = toggleTaskCompletion(tasks, index);
    refreshTaskList();
  };

  /**
   * Remove uma tarefa da lista de tarefas no índice especificado e atualiza a visualização da lista de tarefas.
   *
   * @param {number} index - O índice da tarefa a ser removida.
   * @return {void} Esta função não retorna nenhum valor.
   */
  const handleRemoveTask = (index) => {
    tasks = removeTask(tasks, index);
    refreshTaskList();
  };

  return (
    <div className="App">
      <AppHeader appName="iTask" appVersion="v1.0" />
      <main className="App-main">
        <TaskForm onAddTask={handleAddTask} />
        <hr />
        <TaskList onResetTaskList={handleResetTaskList}>
          <ItensList
            tasks={tasks}
            onToggleTaskCompletion={handleToggleTaskCompletion}
            onRemoveTask={handleRemoveTask}
          />
        </TaskList>
      </main>
      <AppFooter appAuthor="Tadeu Jerônimo" />
    </div>
  );
}

export default App;
