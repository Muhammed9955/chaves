import "./MainBtn.css";
interface Props {
  text: string;
  bg?: string;
}

const MainButton: React.FC<Props> = ({ text, bg }) => {
  return <button className={`mainBtn ${bg && "orangeBg"}`}> {text} </button>;
};
export default MainButton;
