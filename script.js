const student = "Зайротьянц захар Денисович "; 

document.getElementById("student").innerHTML = student;
const g3 = Array(16).fill([4, 1, 2, 5, 2, 2, 0]); // первый учебнный семестр
const f2 = Array(1).fill([0, 0, 2, 2, 0, 0, 0]); // 1 сессия 
const l3 = Array(23).fill([1, 4, 4, 2, 5, 0, 0]); // 2 семестр
const fuel = Array(1).fill([0, 0, 2, 2, 2, 0, 0]); // Сессия 2
const game = Array(2).fill([0, 0, 0, 0, 0, 0, 0]); // выходные\каникулы
const array = [g3, f2, game, l3, fuel];

const beletek = 120;
const pristavka = 23500;
const sold = 150;
const fordood = 250;
let proezd_diff = sold - beletek;  
let day = 0;  
let week = 0; 
let kopilka = 0;  
for (let i = 0; i < array.length; i++) { 
  for (let j = 0; j < array[i].length; j++) {
    week = week + 1;
    console.log('номер недели: ' + week);

    for (let k = 0; k < array[i][j].length; k++) {
      let element = array[i][j][k];
      day = day + 1;
      console.log('номер дня: ' + day);
      if (element > 0) {
        kopilka = kopilka + proezd_diff;
        if (element <= 3) {
          kopilka = kopilka + fordood;
          console.log('денег: ' + kopilka)
        }
        
      }
      if(pristavka <= kopilka) break
    }
    if(pristavka <= kopilka) break
  }
  if(pristavka <= kopilka) break  
}
if(pristavka <= kopilka ){console.log('зизагу удалось', kopilka, day )
}
else{
  console.log('зигзаг заплакал', day, kopilka);
}