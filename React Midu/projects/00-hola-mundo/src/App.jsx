import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    return(
        <section className='App'>
            <TwitterFollowCard userName="mrdanas" name="Danielo Alchino"/>
            <TwitterFollowCard userName="gersinking" name="Jefferson Ataque"/>
            <TwitterFollowCard userName="pabel_4" name="Pablo MediaOreja"/>
        </section>
    )
}