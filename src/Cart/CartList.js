import React, { useState } from "react";
import classes from "./CartList.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import { CartContext } from "../component/StoreContext/CartContext";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

const CartList = (props) => {
  // const navigate = useNavigate()
  
  const { cart } = useContext(CartContext);


  const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const params = useParams();
  console.log(params.id);

  // const additem = (id) => {
  //   navigate("/cart/:id");
  // };
  return (
    <section className={classes.cartBody}>
      <Button className={classes.styleBtn} onClick={props.Close}>
        X
      </Button>
      <h2 className={classes.cartHeading}>CART</h2>

      <Row>
        <Col xs="4">
          <span className={classes.headText}>Item</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={classes.headText}>Price</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={classes.headText}>Quantity</span>
          <hr />
        </Col>
      </Row>
      {cart.map((items) => {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col xs="4">
                <Col xs="6">
                  <NavLink to={`/product/${items.id}`} onClick={ handleClose }>
                    <img
                      className={classes.cartImages}
                      src={items.imageUrl}
                      // onClick={() => additem(items.id)}
                    />
                    </NavLink>
                </Col>

                <Col xs="6" className={classes.cartTitle}>
                  {items.title}
                </Col>
              </Col>

              <Col xs="4">₹{items.price}</Col>
              <Col xs="4">{items.quantity}</Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
};

export default CartList;
