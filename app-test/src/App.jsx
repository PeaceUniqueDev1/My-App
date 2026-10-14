function Greetings(props) {
  console.log(props)
  return <h1>Welcome to My React Class, {props.name}! Thanks i am {props.age} years old.</h1>
}



function App(){

  let age = 70;
  

  return( 
    <div class="name">
  <Greetings name='Shade' age={50} />
  <Greetings name='Jimin' age={age} />
  </div>
)
}



export default App