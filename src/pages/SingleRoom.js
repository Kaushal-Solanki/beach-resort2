import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Banner } from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getSlug } = this.context;
    const room = getSlug(this.state.slug);
    console.log("dd", room);
    if (!room) {
      return (
        <>
          <div className="error">
            <h1>no such room could be found........</h1>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </div>
        </>
      );
    }
    const {
      name,
      slug,
      type,
      price,
      size,
      capacity,
      pets,
      extras,
      breakfast,
      featured,
      description,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} rooms`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img src={item} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SOFT</h6>
              <h6>
                max capacity:&nbsp;
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast include"}</h6>
            </article>
          </div>
        </section>
        <scetion className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </scetion>
      </>
    );
  }
}

export default SingleRoom;
