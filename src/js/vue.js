const app = new Vue({
   el: '#app',
   data: {
      cities: [], //Массив объектов городов с населением
      aaa: 0,
   },
   computed: {
      outputCities() {//Вывод городов с начелением больше 50000
         return this.cities.sort(this.sortCities()).filter((city) => {
            if (city.population >= 50000) {
               return city
            }
         })
      },
      megaCity() {
         return this.cities.reduce((a) => {//Поиск самого большого города по населению
            return (a.population > this.a) ? this.a = a.population
         });
      }
      // gggg() {
      //    return console.log(this.outputCities.unshift(...this.outputCities.splice(this.outputCities.filter((population, index) => {
      //       if (population.population == this.maxPopulation) {
      //          return index;
      //       }
      //    }),1)));

      // }
   },
   methods: {
      makeGETRequest() {//Запрос списка городов
         fetch(`../cities.json`) //fetch- функция, которая выполняет ajax запрос
            .then(data => data.json())// .json() - метод, который парсит строку и возвращает объект промис
            .catch(err => console.log(err))
            .then(data => {
               this.cities = [...data]
            })
      },
      sortCities() {//Функция на сортировку городов по алфавиту 
         return (a, b) => a.city > b.city ? 1 : -1;
      }

   },
   mounted() {
      this.makeGETRequest()
   }
})
