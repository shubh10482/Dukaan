import React from 'react'
import PropTypes from 'prop-types'
import MayoLogo from '../assets/images/icons_verify.svg'
import Whatsapp from '../assets/images/Subtract.svg'
import Facebook from '../assets/images/facebook.svg'
import Twitter from '../assets/images/icons8-twitter_circled.svg'
import ProductImage from '../assets/images/product.jpeg'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeOrder: 'Pending',
        }
    }

    render() {
        return (
            <>
                <div className="meincontent">
                    <div className="topheader">
                        <h2><span className="market-title">Mano Super Market</span>
                        <img src={MayoLogo} alt="" />
                        </h2>
                        <span className="how-to-use"><strong className="useHow">&#63;</strong>How to use</span>
                    </div>
                    <div className="meincontentbottam">
                        <div className="sharestore">
                            <h4>Share Store Link </h4>
                            <select name="cars" id="cars" >
                                <option value="volvo">Last Month</option>
                                <option value="saab">Last 6 months</option>
                                <option value="opel">Last 9 months</option>
                                <option value="audi">Last Year</option>
                            </select>
                        </div>
                        <div className="middelsection">
                            <div className="middelone">
                                <p>Your customers can visit your online store and place the orders from this link.</p>
                                <a href="https://mydukaan.io/manosupermarket">mydukaan.io/manosupermarket</a>
                                <p className="Share_via">Share via</p>
                                <ul>
                                    <li>
                                        <img src={Whatsapp} alt="" />
                                    </li>
                                    <li>
                                        <img src={Facebook} alt="" />
                                    </li>
                                    <li>
                                        <img src={Twitter} alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div className="middeltwo">
                                <div className="order">
                                    <p>ORDERS</p>
                                    <h3>192</h3>
                                </div>
                                <div className="order">
                                    <p>STORE VIEWS</p>
                                    <h3>192</h3>
                                </div>
                            </div>
                            <div className="middelthree">
                                <div className="order">
                                    <p>TOTAL SALES</p>
                                    <h3>&#x20b9;1,55,920</h3>
                                </div>
                                <div className="order">
                                    <p>PRODUCT VIEWS</p>
                                    <h3>2,313</h3>
                                </div>
                            </div>
                        </div>

                        <div className="sharestore">
                            <h4>Active Orders</h4>
                            <span> View All {`>`}</span>
                        </div>

                        <div className="pandingsection">
                            <ul>
                                <li className={this.state.activeOrder === "Pending" && "active"} onClick={() => this.setState({ activeOrder: "Pending" })}>
                                    Pending ({this.props.pendingOrders.length})
                                </li>
                                <li className={this.state.activeOrder === "Accepted" && "active"} onClick={() => this.setState({ activeOrder: "Accepted" })}>
                                    Accepted (33)
                                </li>
                                <li className={this.state.activeOrder === "Shipped" && "active"} onClick={() => this.setState({ activeOrder: "Shipped" })}>
                                    Shipped (121)
                                </li>
                            </ul>
                        </div>

                        {
                            this.state.activeOrder === "Pending" ?
                                <div className="ordersection">
                                    {
                                        this.props.pendingOrders && this.props.pendingOrders.length && this.props.pendingOrders.map((order, index) => {
                                            return (
                                                <div className="orderdetails" key={index}>
                                                    <h6>Order #123456</h6>
                                                    <span>Today, 11:11pm</span>
                                                    <div className="itemssection">
                                                        <div className="product">
                                                            <img src={ProductImage} alt="" />
                                                        </div>
                                                        <div className="productitem">
                                                            <p className="item">1item</p>
                                                            <p>&#x20b9;179</p>
                                                        </div>
                                                        <div className="meindetails">
                                                            <div className="details">
                                                                <p>Detials {`>`}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <div className="noData">No data found...</div>
                        }
                    </div>
                </div>
            </>
        )
    }
}

Dashboard.defaultProps = {
    pendingOrders: [1,2,3,4,5,6]
}

Dashboard.propType = {
    pendingOrders: PropTypes.array.isRequired
}

export default Dashboard