let calculator = {
  read: function(a, b){
    this.valueOne = a;
    this.valueTwo = b;
  },
  sum(){
    return this.valueOne + this.valueTwo;
  },
  mul(){
    return this.valueOne * this.valueTwo;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
