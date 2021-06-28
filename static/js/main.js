// $(document).ready(function(){
// //   alert("order ready")  
//   $("#size").on("click", function(){
//     $("#sizesmall").show();
//     $("#sizemedium").hide();
//       $("#sizelarge").hide();
//   })

//   $("#medium").on("click", function(){
//     $("#sizesmall").hide();
//     $("#sizemedium").show();
//       $("#sizelarge").hide();
//   })

//   $("#large").on("click", function(){
//     $("#sizesmall").hide();
//     $("#sizemedium").hide();
//       $("#sizelarge").show();
//   })

// });

function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    }


function add(){
    var a,b,c;
    a=parseFloat(document.getElementById("first").value);
    b=parseFloat(document.getElementById("second").value);
    c= a + b;
    var blank1=document.getElementById("first").value;
    var blank2=document.getElementById("second").value;
    if (blank1===""){
      alert("Input your pizza price first.");
    }else if (blank2===""){
      alert("Input the prize of your pizza-toppings as well to get the total.");
    }
    else{
    document.getElementById("answer").value= c;
  }
  }
  
  function delivery(){
    var a=document.getElementById("deliver").value;
    var blank1=document.getElementById("first").value;
    var blank2=document.getElementById("second").value;
    if(blank1===""){
      alert("Input your pizza price first.");
    } else if(blank2===""){
      alert("Input your pizza-toppings price before choosing the delivery option.");
    }
    else if(a==="Yes"){
     var place=prompt("Please enter the preferred location you wish your pizza get delivered");
     alert("Your order will be delivered to "+place+" once you checkout.");
     alert("You will be charged $ 2.00 as delivery fee.Thank you, enjoy every bite.");
   } else if(a==="No"){
     alert("Thank you for placing your order.");
   }
  }