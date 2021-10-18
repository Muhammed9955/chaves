import "./description.css";
import notFound from "../../assets/notFound.png";
import Title from "../Title/Title";
interface Props {
  title: any;
  paragraph: string[];
  img?: any;
  rightImg: boolean;
}

const Description: React.FC<Props> = ({
  title,
  paragraph,
  img = notFound,
  rightImg,
}) => {
  return (
    <div className="">
      {rightImg ? (
        <div className="description">
          <div className="description_content">
            {/* <h1>{title}</h1> */}
            <Title text={`${title}`} />
            <br />
            {paragraph?.map((i, n) => (
              <div key={n}>
                <p>{i}</p>
                <br />
              </div>
            ))}{" "}
          </div>
          <img src={img} alt="trading" className="description_img" />
        </div>
      ) : (
        <div className="description">
          <img src={img} alt="trading" className="description_img" />
          <div className="description_content">
            <Title text={`${title}`} />
            <br />
            {paragraph?.map((i, n) => (
              <p key={n}>{i}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
