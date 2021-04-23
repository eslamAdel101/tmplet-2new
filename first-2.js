


/*

function testt(){
    alert('welcom user')
};

testt();



function calcu(x){
    console.log(( x*16) + 50 )
} ;
calcu(10);
function ted(x){
    var coco = x*10 +5
    console.log(coco)
};
ted(20);

//object
var student = {
    name:'eslam',
    age:25,
    address:{stret:10,country:"egypt",state:'aleomde'},
    masege : function(){
       namee = prompt('enter your name')
    }
};
console.log(student);
 student.masege();
document.getElementById('toto').innerHTML=namee+= 'wlcome';
//array
var colors = ['red','black','blou','waihet' ]
console.log(colors);
console.log(colors[1]);
//for
for ( var i=0;i<colors.length;i++){
console.log(colors[i])
};






colors.push('eslamm');

colors.unshift('solom');

*/


/*---------------------<varibaul>------------------------------------------------*/
var nameInp = document.getElementById('ProductName');
var categoryInp = document.getElementById('ProductCategory');

var priceInp = document.getElementById('ProductPrice');
var descInp = document.getElementById('ProductDescription'); 


if(localStorage.getItem("productData")==null){
var productList = [];
}
else{
var  productList = JSON.parse(localStorage.getItem("productData"))
}
dispalyProducts();
/*---------------------</varibaul>------------------------------------------------*/




/*--------------------<add Product>-----------------------------------------*/
function addProduct (){
    console.log(validationPrice())
if(validateProductName()== true 
&& categoryInp.value!=""
&& validationPrice()== true 
&& descInp.value!=""){
    var product = {


        name: nameInp.value ,
        category: categoryInp.value ,
        price: priceInp.value ,
        desc: descInp.value ,
    };
productList.push(product); 

localStorage.setItem("productData", JSON.stringify(productList) ); 

console.log(productList);

dispalyProducts();

clearForm();
}
};

/*--------------------</add Product>-----------------------------------------*/



/*--------------------<dispaly Product>-----------------------------------------*/
function dispalyProducts(){

var trs ="";
for (var i=0 ; i<productList.length;i++ ){

trs += `
<tr>
    <td>${i} </td>
    <td>${productList[i].name}</td>
    <td>${productList[i].category}</td>
    <td>${productList[i].price} </td>
    <td>${productList[i].desc} </td>
<td><button onclick = "deleteProduct(${i}) " class=" btn  bg-danger">delete</button></td>
<td><button onclick = "updateProduct(${i})" class=" btn  bg-warning">update</button></td>
 </tr>
`;

}
 //console.log(trs);
document.getElementById("tbody").innerHTML= trs;

}

/*--------------------</dispaly Product>-----------------------------------------*/

/*--------------<delete>------------------------*/
function deleteProduct(i){
productList.splice(i,1); 
localStorage.setItem("productData", JSON.stringify(productList) ); 
dispalyProducts();
};
/*--------------</delete>------------------------*/



/*------------------<search>------------------------*//////////////

var searchInp =document.getElementById("searchInp");

function search(){
var str ="";

for (var i=0; i < productList.length; i ++ )   {
    
if ( productList[i].name.toLowerCase().includes(searchInp.value.toLowerCase())){
    str += `
    <tr>
        <td>${i} </td>

        <td>${productList[i].name.toLowerCase().replace(searchInp.value ,`
        <span style='background-color:red;'>${searchInp.value.toLowerCase()}</span>`)}</td>

        <td>${productList[i].category}</td>
        <td>${productList[i].price} </td>
        <td>${productList[i].desc} </td>
    <td><button onclick = "deleteProduct(${i}) " class=" btn  bg-danger">delete</button></td>
    <td><button class=" btn  bg-warning">update</button></td>
     </tr>
    `;
    
    } else {
} 
    console.log("no");
}
   
document.getElementById("tbody").innerHTML = str; 













 


}



/*--------------------<update>-----------------------------------*/


var aaddProduct = document.getElementById("addProduct");

function updateProduct(i){

nameInp.value = productList[i].name
categoryInp.value = productList[i].category
priceInp.value = productList[i].price
descInp.value=productList[i].desc

aaddProduct.innerHTML = "update product";
aaddProduct.onclick = function(){

productList[i].name = nameInp.value;
productList[i].category = categoryInp.value;
productList[i].price= priceInp.value;
productList[i].desc=descInp.value;



localStorage.setItem("productData", JSON.stringify(productList) ); 

dispalyProducts();

aaddProduct.innerHTML = "add Product";

aaddProduct.onclick = addProduct;

clearForm();


};

alert("eslammmmmm");


}



/*--------------------</update>-----------------------------------*/



/*--------------------<clear form>-----------------------------------*/

function clearForm(){

nameInp.value = null;
priceInp.value = null;
categoryInp.value = null;
descInp.value = null;




}


/*--------------------</clear form>-----------------------------------*/





/*--------------------<validation-product name>-----------------------------------*/
var nameAlert =document.getElementById("nameAlert");

function validateProductName(){

var nameRegex = /^[A-Z][a-z 0-9]{3,15}$/;

var nameValue = nameInp.value;

if ( nameRegex.test(nameValue)){
    
    nameInp.classList.remove("is-invalid");
    
    nameInp.classList.add("is-valid");

    nameAlert.classList.add("d-none");

    aaddProduct.removeAttribute("disabled")
    return true
}
else{
    nameInp.classList.add("is-invalid");
    nameAlert.classList.remove("d-none");
    aaddProduct.setAttribute("disabled","true")
return false
}
}
nameInp.addEventListener("keyup",validateProductName);
/*--------------------</validation-product name>-----------------------------------*/



/*--------------------</validation-price>-----------------------------------*/
var  priceAlert = document.getElementById("priceAlert");
function validationPrice(){
var priceRegex =/^([1-7][0-9]|80)$/ ;
var priceValue = priceInp.value;
if (priceRegex.test(priceValue)){
priceInp.classList.remove("is-invalid");
priceInp.classList.add("is-valid");
priceAlert.classList.add("d-none")
aaddProduct.removeAttribute("disabled")
return true
}
else{
    priceInp.classList.add("is-invalid");
    priceAlert.classList.remove("d-none");
    aaddProduct.setAttribute("disabled","true")
return false
}
}
priceInp.addEventListener("keyup",validationPrice);
