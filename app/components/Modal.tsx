import Backdrop from "./Backdrop";

interface ModalProps {
  title: string;
  onClose: () => void;
}

const onProject = () => {};

const Modal = ({ onClose, title }: ModalProps) => {
  return (
    <Backdrop onClose={onClose}>
      <div
        className="w-[400px] h-[200px] m-auto bg-orange-400 border-2 border-orange-700 rounded-xl flex flex-col gap-2"
        onClick={(evt) => evt.stopPropagation()}
      >
        <h2>{title}</h2>
        <button onClick={onClose}>close</button>
      </div>
    </Backdrop>
  );
};

export default Modal;
