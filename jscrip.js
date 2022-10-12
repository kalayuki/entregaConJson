
  const contenedorProductosDesaYmerie=document.getElementById("desayu_merienda")
  const contenedorProdcutoFrutosSecos=document.getElementById("frutos__secos")
  const contenedorProductoLechesVegetales=document.getElementById("Leches__vegetales")
  const contendorProductosLegumbreYSemillas=document.getElementById("Semillas__y__legumbres")
  const contendorProductoseAceitesCondimentos=document.getElementById("aceites__y__condimentos")
  const contenedorMixs=document.getElementById("Mixs")
  const contenedorCarrito=document.getElementById("contenedorCarrito")
  const botonVaciar=document.getElementById("vaciar-carrito")
  const contadorCarrito=document.getElementById("contadorCarrito")
  const precioTotal=document.getElementById("precioTotal")



async function fetchProductos(){
    const response =await fetch('./productos.json')
    return await response.json()
  }
  
    //Array de objetos producto
    let baseDeDatos = []
    console.log(baseDeDatos)
   fetchProductos().then(productos =>{
     productos.forEach(producto =>{
       baseDeDatos.push(producto)
       
     })
     baseDeDatos.forEach((producto)=>{
        if (producto.tipo ==="DESAYUNOS Y MERIENDAS"){
            const contenodorCard=document.createElement("div")
            contenodorCard.classList.add("contenedor__tarjetas")
            contenodorCard.innerHTML =`
            <div class="card" style="width: 18rem; height:23rem;">
                            <img src=${producto.img} class="card-img-top" alt=>
                            <h5 class="tituloCard">${producto.nombre}</h5>
                            <p class="card-text">${producto.medida} </p>
                            <p class="precios">$${producto.precio} </p>
                           <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                            
                        </div>
            `
            contenedorProductosDesaYmerie.appendChild(contenodorCard)
            
            //Capturar accion del boton ID
            const boton=document.getElementById(`agregar${producto.id}`)
          
            boton.addEventListener('click',()=>{
               agregarAlCarrito(producto.id)
            
            })
            
        }else if(producto.tipo==="FRUTOS SECOS"){
            const contenodorCard=document.createElement("div")
            contenodorCard.classList.add("contenedor__tarjetas")
            contenodorCard.innerHTML =`
            <div class="card" style="width: 18rem; height:23rem;">
                            <img src=${producto.img} class="card-img-top" alt=>
                            <h5 class="tituloCard">${producto.nombre}</h5>
                            <p class="card-text">${producto.medida} </p>
                            <p class="precios">$${producto.precio} </p>
                           <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                            
                        </div>
            `
            contenedorProdcutoFrutosSecos.appendChild(contenodorCard)
            
            //Capturar accion del boton ID
            const boton=document.getElementById(`agregar${producto.id}`)
          
            boton.addEventListener('click',()=>{
               agregarAlCarrito(producto.id)
            
            })

        }else if(producto.tipo === "LECHES VEGETALES"){
            const contenodorCard=document.createElement("div")
            contenodorCard.classList.add("contenedor__tarjetas")
            contenodorCard.innerHTML =`
            <div class="card" style="width: 18rem; height:23rem;">
                            <img src=${producto.img} class="card-img-top" alt=>
                            <h5 class="tituloCard">${producto.nombre}</h5>
                            <p class="card-text">${producto.medida} </p>
                            <p class="precios">$${producto.precio} </p>
                           <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                            
                        </div>
            `
            contenedorProductoLechesVegetales.appendChild(contenodorCard)
            
            //Capturar accion del boton ID
            const boton=document.getElementById(`agregar${producto.id}`)
          
            boton.addEventListener('click',()=>{
               agregarAlCarrito(producto.id)
            
            })
          }else if (producto.tipo === "LEGUMBRES Y SEMILLAS" ){

            const contenodorCard=document.createElement("div")
            contenodorCard.classList.add("contenedor__tarjetas")
            contenodorCard.innerHTML =`
            <div class="card" style="width: 18rem; height:23rem;">
                            <img src=${producto.img} class="card-img-top" alt=>
                            <h5 class="tituloCard">${producto.nombre}</h5>
                            <p class="card-text">${producto.medida} </p>
                            <p class="precios">$${producto.precio} </p>
                           <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                            
                        </div>
            `
            contendorProductosLegumbreYSemillas.appendChild(contenodorCard)
            
            //Capturar accion del boton ID
            const boton=document.getElementById(`agregar${producto.id}`)
          
            boton.addEventListener('click',()=>{
               agregarAlCarrito(producto.id)
            
            })
          }else if (producto.tipo === "LEGUMBRES Y SEMILLAS" ){

            const contenodorCard=document.createElement("div")
            contenodorCard.classList.add("contenedor__tarjetas")
            contenodorCard.innerHTML =`
            <div class="card" style="width: 18rem; height:23rem;">
                            <img src=${producto.img} class="card-img-top" alt=>
                            <h5 class="tituloCard">${producto.nombre}</h5>
                            <p class="card-text">${producto.medida} </p>
                            <p class="precios">$${producto.precio} </p>
                           <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                            
                        </div>
            `
            contendorProductosLegumbreYSemillas.appendChild(contenodorCard)
            
            //Capturar accion del boton ID
            const boton=document.getElementById(`agregar${producto.id}`)
          
            boton.addEventListener('click',()=>{
               agregarAlCarrito(producto.id)
            
            })
          }else if (producto.tipo==="ACEITES Y CONDIMENTOS") { 
            const contenodorCard=document.createElement("div")
          contenodorCard.classList.add("contenedor__tarjetas")
          contenodorCard.innerHTML =`
          <div class="card" style="width: 18rem; height:23rem;">
                          <img src=${producto.img} class="card-img-top" alt=>
                          <h5 class="tituloCard">${producto.nombre}</h5>
                          <p class="card-text">${producto.medida} </p>
                          <p class="precios">$${producto.precio} </p>
                         <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                          
                      </div>
          `
          contendorProductoseAceitesCondimentos.appendChild(contenodorCard)
          
          //Capturar accion del boton ID
          const boton=document.getElementById(`agregar${producto.id}`)
          
          boton.addEventListener('click',()=>{
             agregarAlCarrito(producto.id)
          
          })
            
          }else if(producto.tipo==="MIX"){

 
            const contenodorCard=document.createElement("div")
          contenodorCard.classList.add("contenedor__tarjetas")
          contenodorCard.innerHTML =`
          <div class="card" style="width: 18rem; height:23rem;">
                          <img src=${producto.img} class="card-img-top" alt=>
                          <h5 class="titulocard">${producto.nombre}</h5>
                          <p class="card-text">${producto.medida} </p>
                          <p class="precios">$${producto.precio} </p>
                         <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                          
                      </div>
          `
          contenedorMixs.appendChild(contenodorCard)
          
          //Capturar accion del boton ID
          const boton=document.getElementById(`agregar${producto.id}`)
          boton.addEventListener('click',()=>{
           agregarAlCarrito(producto.id)
        
        })
         
        
        }
        


        })
     
   })

   const agregarAlCarrito = (prodId)=>{
    const inputElemento=document.getElementsByClassName('input__elemento')
    for(let i =0; i < carrito.length; i++){
      if(carrito[i].id=== prodId){
         carrito[i].cantidad++;
         const inputValue =inputElemento[i]
         inputValue.value++
         console.log(carrito)
         carritoTotal()
       return null
      }
    }
    
     const item =baseDeDatos.find((producto) =>producto.id === prodId)
      
    
     carrito.push(item)
  
     
    
     
     renderCarrito()
     
  
    
    
   }
  
   function renderCarrito(){
   contenedorCarrito.innerHTML=""
   carrito.forEach((producto)=>{
    const contenodorCard=document.createElement("div")
    contenodorCard.classList.add("contenedor-Carrito")
    contenodorCard.innerHTML =`
    <td class="table__productos">
    <img class="imagenCarrito" src=${producto.img} alt="">
    <h6 class="title">${producto.nombre}</h6>
    </td>
    <td class="table__price"><span class="precio">$ ${producto.precio}</span></td>
    
    <td class="table__cantidad">
    <input type="number" min="1" value=${producto.cantidad} class="input__elemento">
    <button class="delete${producto.id} eliminar btn btn-danget">Eliminar</button>
    </td>
   `
   contenedorCarrito.appendChild(contenodorCard)
   contenodorCard.querySelector(`.delete${producto.id}`).addEventListener('click',removerItemCarrito)
   
   contenodorCard.querySelector(".input__elemento").addEventListener('change',sumaLaCantidad)
   })
   carritoTotal()
   }
  
   function carritoTotal(){
    let total=0
    const itemCartTotal=document.querySelector("#precioTotal")
    carrito.forEach((item)=>{
     const precio= Number(item.precio)
     total= total +precio*item.cantidad
     addLocalStorage()
    })
    itemCartTotal.innerHTML=`Total $${total}`
    
   }
   function removerItemCarrito(e){
    const buttondelete=e.target
    const tr=buttondelete.closest(".contenedor-Carrito")
    const titulo=tr.querySelector('.title').textContent;
    for(let i=0; i< carrito.length; i++){
      if(carrito[i].nombre === titulo){
        carrito.splice(i,1)
      }
      tr.remove()
      carritoTotal()
    }
  }
   function sumaLaCantidad(e){
    const sumaInput= e.target
    const tr= sumaInput.closest(".contenedor-Carrito")
    const titulo=tr.querySelector(".title").textContent
    carrito.forEach(item =>{
      if(item.nombre === titulo){
        sumaInput.value< 1?(sumaInput.value= 1):sumaInput.value;
        item.cantidad =sumaInput.value
        carritoTotal()
      }
    })
  }
  
  function addLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }
  
  window.onload=function(){
    const storage= JSON.parse(localStorage.getItem('carrito'));
    if(storage){
      carrito = storage;
      renderCarrito()
    }
  }
  

   