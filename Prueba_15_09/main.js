
class product{
    constructor (nombre,precio,id){
              
                        this.name=nombre,
                        this.precio=precio,
                        this.id=id
    }
  
}


class UI{
    añadirProducto(producto){
        var product_list= $('.product-list')
     
        var fila=document.createElement('tr')
        fila.innerHTML='<td>'+producto.name+'</td><td  class ="precio" value= '+producto.precio+'>'+producto.precio+'</td><td>'+producto.id+'</td><td><button value='+producto.id+' name ="borrar">Borrar</button></td>'
        product_list.append(fila);
    }   
    borrarProducto(e){
        if (e.name=='borrar'){
            $(e).parent().parent().remove()
        }

    }
    
    calcularPrecio(){
        var calc=0;    
        // var a=$('.valor');
        var lista =$('.precio').toArray();
        for(var f=0; f<lista.length; f++){
            calc=calc+ parseInt(lista[f].getAttribute('value'));
            
            }
        
        $('.Total').val(calc);

    }

}
cont=0;

$(function () {
    $('.button').click(function () {
       var name= $('.select').val();
       var kilos=$('.kilos').val();
       var precio=kilos*200;
       alert(precio+ ' '+kilos)
        cont++;
       var producto =new product(name,precio,cont) 
       var ui=new UI()
       ui.añadirProducto(producto);
       ui.calcularPrecio();
    })
})
$(function(){
        $('.product-list').click(function (e) {
            var ui=new UI()
            ui.borrarProducto(e.target);
            ui.calcularPrecio();
  
    })



      })






