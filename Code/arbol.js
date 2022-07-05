function alturaArbolUtopico(ciclos) { 
    let altura = 1; 
    for(let i=1; i<=ciclos; i++){
         if(i%2 == 0){ altura++ 
        } else { altura = altura*2 
      } 
    } return altura
 } 

 console.log(alturaArbolUtopico(4))