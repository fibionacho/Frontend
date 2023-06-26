import { useState } from "react";
export function TwitterFollowCard({userName, name}){
    const [isFollowing, setIsFollowing] = useState(false)
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const addAt = (userName)=> `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following" 
        : "tw-followCard-button";
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="avatar" 
                src={`https://unavatar.io/${userName}`}/>
            <div className="tw-followCard-info">
                <strong>{name}</strong>
                <span className="tw-followCard-infoUserName">{addAt(userName)}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                
                <span className="tw-followCard-text">
                    {text}
                </span>
                <span className="tw-followCard-stopFollow">
                    Dejar de Seguir
                </span>
            </button>
        </aside>
    </article>
    )
}