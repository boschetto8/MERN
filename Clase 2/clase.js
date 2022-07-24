function armar (ingrediente){
    return function(complemente){
      console.log(`el sanguche es de ${ingrediente} con complemento ${complemente}`);
    }
  }
  const sand = armar('carne')
  sand('huevo y queso')


  function multiplicar (num1){
    return function(num2){
        console.log(num1*num2)
    }
  };

  let duplicar = multiplicar(2);
  let triplicar = multiplicar(3);

  duplicar(4);
  duplicar(5);

  triplicar(4);
  triplicar(5);