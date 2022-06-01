module.exports = (mongoose) => {
    const Movie = mongoose.model(
      "movie",
      mongoose.Schema({
        movieid: {
          type: Number,
          required: true,
          unique: true,
        },
        title: {
          type: String,
          required: true,
        },
        published: {
          type: Boolean,
          required: true,
        },
        released: {
          type: Boolean,
          required: true,
        },
        poster_url: {
          type: String,
          required: true,
        },
        release_date: {
          type: String,
          required: true,
        },
        publish_date: {
          type: String,
          required: true,
        },
        artists: {
          type: [],
          required: true,
        },
        genres: {
          type: [],
          required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        critic_rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        trailer_url: {
          type: String,
          required: true,
        },
        wiki_url: {
          type: String,
          required: true,
        },
        story_line: {
          type: String,
          required: true,
        },
        shows: {
          type: [],
          required: true,
        },
      })
    );
    Movie.insertMany([
      {
        movieid: 1,
        title: "The Lodgers",
        published: true,
        released: true,
        poster_url:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg",
        release_date: "1/1/2020",
        publish_date: "2/2/2020",
        artists: [
            {
                artistid: 1,
                first_name: "amitabh",
                last_name: "bachchan",
                wiki_url: "https://en.wikipedia.org/wiki/Amitabh_Bachchan",
                profile_url:
                  "https://wikibio.in/wp-content/uploads/2017/12/Amitabh-Bachchan.jpg",
                movies: [],
              },
            { artistid: 2,
                first_name: "nasiruddin",
                last_name: "shah",
                wiki_url: "https://en.wikipedia.org/wiki/Naseeruddin_Shah",
                profile_url:
                  "https://wikibio.in/wp-content/uploads/2019/06/Naseeruddin-Shah.jpg",
                movies: [],
              },
              {
                artistid: 3,
                first_name: "rajkumar",
                last_name: "rao",
                wiki_url: "https://en.wikipedia.org/wiki/Rajkummar_Rao",
                profile_url:
                  "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/09/rajkumar-rao.jpg?fit=768%2C432&ssl=1",
                movies: [],
              },
              {
                artistid: 4,
                first_name: "shabana",
                last_name: "azmi",
                wiki_url: "https://en.wikipedia.org/wiki/Shabana_Azmi",
                profile_url:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Shabana_Azmi_SFU_honorary_degree_%28cropped%29.jpg/1200px-Shabana_Azmi_SFU_honorary_degree_%28cropped%29.jpg",
                movies: [],
              },
              {
                artistid: 5,
                first_name: "pankaj",
                last_name: "kapoor",
                wiki_url: "https://en.wikipedia.org/wiki/Pankaj_Kapur",
                profile_url:
                  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Pankaj_Kapur.jpg",
                movies: [],
              },
            ],
            genres: ["comedy", "drama", "action", "romance", "horror"],
            duration: 200,
            critic_rating: 3,
            trailer_url: "https://www.youtube.com/watch?v=ltIcW2xMuzs",
            wiki_url: "https://en.wikipedia.org/wiki/Main_Page",
            story_line:
              "1920, rural Ireland. Anglo Irish twins Rachel and Edward share a strange existence in their crumbling family estate. Each night, the property becomes the domain of a sinister presence (The Lodgers) which enforces three rules upon the twins: they must be in bed by midnight; they may not permit an outsider past the threshold; if one attempts to escape, the life of the other is placed in jeopardy. When troubled war veteran Sean returns to the nearby village, he is immediately drawn to the mysterious Rachel, who in turn begins to break the rules set out by The Lodgers. The consequences pull Rachel into a deadly confrontation with her brother - and with the curse that haunts them.",
            shows: [
              {
                id: 1001,
                theatre: { name: "CityPride", city: "Pune" },
                language: "English",
                show_timing: "1/1/2021",
                available_seats: "5",
                unit_price: 200,
              },
              {
                id: 1002,
                theatre: { name: "CityPride", city: "Mumbai" },
                language: "Hindi",
                show_timing: "2/1/2021",
                available_seats: "20",
                unit_price: 100,
              },
              {
                id: 1003,
                theatre: { name: "ESqaure", city: "Pune" },
                language: "Marathi",
                show_timing: "3/3/2021",
                available_seats: "20",
                unit_price: 300,
              },
            ],
          },
          {
            movieid: 2,
            title: "Hannah",
            published: true,
            released: false,
            poster_url:
              "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
            release_date: "1/1/2020",
            publish_date: "2/2/2020",
            artists: [
              {
                artistid: 1,
                first_name: "amitabh",
                last_name: "bachchan",
                wiki_url: "https://en.wikipedia.org/wiki/Amitabh_Bachchan",
                profile_url:
                  "https://wikibio.in/wp-content/uploads/2017/12/Amitabh-Bachchan.jpg",
                movies: [],
              },
              {
                artistid: 5,
                first_name: "pankaj",
                last_name: "kapoor",
                wiki_url: "https://en.wikipedia.org/wiki/Pankaj_Kapur",
                profile_url:
                  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Pankaj_Kapur.jpg",
                movies: [],
              },
            ],
            genres: ["drama", "action", "horror"],
            duration: 200,
            critic_rating: 3,
            trailer_url: "https://www.youtube.com/watch?v=u73CLdHpbNk",
            wiki_url: "https://en.wikipedia.org/wiki/Main_Page",
            story_line:
              "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
            shows: [
              {
                id: 2001,
                theatre: { name: "CityPride", city: "Pune" },
                language: "English",
                show_timing: "1/1/2021",
                available_seats: "50",
                unit_price: 100,
              },
              {
                id: 2002,
                theatre: { name: "CityPride", city: "Mumbai" },
                language: "Hindi",
                show_timing: "2/1/2021",
                available_seats: "20",
                unit_price: 100,
              },
            ],
          },
          {
            movieid: 3,
            title: "Beast of Burden",
            published: false,
            released: true,
            poster_url:
              "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg",
            release_date: "1/1/2020",
            publish_date: "2/2/2020",
            artists: [
              {
                artistid: 2,
                first_name: "nasiruddin",
                last_name: "shah",
                wiki_url: "https://en.wikipedia.org/wiki/Naseeruddin_Shah",
                profile_url:
                  "https://wikibio.in/wp-content/uploads/2019/06/Naseeruddin-Shah.jpg",
                movies: [],
              },
              {
                artistid: 3,
                first_name: "rajkumar",
                last_name: "rao",
                wiki_url: "https://en.wikipedia.org/wiki/Rajkummar_Rao",
                profile_url:
                  "https://i1.wp.com/wikifamouspeople.com/wp-content/uploads/2018/09/rajkumar-rao.jpg?fit=768%2C432&ssl=1",
                movies: [],
              },
              {
                artistid: 5,
                first_name: "pankaj",
                last_name: "kapoor",
                wiki_url: "https://en.wikipedia.org/wiki/Pankaj_Kapur",
                profile_url:
                  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Pankaj_Kapur.jpg",
                movies: [],
              },
            ],
            genres: ["romance", "horror"],
            duration: 200,
            critic_rating: 3,
            trailer_url: "https://www.youtube.com/watch?v=ynrVa9YWSJU",
            wiki_url: "https://en.wikipedia.org/wiki/Main_Page",
            story_line:
              "Sean Haggerty only has an hour to deliver his illegal cargo. An hour to reassure a drug cartel, a hitman, and the DEA that nothing is wrong. ",
            shows: [
              {
                id: 3001,
                theatre: { name: "CityPride", city: "Pune" },
                language: "English",
                show_timing: "1/1/2021",
                available_seats: "50",
                unit_price: 100,
              },
            ],
          },
          {
            movieid: 4,
            title: "The Chamber",
            published: true,
            released: true,
            poster_url:
              "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVlODgwMjgtZGUzMy00ZTY1LWIyMDEtYTI2Y2JlYzVjZTNkXkEyXkFqcGdeQXVyNTg0MDM1MzY@._V1_SY500_CR0,0,337,500_AL_.jpg",
            release_date: "1/1/2020",
            publish_date: "2/2/2020",
            artists: [
              {
                artistid: 4,
                first_name: "shabana",
                last_name: "azmi",
                wiki_url: "https://en.wikipedia.org/wiki/Shabana_Azmi",
                profile_url:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Shabana_Azmi_SFU_honorary_degree_%28cropped%29.jpg/1200px-Shabana_Azmi_SFU_honorary_degree_%28cropped%29.jpg",
                movies: [],
              },
              {
                artistid: 5,
                first_name: "pankaj",
                last_name: "kapoor",
                wiki_url: "https://en.wikipedia.org/wiki/Pankaj_Kapur",
                profile_url:
                  "https://upload.wikimedia.org/wikipedia/commons/a/ac/Pankaj_Kapur.jpg",
                movies: [],
              },
            ],
            genres: ["comedy", "drama", "action"],
            duration: 200,
            critic_rating: 3,
            trailer_url: "https://www.youtube.com/watch?v=MkBbkFLkrh0",
            wiki_url: "https://en.wikipedia.org/wiki/Main_Page",
            story_line:
              "A claustrophobic survival thriller set beneath the Yellow Sea off the coast of North Korea where the pilot of a small submersible craft and a three man Special Ops team on a secret recovery mission become trapped underwater in a fight for survival.",
            shows: [
              {
                id: 4001,
                theatre: { name: "CityPride", city: "Pune" },
                language: "English",
                show_timing: "1/1/2021",
                available_seats: "50",
                unit_price: 100,
              },
            ],
          },
        ]);
        return Movie;
      };