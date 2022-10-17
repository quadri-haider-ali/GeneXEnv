import React,{useState} from 'react';
import './ListItem.css';
import ShowUsersList from './ShowUsersList';

const ListItem = (props) => {
    const [users, setUsers] = useState(0);
    const [products, setProducts] = useState(0);
    const [orders, setOrders] = useState(0);
    const [rewards, setRewards] = useState(0);
    const clickEventHandler = (event) => {
        if (props.item.title === "Users") return setUsers(!users);
        else if (props.item.title === "Product") return setProducts(!products);
        else if (props.item.title === "Order") return setOrders(!orders);
        else if (props.item.title === "Reward") return setRewards(!rewards);
        props.viewHandler(props.item.title);
    }
    return (
        <>
            <li className="">
                <button className="py-3 px-3 mr-4 w-100 text-left bg-transparent border-0 text-white" onClick={clickEventHandler}>
                    <i className={props.item.class+' mr-3'} id={props.item.title}></i>{props.item.title}
                </button>
            </li>
            {/* {!!users && props.item.title === "Users" && <ShowUsersList title={props.item.title} viewHandler={props.viewHandler}/>}
            {!!products && props.item.title==="Product" && <ShowUsersList title={props.item.title} viewHandler={props.viewHandler}/>}
            {!!orders && props.item.title==="Order" && <ShowUsersList title={props.item.title} viewHandler={props.viewHandler}/>}
            {!!rewards && props.item.title==="Reward" && <ShowUsersList title={props.item.title} viewHandler={props.viewHandler}/>} */}
        </>
    );
};

export default ListItem;
