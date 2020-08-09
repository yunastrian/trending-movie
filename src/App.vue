<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Trending Movie</h2>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <h4>{{ date }}</h4>
      </div>
    </v-app-bar>

    <v-main>
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              v-for="movie in movies"
              :key="movie.id"
              cols="12"
              md="4"
            >
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
                >
                </v-img>

                <v-card-title>{{ movie.title }} ({{ movie.release_date.substring(0, 4) }})</v-card-title>
                <v-card-subtitle class="pb-0">score: {{ movie.vote_average }} / 10</v-card-subtitle>
                
                <v-card-text class="text--primary">
                  <div>{{ movie.overview }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                    :href="`https://www.themoviedb.org/movie/${movie.id}`"
                  >
                    Detail
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-main>

    <v-footer 
      app
      color="primary"
      dark
    >
      <v-row
        justify="center"
        no-gutters
      >
        <footer-custom year="2020" author="Kurniandha Sukma Yunastrian"></footer-custom>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data: () => ({
    date: null,
    movies: null
  }),
  beforeMount() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    
    this.date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day?api_key=81b50f79b05566f0f3721736ae5ab573')
      .then(response => {
        this.movies = response.data.results
      });
  }
};
</script>
