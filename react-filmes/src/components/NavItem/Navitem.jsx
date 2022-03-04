import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxItem, Icon } from "./NavItemStyle";


const Navitem = ({icon, path}) =>{
    const [id, setId] = useState(0)
    const navigate = useNavigate()

    //Atribuir id diferente a cada item;
    useEffect( () => {
        const id = Math.floor(Math.random() * 1000)
        setId(id)
    },[])
    return(
        <BoxItem data-id={id} onClick={() => navigate(path)}>
            <Icon className="icon">
                {icon}
            </Icon>
        </BoxItem>
    )
}

export default Navitem;