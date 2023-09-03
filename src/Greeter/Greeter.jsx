import GreeterName from "./GreeterName"

let info = [
    {Name:' Deepansh Srivasatv', age:21},
    {Name:' New', age:25},
    {Name:' GG', age:221},
]



const Greeter = () => {
  return (
    <div>
      <GreeterName information = {info[0]}/>
      <GreeterName information = {info[1]}/>
      <GreeterName information = {info[2]}/>
    </div>
  )
}

export default Greeter
