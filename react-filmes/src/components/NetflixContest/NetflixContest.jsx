import React, { useEffect } from "react";
import { ContainerContests } from "../MainContents/MainContestsStyle";
import { TitleContents } from "../MainContents/MainContestsStyle";
import { BoxContents } from "../MainContents/MainContestsStyle";

const NetflixContest = () =>{

    useEffect(()=>{
        window.scroll(0, 0)
    }, [])
    return(
        <ContainerContests>
            <TitleContents data-title = 'title'>Netflix</TitleContents>
            <BoxContents>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis iure architecto totam. Omnis blanditiis atque quis unde quidem magnam. Animi corporis autem vitae cum ducimus voluptatum excepturi corrupti non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis officia nisi et eum explicabo excepturi saepe unde natus perferendis dolorem dolore ducimus esse, sunt beatae neque itaque sapiente quisquam iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt, numquam modi, accusamus eum, debitis voluptate deserunt dicta odio voluptatem quae doloribus repellendus aliquid dolorum repudiandae harum fuga tenetur odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ducimus consequuntur quisquam nihil, ipsam culpa rem voluptate vitae magni eos laboriosam tempora quidem facilis illo itaque facere velit, ipsa iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nam natus expedita error, voluptas architecto atque in repellat at inventore nihil iure reprehenderit! Doloremque vitae cumque aliquam vero dicta neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut, nisi provident, porro nobis quibusdam illo consequuntur sed tenetur aperiam cum itaque culpa perspiciatis earum eligendi possimus suscipit similique dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis laboriosam eaque reprehenderit quidem! Odio tempore nobis necessitatibus, quod at soluta vero eveniet placeat voluptatibus error, porro temporibus earum ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit quo beatae commodi, ex ducimus eligendi quod veritatis ea tenetur aut nihil repellat, id adipisci ipsum sed modi rerum quia? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nemo aperiam dignissimos officia, tempore quidem consequuntur corrupti ut. Libero quas repudiandae doloribus non! Animi magni maxime at deleniti error tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo impedit aliquid qui consequuntur enim tempora, nam eligendi sint corrupti itaque obcaecati, repellendus dolor pariatur eius. Officiis omnis quibusdam nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate, laudantium architecto magni doloribus, nulla, quod modi nihil voluptatum laboriosam magnam neque sapiente. Facere ducimus adipisci assumenda velit quia voluptatum.</p>
            </BoxContents>
        </ContainerContests>
    )
}

export default NetflixContest;