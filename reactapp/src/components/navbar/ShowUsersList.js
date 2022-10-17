import React from 'react'
import ListItem from './ListItem';

const UsersSubList = props => {
    const users_items = [
        { title: 'Vendor Categories', class: '' },
        { title: 'Vendors', class: '' },
        { title: 'Delivery Agents', class: '' },
        { title: 'Customers', class: '' },
    ];
    const product_items = [
        {title:'Product Sizes',class:''},
        {title:'Product Brands',class:''},
        {title:'Product Categories',class:''},
        {title:'Product Subcategories',class:''},
        {title:'Products',class:''},
    ];
    const order_items = [
        {title:'Orders',class:''},
        {title:'Pickup Orders',class:''},
        {title:'Order Commission',class:''},
        {title:'Order Payments',class:''},
        {title:'Order Returns',class:''},
    ];
    const rewards_items = [
        {title:'Rewards',class:''},
        {title:'Coin',class:''},
        {title:'Coin Value',class:''},
        {title:'Reward History',class:''},
    ];
    const voucher_items = [
        {title:'Vouchers',class:''},
        {title:'Applied Vouchers',class:''},
    ];
    const web_items = [
        {title:'Abouts',class:''},
        {title:'Spotlights',class:''},
        {title:'Sub Spotlights',class:''},
        {title:'Shop Address',class:''},
        {title:'Enquiries',class:''},
        {title:'Blogs',class:''},
    ];
    return (
        <>
        <ul className="" style={{listStyleType:"none"}}>
            {props.title==="Users" && users_items.map(item => <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            {props.title==="Product" && product_items.map(item=> <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            {props.title==="Order" && order_items.map(item=> <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            {props.title==="Reward" && rewards_items.map(item=> <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            {props.title==="Voucher" && voucher_items.map(item=> <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
            {props.title==="Web" && web_items.map(item=> <ListItem key={item.title} item={item} viewHandler={props.viewHandler}/>)}
        </ul>
        </>
    )
}

export default UsersSubList
