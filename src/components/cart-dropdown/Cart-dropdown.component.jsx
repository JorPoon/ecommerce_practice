import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/CustomButton.component.jsx";
import CartItem from "../cart-item/Cart-item.component.jsx";
import "./Cart-dropdown.styles.scss";

const CartDropDrown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                ) : (
                    <span className="empty-message">YOUR CART IS EMPTY</span>
                )
            }
            </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>
                GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDrown))