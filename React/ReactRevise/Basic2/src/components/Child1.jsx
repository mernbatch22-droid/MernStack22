

function Child1(props) {
  console.log(props.age);
  console.log(props['age'])
  const { age } = props
  console.log(age)

  return (
    <div>
      Child1

    </div>
  )
}

export default Child1