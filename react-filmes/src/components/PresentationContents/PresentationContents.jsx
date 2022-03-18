import React, { useEffect } from "react";
import { ContainerContests, TitleContents, BoxContents } from "../SearchMovieContents/SearchMovieStyle";
import logonetflix from '../../images/logonetflix.png'
import { ContainerCardPresentation, CardPresentation, ContainerBoxImage, ImageLogo, TitleCardPresentation, BoxImage } from "./PresentationContentsStyle";

const PresentationContents = () =>{

    useEffect(()=>{
        window.scroll(0, 0)     
    }, [])

    useEffect(()=>{
        const text = document.querySelector('#write-title')
        const textTwo = document.querySelector('#write-title-two')
        const tmdb = document.querySelector("#tmdb")
        const github = document.querySelector("#github")
        const netflix = document.querySelector("#netflix")
        const textThree = document.querySelector("#write-title-three")
        const boxImageTMD = document.querySelector('#tmdb-box')
        const boxImageGit = document.querySelector('#github-box')
        const boxImageNet = document.querySelector('#netflix-box')
        text.style.display = 'none'
        textTwo.style.display = 'none'
        tmdb.style.display = 'none'
        github.style.display = 'none'
        netflix.style.display = 'none'
        textThree.style.display = 'none'
        boxImageTMD.style.display = 'none'
        boxImageGit.style.display = 'none'
        boxImageNet.style.display = 'none'
        function maquinaEscrever(texto){
            const textoArray = texto.innerHTML.split('');
            texto.innerHTML = '';
            textoArray.forEach((letra, index) =>{
                setTimeout(() => {
                texto.style.opacity = 1
                texto.innerHTML += letra
                }, 65 * index);
            })
        }
       setTimeout(()=>{
            text.style.display = 'flex'
            maquinaEscrever(text)

            setTimeout(()=>{
                textTwo.style.display = 'flex'
                maquinaEscrever(textTwo)
            }, 7500)

            setTimeout(()=>{
                boxImageTMD.style.display = 'flex'
                boxImageTMD.style.animation = 'boximage .5s forwards'
            }, 10750)

            setTimeout(()=>{
                tmdb.style.display = 'flex'
                tmdb.style.animation = "image .9s forwards";
            },11000)

            setTimeout(()=>{
                boxImageGit.style.display = 'flex'
                boxImageGit.style.animation = 'boximage .5s forwards'
            }, 11350)

            setTimeout(()=>{
                github.style.display = 'flex'
                github.style.animation = "image .9s forwards";
            }, 11600)

            setTimeout(()=>{
                boxImageNet.style.display = 'flex'
                boxImageNet.style.animation = 'boximage .5s forwards'
            }, 12750)
            
            setTimeout(()=>{
                netflix.style.display = 'flex'
                netflix.style.animation = "image .9s forwards";
            }, 13000)

            setTimeout(()=>{
                textThree.style.display = 'flex'
                maquinaEscrever(textThree)
            }, 13400)
       }, 1500)
    })


    return(
        <ContainerContests>
            <TitleContents data-title = 'title'>Apresentação</TitleContents>
            <BoxContents>
                <ContainerCardPresentation>
                        <CardPresentation>
                                <TitleCardPresentation id='write-title'>Olá, bem vindo ao projeto de filmes desenvolvido para fins didáticos e aprimoramento dos conhecimentos em React.</TitleCardPresentation>
                                <TitleCardPresentation id='write-title-two'>Projeto criado utilizando a API do The Movie Database, Github e conteúdos da Netflix.</TitleCardPresentation>
                                <ContainerBoxImage>
                                    <BoxImage id="tmdb-box"><ImageLogo id='tmdb' src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}/></BoxImage>
                                    <BoxImage id="netflix-box"><ImageLogo id='netflix' src={logonetflix}/></BoxImage>
                                    <BoxImage id="github-box"> <ImageLogo id='github' src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}/></BoxImage>
                                </ContainerBoxImage>
                                <TitleCardPresentation id='write-title-three'>Veja mais do projeto utilizando o menu vertical.</TitleCardPresentation>
                        </CardPresentation>
                </ContainerCardPresentation>

                    {/* <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                    <img src={logonetflix} alt="" />
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" alt="" /> */}
            </BoxContents>
        </ContainerContests>
    )
}

export default PresentationContents;