import React from "react";
import { BoxNavItemGit, NumRepo, ContainerNavGit } from "./NavGithubReposStyle";

const NavGithubRepos = ({icon, name,numRepo}) =>{
    return(
        <ContainerNavGit>
            <BoxNavItemGit>
            {icon} 
            {name} 
            <NumRepo>{numRepo}</NumRepo>
        </BoxNavItemGit>
        </ContainerNavGit>
    )
}

export default NavGithubRepos;