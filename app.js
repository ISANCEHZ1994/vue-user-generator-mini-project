
const app = Vue.createApp({
    // Can also use this way - for now we are in index.html file
    // NOTE: must be commented out for the index file to work
    // template:   "<h1>Hello World</h1>"
    //             + "<p>{{firstName}}</p>"
    //             + "<p>{{lastName}}</p>"
    //             + "<button>Get Random User</button>",
    data(){
        return {
            firstName: 'Israel',
            lastName: 'Sanchez',
            email:    'Israel.fakeMail@gmail.com',
            gender:   'male',
            picture:  'https://www.denofgeek.com/wp-content/uploads/2022/06/Dragon-Ball-Z-Best-Battles.jpg?fit=1920%2C1080',
            loading: false,
        }
    },
    methods: {
        async getUser(){
            this.loading = true;
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
           
            // console.log( results );

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
            
            this.loading = false;
            // BELOW is for example for one person and how variables change
            // console.log( this.firstName, "BEFORE" );
            // this.firstName = 'Raul';
            // this.lastName = 'Mateo Sanchez';
            // this.email = 'Raul.FakerMail@yourMom.com';
            // this.gender = 'male';
            // this.picture = 'https://m.media-amazon.com/images/M/MV5BZWIzNzQ3ZDctODYxYi00YjUwLTg1MDgtMDg4Mzc0NWM4ZGY0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg';
            // console.log( this.firstName, "AFTER" )
        }
    }
});

app.mount('#app')
