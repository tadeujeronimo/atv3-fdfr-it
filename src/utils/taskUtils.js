/**
 * taskUtils.js
 * 
 * Utilitários para manipular tarefas.
 */

/**
 * Retorna o maior ID presente na lista de tarefas.
 * @param {Array} tasks - Lista de tarefas.
 * @returns {number} - O maior ID encontrado ou 0 se a lista estiver vazia.
 */
const getMaxId = (tasks) => {
    // Retorna o maior ID encontrado ou 0 se a lista estiver vazia
  return tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
};

/**
 * Adiciona uma nova tarefa à lista de tarefas.
 * @param {Array} tasks - Lista de tarefas.
 * @param {string} taskTitle - Título da nova tarefa.
 * @returns {Array} - Nova lista de tarefas com a tarefa adicionada.
 */
const addTask = (tasks, taskTitle) => {
    const updatedTasks = [...tasks];
    // Cria um objeto com os dados da nova tarefa
  const newTask = {
    id: getMaxId(tasks) + 1,
    title: taskTitle,
    completed: false,
  };
  // Adiciona a nova tarefa no início da lista de tarefas
  updatedTasks.unshift(newTask);

  // Retorna a lista de tarefas atualizada com a nova tarefa
  return updatedTasks;
};

/**
 * Reseta a lista de tarefas, removendo todas as tarefas.
 * @returns {Array} - Lista de tarefas vazia.
 */
const resetTaskList = () => {
    // Cria uma lista vazia
  return [];
};

/**
 * Alterna o estado de conclusão de uma tarefa.
 * @param {Array} tasks - Lista de tarefas.
 * @param {number} index - Índice da tarefa a ser alternada.
 * @returns {Array} - Nova lista de tarefas com a tarefa atualizada.
 */
const toggleTaskCompletion = (tasks, index) => {
    // Cria uma cópia da lista de tarefas
  const updatedTasks = [...tasks];
  // Altera o estado de conclusão da tarefa no índice fornecido
  updatedTasks[index].completed = !updatedTasks[index].completed;
  return updatedTasks;
};

/**
 * Remove uma tarefa da lista de tarefas.
 * @param {Array} tasks - Lista de tarefas.
 * @param {number} index - Índice da tarefa a ser removida.
 * @returns {Array} - Nova lista de tarefas sem a tarefa removida.
 */
const removeTask = (tasks, index) => {
    // Cria uma cópia da lista de tarefas
  const updatedTasks = [...tasks];
  // Remove a tarefa no índice fornecido
  updatedTasks.splice(index, 1);
  return updatedTasks;
};

// Exporta as funções utilitárias para serem utilizadas em outros arquivos
export { getMaxId, addTask, resetTaskList, toggleTaskCompletion, removeTask };
