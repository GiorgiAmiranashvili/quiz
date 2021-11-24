var shape = { 
    type: 'shape', 
    getType: function () { 
      return this.type; 
    } 
  };
  function Triangle(a, b, c) { 
    this.a = a; 
    this.b = b; 
    this.c = c; 
  } 

  Triangle.prototype = shape; 
  Triangle.prototype.constructor = Triangle; 
  Triangle.prototype.type = 'triangle'; 
  Triangle.prototype.getPerimeter = function () { 
    return this.a + this.b + this.c; 
  }; 

  var t = new Triangle(1, 2, 3); 
   t.constructor === Triangle; 
 
   shape.isPrototypeOf(t); 
 
  t.getPerimeter(); 
  
   t.getType(); 


  Array.prototype.shuffle = function () { 
    return this.sort(function () { 
      return Math.random() - 2.3; 
    }); 
  }; 


 console.log(shape.isPrototypeOf(t));
 console.log(t.getPerimeter());
 console.log(t.getType());