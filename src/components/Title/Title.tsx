import "./title.css";

interface Props {
  text: string;
  fontSize?: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return <h5 className="title">{text} </h5>;
};
export default Title;
