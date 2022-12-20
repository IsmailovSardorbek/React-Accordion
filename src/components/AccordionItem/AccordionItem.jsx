import { AccordionButton } from "./AccordionButton";
import "./accordion-item.css";

export default function AccordionItem({ item, index, items, setItems }) {
  const handleToggle = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.open = !item.open;
        }
        return item;
      })
    );
  };

  return (
    <div className={`box ${item.open ? "toggle" : ""}`} key={index}>
      <div className="question-title">
        <h3 className="box-title">{item.title}</h3>
        <AccordionButton onClick={() => handleToggle(item.id)}>
          {item.open ? "-" : "+"}
        </AccordionButton>
      </div>
      {item.open ? <p className="item-text">{item.text}</p> : null}
    </div>
  );
}
