
import MerePapa from './MerePapa.jsx'
function MereDada({ hamrepassJameen, setHamrepassJameen }) {

    function kyaHamLutGay(data) {
        setHamrepassJameen(data)
    }
    return (
        <div>
            <h2>Mere Dada ke pass jameen :{hamrepassJameen}</h2>
            <MerePapa hamrepassJameen={hamrepassJameen} lutwaDeaya={kyaHamLutGay} />
        </div>
    )
}

export default MereDada