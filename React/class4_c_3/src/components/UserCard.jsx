


import "./UserCard.css"
function UserCard({ setDataObject }) {
    console.log("function kee body in userCard", setDataObject)
    const Data = {
        id: 101,
        name: "Jagmohan Rai",
        age: "25"
    }
    return (
        <div><button onClick={() => {
            setDataObject(Data)
        }}>send user Data </button></div>
    )
}
export default UserCard