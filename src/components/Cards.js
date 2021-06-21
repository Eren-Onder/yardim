import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Sind wir uns der Bedeutung der gegenseitigen Hilfe bewusst!..</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Lasst uns gemeinsam laufen, um den Bedürftigen zu helfen."
            />
            <CardItem
              src="images/img-2.jpg"
              text="Hatten Sie das Vergnügen zu helfen?"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Es ist nicht von Bedeutung, wie langsam du gehst, solange du nicht stehen bleibst."
            />
            <CardItem
              src="images/img-4.jpg"
              text="Eine Kerze verliert nichts, wenn sie eine andere Kerze anzündet.          ' Mevlana' "
            />
            <CardItem
              src="images/img-8.jpg"
              text="Wer dem Leben eines anderen nicht hilft, weiß nicht, dass er lebt.         
                     'Jackson Brown'"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
