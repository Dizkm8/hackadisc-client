interface Props {
  onClick: () => void;
}

const FloatingChatButton = ({ onClick }: Props) => {
  return (
    <button className="m-0 p-0 rounded-full" onClick={onClick}>
      <img
        className="w-20 h-20 rounded-full border-4 border-pignusBlue-500"
        src="/selene.webp"
        alt="Selene Chat Button"
      />
    </button>
  );
};

export default FloatingChatButton;
