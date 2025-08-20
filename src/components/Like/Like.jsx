import { useState } from 'react'
import like1 from '../../assets/like.webp'
import like2 from '../../assets/like2.webp'
import './Like.css'

function Like() {
    const [like, setLike] = useState(false)
    const [numeroLikes, setNumeroLikes] = useState(50)

    const darLike = () => {
        if(like) {
            setNumeroLikes(numeroLikes -1)
            setLike(false)
        } else {
            setNumeroLikes(numeroLikes +1)
            setLike(true)
        }
    }


    return (
        <>
            <button className='like-btn' onClick={darLike}>
                <img src={like? like1 : like2} alt="" />
                <p>{numeroLikes}</p>                
            </button>
        </>
    )
}

export default Like
