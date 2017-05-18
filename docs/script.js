function addRecipe(){
  showBreakfast();
}

function showAll(){
  document.getElementById('all').style.borderBottom = '2px solid black';
  document.getElementById('breakfast').style.borderBottom = 'none';
  document.getElementById('lunch').style.borderBottom = 'none';
  document.getElementById('dinner').style.borderBottom = 'none';
  document.getElementById('snacks').style.borderBottom = 'none';
  var breakfast = document.getElementsByClassName('breakfast');
  var lunch = document.getElementsByClassName('lunch');
  var dinner = document.getElementsByClassName('dinner');
  var snack = document.getElementsByClassName('snack');
  for(var i=0; i < breakfast.length; i++){
    breakfast[i].style.display = 'block';
  }
  for(var i=0; i < lunch.length; i++){
    lunch[i].style.display = 'block';
  }
  for(var i=0; i < dinner.length; i++){
    dinner[i].style.display = 'block';
  }
  for(var i=0; i < snack.length; i++){
    snack[i].style.display = 'block';
  }
}

function showBreakfast(){
  document.getElementById('breakfast').style.borderBottom = '2px solid black';
  document.getElementById('all').style.borderBottom = 'none';
  document.getElementById('lunch').style.borderBottom = 'none';
  document.getElementById('dinner').style.borderBottom = 'none';
  document.getElementById('snacks').style.borderBottom = 'none';
  var breakfast = document.getElementsByClassName('breakfast');
  var lunch = document.getElementsByClassName('lunch');
  var dinner = document.getElementsByClassName('dinner');
  var snack = document.getElementsByClassName('snack');
  for(var i=0; i < lunch.length; i++){
    lunch[i].style.display = 'none';
  }
  for(var i=0; i < dinner.length; i++){
    dinner[i].style.display = 'none';
  }
  for(var i=0; i < snack.length; i++){
    snack[i].style.display = 'none';
  }
  for(var i=0; i < breakfast.length; i++){
    breakfast[i].style.display = 'block';
  }
}

function showLunch(){
  document.getElementById('lunch').style.borderBottom = '2px solid black';
  document.getElementById('breakfast').style.borderBottom = 'none';
  document.getElementById('all').style.borderBottom = 'none';
  document.getElementById('dinner').style.borderBottom = 'none';
  document.getElementById('snacks').style.borderBottom = 'none';
  var breakfast = document.getElementsByClassName('breakfast');
  var lunch = document.getElementsByClassName('lunch');
  var dinner = document.getElementsByClassName('dinner');
  var snack = document.getElementsByClassName('snack');
  for(var i=0; i < breakfast.length; i++){
    breakfast[i].style.display = 'none';
  }
  for(var i=0; i < dinner.length; i++){
    dinner[i].style.display = 'none';
  }
  for(var i=0; i < snack.length; i++){
    snack[i].style.display = 'none';
  }
  for(var i=0; i < lunch.length; i++){
    lunch[i].style.display = 'block';
  }
}

function showDinner(){
  document.getElementById('dinner').style.borderBottom = '2px solid black';
  document.getElementById('breakfast').style.borderBottom = 'none';
  document.getElementById('lunch').style.borderBottom = 'none';
  document.getElementById('all').style.borderBottom = 'none';
  document.getElementById('snacks').style.borderBottom = 'none';
  var breakfast = document.getElementsByClassName('breakfast');
  var lunch = document.getElementsByClassName('lunch');
  var dinner = document.getElementsByClassName('dinner');
  var snack = document.getElementsByClassName('snack');
  for(var i=0; i < breakfast.length; i++){
    breakfast[i].style.display = 'none';
  }
  for(var i=0; i < lunch.length; i++){
    lunch[i].style.display = 'none';
  }
  for(var i=0; i < snack.length; i++){
    snack[i].style.display = 'none';
  }
  for(var i=0; i < dinner.length; i++){
    dinner[i].style.display = 'block';
  }
}

function showSnacks(){
  document.getElementById('snacks').style.borderBottom = '2px solid black';
  document.getElementById('breakfast').style.borderBottom = 'none';
  document.getElementById('lunch').style.borderBottom = 'none';
  document.getElementById('dinner').style.borderBottom = 'none';
  document.getElementById('all').style.borderBottom = 'none';
  var breakfast = document.getElementsByClassName('breakfast');
  var lunch = document.getElementsByClassName('lunch');
  var dinner = document.getElementsByClassName('dinner');
  var snack = document.getElementsByClassName('snack');
  for(var i=0; i < breakfast.length; i++){
    breakfast[i].style.display = 'none';
  }
  for(var i=0; i < lunch.length; i++){
    lunch[i].style.display = 'none';
  }
  for(var i=0; i < dinner.length; i++){
    dinner[i].style.display = 'none';
  }
  for(var i=0; i < snack.length; i++){
    snack[i].style.display = 'block';
  }
}
