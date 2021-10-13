import Title from "../Title/Title";
import "./chavsInfo.css";
interface Props {
  title: string;
  paragraphList: string[];
  smallWidth?: boolean;
}

const ChavsInfo: React.FC<Props> = ({ title, paragraphList, smallWidth }) => {
  return (
    <div className={`chavsInfo ${smallWidth && "smallWidth"}`}>
      <div style={{ textAlign: "center" }}>
        <Title text={`${title}`} fontSize="3rem" />
      </div>
      <div style={{ height: "10vh" }} />
      {paragraphList.map((i) => (
        <>
          <p>{i} </p>
          <br />
        </>
      ))}
    </div>
  );
};
export default ChavsInfo;
