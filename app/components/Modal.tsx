import Backdrop from "./Backdrop";
import { ProjectsProps } from "../../types";

interface ModalProps extends ProjectsProps {
  onClose: () => void;
}

const onProject = () => {};

const Modal = ({
  onClose,
  title,
  description,
  tecnologies,
  github,
}: ModalProps) => {
  return (
    <Backdrop onClose={onClose}>
      <div
        className="m-auto bg-orange-400 border-2 border-orange-700 rounded-xl flex flex-col gap-2"
        onClick={(evt) => evt.stopPropagation()}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{tecnologies}</p>
        <button onClick={onClose}>close</button>
      </div>
    </Backdrop>
  );
};

export default Modal;
