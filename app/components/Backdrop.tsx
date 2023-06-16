interface BackdropProp {
  children: React.ReactNode;
  onClose: () => void;
}

const Backdrop = ({ children, onClose }: BackdropProp) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 overflow-y-auto"
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Backdrop;
