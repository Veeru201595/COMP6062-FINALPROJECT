const { createApp } = Vue;

createApp({
  data() {
    return {
      fullName: '',
      age: '',
      photo: '',
      cityName: 'London',
      provinceName: 'Ontario',
      countryName: 'Canada',
      Temperature: '',
      Wind: '',
      Description: '',
      word: '',
      Word: '',
      Phonetic: '',
      Definition: ''
    };
  },
  computed() {
    this.fetchUser();
    this.GetWeatherInfo();
    this.GetWordData();
  },
  methods: {
    fetchUser() {
        fetch('http://comp6062.liamstewart.ca/random-user-profile')
          .then(response => response.json())
          .then(data => {
            this.fullName = data.first_name + ' ' + data.last_name;
            this.age = data.age;
            this.photo = data.profile_picture;
          });
    },
    GetWeatherInfo() {
        fetch(`http://comp6062.liamstewart.ca/weather-information?city=${this.cityName}&province=Ontario&country=Canada`)
          .then(response => response.json())
          .then(data => {
            this.Temperature = data.temperature;
            this.Wind = data.wind_speed;
            this.Description = data.weather_description;
          });
    },
    GetWordData() {
        fetch(`https://comp6062.liamstewart.ca/define?word=${this.word}`)
          .then(response => response.json())
          .then(data => {
            const entry = data[0];
            this.Word = entry.word;
            this.Phonetic = entry.phonetic;
            this.Definition = entry.definition;
          });
      }      
  }
}).mount('#app');
