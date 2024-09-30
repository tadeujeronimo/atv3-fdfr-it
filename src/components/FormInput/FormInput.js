import "./FormInput.css";

/**
 * Um componente de entrada de formulário reutilizável que renderiza um rótulo e um campo de entrada.
 *
 * @param {object} props - As props do componente.
 * @param {string} props.inputName - O nome e id do campo de entrada.
 * @param {string} props.label - O texto a ser exibido como rótulo.
 * @param {string} props.type - O tipo do campo de entrada.
 * @param {string} props.placeholder - O texto de placeholder para o campo de entrada.
 * @param {boolean} props.required - Se o campo de entrada é obrigatório.
 * @return {JSX.Element} O elemento JSX que representa o componente de entrada de formulário.
 */
const FormInput = ({ ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={props.inputName}>{props.label}</label>
      <input
        type={props.type}
        name={props.inputName}
        placeholder={props.placeholder}
        id={props.inputName}
        required={props.required}
      />
    </div>
  );
};

export default FormInput;
