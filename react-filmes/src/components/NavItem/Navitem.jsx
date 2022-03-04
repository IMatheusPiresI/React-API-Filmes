import React, { useEffect, useState } from "react";
import { BoxItem, Icon } from "./NavItemStyle";

const Navitem = ({icon}) =>{
    const [id, setId] = useState(0)

    //Atribuir id diferente a cada item;
    useEffect( () => {
        const id = Math.floor(Math.random() * 1000)
        setId(id)
    },[])
    return(
        <BoxItem data-id={id}>
            <Icon className="icon">
                {icon}
            </Icon>
        </BoxItem>
    )
}

export default Navitem;