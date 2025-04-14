function random(){

    let number=Math.random()*10;
  
    return <h1 style={{backgroundColor: 'red', color: 'white'}}>
      random number is {Math.round(number)}
    </h1>
  
  }
  
  
  
  export default random;  