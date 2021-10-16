import "./MainBtn.css";
interface Props {
  text: string;
  bg?: string;
  orangeHover?: boolean;
  onClick?: any;
}

const MainButton: React.FC<Props> = ({ text, bg, orangeHover, onClick }) => {
  return (
    <button
      className={`mainBtn ${bg && "orangeBg"} ${
        orangeHover ? "orangeHover" : "blueHover"
      }`}
      onClick={onClick}
    >
      {" "}
      {text}{" "}
    </button>
  );
};
export default MainButton;
