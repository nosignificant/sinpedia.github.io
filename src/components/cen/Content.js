import "../../css/List.css";
export default function Content({ contentOn }) {
  if (contentOn) {
    return <div className="Content">content table</div>;
  }
  return undefined;
}
