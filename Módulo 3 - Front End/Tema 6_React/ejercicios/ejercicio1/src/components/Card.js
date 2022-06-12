//import { Fragment } from "react";

export default function Card(props) {
    return (
      <div className="card w-50 m-auto">
        <img src={props.imgURL} class="card-img-top" alt="image Placeholder" />
        <div class="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.paragraph}</p>
          <a href={props.href} class="btn btn-primary">{props.linkText}</a>
        </div>
      </div>
    )
  }