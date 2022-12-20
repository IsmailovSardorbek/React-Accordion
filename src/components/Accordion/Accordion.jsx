import "./accordion.css";
import accordionItems from "../../data/items.json";
import AccordionItem from "../AccordionItem/AccordionItem";
import { useState } from "react";

export default function Accordion({ show, setShow }) {
  const [items, setItems] = useState(accordionItems);

  return (
    <div className="accordion">
      <div className="wrapper">
        <div className="accordion-left">
          <h1 className="title">Questions And Answers About Login</h1>
        </div>
        <div className="accordion-right">
          {items.map((item, index, array) => {
            return (
              <AccordionItem
                item={item}
                index={index}
                key={item.id}
                items={items}
                setItems={setItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
