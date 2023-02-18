import './Body.css'
import React from 'react';



function Body(){
    const [formData, setFormData] = React.useState({'top-text':'','bottom-text':''})
    const [memes, setMemes] = React.useState({})

    React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((data)=>setMemes(data))    
    console.log('fetched')
    }, [])

    console.log('b')
    const [meme, setMeme] = React.useState({'top-text':'Bruu','bottom-text':'Wooo','image':'https://i.imgflip.com/2wifvo.jpg'})


    function submit(event){
        event.preventDefault()
        let randNum = Math.ceil(Math.random() * 99);
        setMeme((prevMeme)=>{
            return ({
                ...prevMeme,
                'image': memes.data.memes[randNum].url
            })
        })
        
    }

    function press(event){
        // console.log(formData[event.target.name])
        setFormData(
            prevFormData => {
                return ({...prevFormData, [event.target.name]:event.target.value})
            }
        )
        setMeme(
            prevMeme =>{
                return ({
                    ...prevMeme,
                    [event.target.name]:event.target.value
                })
            }
        )
        let a = document.getElementById('main-image').offsetWidth;

    }
    return(
        <div className="body">
            <form onSubmit={submit} className="form">
                <input type="text" onChange={press} autoComplete="off" placeholder="Top text" name='top-text' className='top-text' value={formData['top-text']}/>
                <input type="text" onChange={press} autoComplete="off" placeholder="Bottom text" name='bottom-text' className='bottom-text' value={formData['bottom-text']}/>
                <button className='submit'>Get a new meme image</button>
            </form>
            <Draggable>
            <div className="top-text-1">{meme['top-text']}</div>
            </Draggable>
            <Draggable>
            <div className="bottom-text-1">{meme['bottom-text']}</div>
            </Draggable>
            
            <img id="main-image" src={meme.image}></img>  
        </div>
    )
}

export default Body
