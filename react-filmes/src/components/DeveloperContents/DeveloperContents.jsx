import React, { useEffect, useState } from "react";
import { apiGithubRepos, apiGithubUser } from "../../api/apiGithub";
import { ContainerContests, TitleContents, BoxContents } from "../SearchMovieContents/SearchMovieStyle";
import { ContainerDeveloper, BoxCloneGit, ContainerCloneGit, BoxImageDescription, BoxRepos, ImageDeveloper, BoxInfoDeveloper, Name, NameUser, Bio, Location, Blog, LinkA } from "./DeveloperContentsStyle";
import Line from "../Line/Line";
import NavGithubRepos from "../NavGitHubRepos/NavGithubRepos";
import { RiGitRepositoryLine } from 'react-icons/ri'
import { GoLocation } from 'react-icons/go'
import LinkIcon from '@material-ui/icons/Link';
import ItemRepository from "../ItemRepository/ItemRepository";
import Loading from "../Loading/Loading";

const DeveloperContents = () =>{
    const [repos, setRepos] = useState([]);
    const [infoUser, setInfoUser] = useState([])

    //  Volta a tela para o inicio sempre a rota for alterada;
    useEffect(()=>{
        window.scroll(0, 0)
    },[])

    //  Requisição API de repositórios do Github
    useEffect(()=>{
        const githubReposAPI = async() =>{
            await apiGithubRepos().get().then(res => {
                setRepos(res.data)
            })
        }
        githubReposAPI();
    }, [])


    useEffect(()=>{
        const githubUserAPI = async() =>{
            await apiGithubUser().get().then(res =>{
                const infoMyUser = res.data
                setInfoUser(infoMyUser)
            })
        }
        githubUserAPI();
    }, [])

    return(
        <ContainerContests>
            <TitleContents data-title = 'title'>Developer</TitleContents>
            <BoxContents>
               <ContainerDeveloper>
                        <Line 
                        className= 'line' />

                        <ContainerCloneGit>
                            <BoxImageDescription>
                                   <LinkA href={infoUser.html_url} target='_blank'><ImageDeveloper src={infoUser.avatar_url} /></LinkA>
                                    <BoxInfoDeveloper>
                                            <Name>{infoUser.name}</Name>
                                            <NameUser>{infoUser.login}</NameUser>
                                            <Bio>{infoUser.bio}</Bio>
                                            <Location> <GoLocation/> {infoUser.location} </Location>
                                            <Blog href={infoUser.blog} target='blank'> <LinkIcon/> {infoUser.blog} </Blog>
                                    </BoxInfoDeveloper>
                            </BoxImageDescription>

                            <BoxRepos>
                                <NavGithubRepos 
                                    icon={<RiGitRepositoryLine/>}
                                    name={'Repositories'}
                                    numRepo={repos.length}
                                />
                                {repos.map((repos, key) =>{
                                    return(
                                        <ItemRepository
                                            key={key}
                                            href={repos.html_url}
                                            title={repos.name}
                                            priv={repos.private}
                                            description={repos.description}
                                            language={repos.language}
                                        />
                                    )
                                })}
                            </BoxRepos>
                            {repos.length <= 0 && <Loading/>}
                            {infoUser.length <= 0 && <Loading/>}
                        </ContainerCloneGit>
                    <BoxCloneGit>

                    </BoxCloneGit>

               </ContainerDeveloper>
            </BoxContents>
        </ContainerContests>
    )
}

export default DeveloperContents;