

function Child2({ info }) {
  console.log("info", info)

  const filArr = info.filter((item) => item >= 20);
  let TotalSum = filArr.reduce((acc, item) => acc + item);
  console.log(TotalSum)

  // let s = 0;
  // for (let i = 0; i < filArr.length; i++) {
  //   if (info[i] >= 20) {
  //     s = s + info[i]
  //   }
  // }
  return (
    <div>Child2
      <section>
        <mark>{info}</mark>

        {
          info.map((item, index) => <p key={index}>{item}</p>)
        }

        {
          filArr.map((item, index) => <p key={index}>{item}</p>)
        }
      </section>
    </div>
  )
}

export default Child2