var wrap = document.body.querySelector(".wrap");

function attack(damage, attackType) {
  var ele = document.createElement("div");
  ele.innerHTML = damage;
  if (fireAttack) {
    damage = "3";
  }
  wrap.appendChild(ele);
}

if (iceAttack) {
    damage = "1";
  }
  wrap.appendChild(ele);
if (poisonAttack) {
    damage = "4";
  }
  wrap.appendChild(ele);


var dragonDamage = 0;

document.body
  .querySelector(".fireAttack")
  .addEventListener("click", function () {
    attack(fireAttack, 3,);
  
  }
                   
                   );
attack(iceAttack, 1);
  attack(poisonAttack, 4);