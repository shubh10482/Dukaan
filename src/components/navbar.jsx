import React from 'react'
import Dashboard from './dashboard'
import ComingSoon from './comingSoon'
import Logo from '../assets/images/assets_logo_white.svg'
import Home from '../assets/images/icons_navbar_home_active.svg'
import Orders from '../assets/images/icons_navbar_orders_inactive.svg'
import Products from '../assets/images/icons_navbar_catalogue_inactive.svg'
import Marketing from '../assets/images/icons_navbar_marketing_inactive.svg'
import Account from '../assets/images/icons_navbar_account_inactive.svg'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'Home'
        }
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <div className="headercontent">
                        <img src={Logo} alt="logo" className="logo_white" />
                    </div>
                    <div className="icons">
                        <ul>
                            <li>
                                <div onClick={()=>this.setState({activeTab: "Home"})}>                                    
                                    <img src={Home} alt="home" />
                                    <span>Home</span>
                                </div>
                            </li>
                            <li>
                                <div onClick={()=>this.setState({activeTab: "Orders"})}>
                                    <img src={Orders} alt="orders" />
                                    <span>Orders
                                        <span className="notification">2</span>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div onClick={()=>this.setState({activeTab: "Products"})}>
                                    <img src={Products} alt="products" />
                                    <span>Products</span>
                                </div>
                            </li>
                            <li>
                                <div onClick={()=>this.setState({activeTab: "Marketing"})}>
                                    <img src={Marketing} alt="marketing" />
                                    <span>Marketing</span>
                                </div>
                            </li>
                            <li>
                                <div onClick={()=>this.setState({activeTab: "Account"})}>
                                    <img src={Account} alt="account" />
                                    <span>Account</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer">
                        <p>Need any help?</p>
                        <h6>Chat with us</h6>
                    </div>
                </div>                
                {this.state.activeTab === "Home" && <Dashboard pendingOrders={[1, 2, 3, 4, 5, 6]} />}
                {this.state.activeTab === "Orders" && <ComingSoon name={'Orders'} />}
                {this.state.activeTab === "Products" && <ComingSoon name={'Products'} />}
                {this.state.activeTab === "Marketing" && <ComingSoon name='Marketing' />}
                {this.state.activeTab === "Account" && <ComingSoon name='Account' />}
            </>
        )
    }
}

export default Navbar