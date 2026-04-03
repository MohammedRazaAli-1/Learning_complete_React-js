// Purpose 1: Access DOM Element
// 🧩 Problem 1 — Scroll to Section
// Create a page with a long container and a button.
// UI example:
// [Scroll to Bottom]
// ----- lots of content -----
// [Bottom Section]
// When clicking the button:
// Page scrolls to the bottom section
// Hint
// const bottomRef = useRef(null)
// bottomRef.current.scrollIntoView({ behavior: "smooth" })

import { useEffect } from "react"
import { useRef } from "react"



const Useref_problem5 = () => {
    let heading = useRef(null)
    let main = useRef(null)
    let bottom = useRef(null)

    
        function headingFunc() {
            heading.current.scrollIntoView({behavior : "smooth"});

        }
        function mainFunc() {
            main.current.scrollIntoView({behavior : "smooth"});

        }
        function bottomFunc() {
            bottom.current.scrollIntoView({behavior : "smooth"});

        }

    


  return (
    <div>
        <div>
            <button  onClick={headingFunc}>Heading</button>
            <button  onClick={mainFunc}>Main</button>
            <button  onClick={bottomFunc}>Bottom</button>
        </div>
        <div id="container">
            <h1>Lorem ipsum dolor sit.</h1>
            <div id="header" ref={heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam impedit, magni ab sed accusantium dolore incidunt non aut reiciendis molestias consectetur voluptates amet officia facilis eos qui aliquid culpa.
            Debitis praesentium dolor expedita ratione veritatis odit magnam sed, aut sunt nemo labore et inventore ipsam quas. Consectetur earum atque ea, mollitia, soluta quas, a cum ex molestiae voluptas libero!
            Quas modi aspernatur doloribus vitae numquam ipsam quisquam! Possimus magni perspiciatis sapiente error quibusdam earum, dolorum accusamus reiciendis quaerat ipsa quisquam aperiam accusantium itaque veritatis ipsam dolor laudantium aliquid necessitatibus?
            Illum mollitia eius, aliquid assumenda quisquam repellendus harum dolores odio commodi pariatur alias quam beatae magnam corrupti aut maiores quod temporibus rerum ex vero quidem. Esse libero praesentium ad ab.
            Nostrum in suscipit enim praesentium incidunt, tempora quae distinctio non doloribus quas tenetur voluptatibus, asperiores at corrupti cumque vero delectus saepe aut et magnam possimus amet libero commodi molestiae. Corrupti.
            Praesentium ea vero maxime amet eum rerum saepe sapiente velit aliquid officia tempore magnam quis possimus illum placeat, nisi veniam enim repellendus at iusto? Quas repudiandae ratione sequi doloribus necessitatibus.
            Perferendis, dolore. Similique, recusandae asperiores, repudiandae error consequuntur est doloribus quis dicta dolore quos maxime debitis ex tenetur dolores eius quasi exercitationem ipsam vitae corporis illum libero inventore minus facere?
            Autem placeat laboriosam consectetur enim eius. Laboriosam ut ad explicabo, quod ex ipsam repudiandae! Aperiam vel facere sunt aliquam repellendus eligendi ut perferendis ipsum accusamus, consectetur modi provident ab quas.
            Accusantium maiores veniam assumenda voluptas sapiente modi impedit laborum perferendis. Praesentium repudiandae dignissimos quam. Ipsa odio doloremque quisquam at cupiditate porro iure tenetur possimus, cum fuga consequuntur debitis commodi itaque!
            Deleniti pariatur, cumque quas voluptatum sapiente mollitia eum suscipit voluptate quia. Vero minus corporis necessitatibus repellendus quis, aspernatur fuga nemo modi porro iure recusandae, at sunt voluptas. Veniam, maxime quod.</div>
            <br />
            <div id="main" ref={main}>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quam optio, ipsa ducimus ipsum quod vel eligendi debitis doloremque fuga, hic fugit suscipit natus laudantium ratione fugiat dicta ex asperiores?
            Voluptas sequi excepturi assumenda amet quisquam officia maiores corrupti nobis quae molestias harum iure dolores aspernatur quam fugit, incidunt sapiente adipisci neque id deserunt distinctio commodi quas tempore pariatur. Quos.
            Mollitia ut, quidem consequuntur asperiores libero nihil accusamus repudiandae laudantium, unde nesciunt voluptate doloremque. Minus, natus molestias deleniti adipisci dolore neque nisi asperiores voluptatem nam nobis exercitationem animi omnis harum!
            Nam deserunt voluptatibus nostrum ducimus rem recusandae culpa? Mollitia inventore soluta veniam quam officiis sit ad ducimus ab molestiae, temporibus culpa incidunt voluptatum eligendi quasi nisi fugit animi asperiores est.
            Numquam in iusto asperiores beatae perspiciatis est autem voluptatibus non magnam libero illo quas aperiam provident neque nulla, veritatis debitis, accusamus vero voluptates, dolore maxime eos quia aut. Ut, tempore!
            Amet blanditiis, ab reprehenderit nisi recusandae nam laboriosam aliquam, cumque accusamus quidem ratione? Similique alias tempore quae tempora animi qui maxime voluptates, magnam fuga error labore, adipisci ipsam, nihil molestiae?
            Tenetur accusamus magnam ut pariatur debitis exercitationem error voluptates consequatur facere, minima magni cum reprehenderit dolorem in asperiores labore, modi molestias voluptate? Accusantium perspiciatis sit voluptas ad cupiditate odit ut?
            Nulla temporibus qui ad delectus itaque culpa sequi explicabo, non neque, dignissimos quisquam quia architecto voluptatem eligendi accusantium veritatis ea veniam et id asperiores nostrum possimus. Explicabo itaque a voluptatibus. </div>
            <br />
            <div id="bottom" ref={bottom}>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium harum ex maxime modi maiores velit voluptates quibusdam cumque explicabo possimus quisquam unde ab quasi iusto, dolorem dicta cum ipsum!
            Ea, pariatur quam cumque rem aperiam a reprehenderit illum numquam doloremque debitis, dignissimos nesciunt quo maxime ut dolorum corrupti cupiditate quibusdam nulla fuga dolor molestias fugit magni! Reiciendis, commodi unde.
            Perspiciatis quaerat quod ex quae tenetur in perferendis laborum ab officiis vero quis, porro exercitationem? Incidunt excepturi ullam culpa magnam ipsum odit eum necessitatibus a consectetur repellendus. Illo, architecto officia?
            Neque porro aperiam consequatur temporibus saepe obcaecati, nemo cupiditate atque illo eligendi rerum sunt eveniet voluptas cum officia commodi. Perspiciatis architecto, minus harum quibusdam quaerat nemo suscipit quas repellat iure!
            Cum recusandae harum voluptas ipsa facere deserunt ab deleniti minus, hic cumque praesentium labore. Molestias quisquam sed rerum, dignissimos quo ipsum vitae, veniam fugit expedita ad aliquam itaque necessitatibus consequatur.</div>
        </div>
    </div>
  )
}

export default Useref_problem5