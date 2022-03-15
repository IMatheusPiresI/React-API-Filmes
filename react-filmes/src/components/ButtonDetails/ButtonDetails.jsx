import React from "react";
import { Button } from "./ButtonDetailsStyle";

export const ButtonDetails = ({name, className, icon, click}) =>{
    return(
            <Button className={className} onClick={click}>{icon}{name}</Button>
    )
}

export default ButtonDetails;