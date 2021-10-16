import "./title.css";

interface Props {
  text: string;
  fontSize?: string;
  size?: string;
  bgFont?: boolean;
}

const Title: React.FC<Props> = ({ text, bgFont, size }) => {
  return <h5 className={`title ${size === "md" && "size_md"}`}>{text} </h5>;
};
export default Title;
