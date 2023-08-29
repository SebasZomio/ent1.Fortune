import getRandomPosArray from "../utils/getRandomPosArray"

const BtnQuote = ({ setQuote, phrases, setNumberBG }) => {

    const handleRandomPhrase =() =>{
        setQuote(getRandomPosArray(phrases))
        setNumberBG(getRandomPosArray([1, 2, 3, 4]))
    }

    return (
        <button className="container_btn" onClick={handleRandomPhrase}>OTRA FRASE</button>
    ) 
}   

export default BtnQuote