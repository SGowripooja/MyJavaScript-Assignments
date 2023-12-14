let tickId=null;
let printRange = (num = 0, action = () => {}) => {
    tickId = setTimeout(() => {
      const outPut = document.getElementById('ans');
      outPut.innerHTML=num;
      window.alert(num)
      document.body.appendChild(outPut);  
      console.log(num)
    }, 5000)
    if(action) {
            action()
    }
 }
 printRange(10, 
	() => printRange(9, 
  	() => printRange(8,
      () => printRange(7,
      	() => printRange(6, 
        	() => printRange(5,
            () => printRange(4,
              () => printRange(3, 
                () => printRange(2, 
                () =>printRange(1, 
                () =>printRange('Happy Independence Day!!!'))
              )
            )
          )
        )
      )
    )
   )
  )
);

