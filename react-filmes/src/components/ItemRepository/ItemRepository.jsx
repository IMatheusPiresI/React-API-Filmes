import React, { useEffect, useState } from "react";
import { ContainerRepos, Public, TitleRepos, BoxTitlePrivate, DescriptionRepos, BoxLanguage, ColorLanguage, Language } from "./ItemRepositoryStyle";

const ItemRepository = ({href, title, priv, description, language}) =>{
    const [languageCode, setLanguageCode] = useState('')
    const [colorLang, setColorLang] = useState('')

    useEffect(()=>{
        const languageCoding = () =>{
            switch(language){
                case 'JavaScript':
                    setColorLang('javascript')
                    setLanguageCode(`JavaScript`)
                    break;
                
                case 'CSS':
                    setColorLang('css')
                    setLanguageCode('CSS')
                    break;

                case 'HTML':
                    setColorLang('html')
                    setLanguageCode('HTML')
                    break;
                    
                default:
                    setColorLang('null')
                    setLanguageCode('')
                    break;
                    
            }
        }
        languageCoding();
    })

    return(
        <ContainerRepos>
            <BoxTitlePrivate>
                <TitleRepos href={href} target='_blank'>{title}</TitleRepos>  
                <Public>{priv === false ? 'Public' : 'Private'}</Public>
            </BoxTitlePrivate>
            <DescriptionRepos>{description}</DescriptionRepos>
            <BoxLanguage>
                <ColorLanguage data-color='color' className={colorLang} id='color'></ColorLanguage>
                <Language data-language = 'lang' href={href}>{languageCode}</Language>  
            </BoxLanguage>
        </ContainerRepos>
    )
}

export default ItemRepository;