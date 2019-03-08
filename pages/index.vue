<template>
  <div>
    <b-jumbotron bg-variant="dark" text-variant="white">
      <h1 class="text-center">
        xpaper.challenge
      </h1>
    </b-jumbotron>
    <b-container class="content">
      <b-col cols="12" md="10" offset-md="1" lg="6" offset-lg="3">
        <b-card-group deck>
          <b-card
            :img-src="require('~/static/image/cvpaperchallenge-logo.png')"
            class="with-shadow"
            height="100"
            img-top
            img-alt="cvpaperchallenge"
          >
            <h4 class="text-center">cvpaper.challenge</h4>
            <a href="http://xpaperchallenge.org/cv" class="btn stretched-link"></a>
          </b-card>
          <b-card
            :img-src="require('~/static/image/nlpaperchallenge-logo.png')"
            class="with-shadow"
            height="100"
            img-top
            img-alt="nlpaperchallenge"
          >
            <h4 class="text-center">nlpaper.challenge</h4>
            <a href="http://xpaperchallenge.org/nlp" class="btn stretched-link"></a>
          </b-card>
        </b-card-group>
      </b-col>
    </b-container>
    <footer class="footer mt-5">
      <div class="bg-dark text-white">
          <h5 class="text-center pt-2 pb-2 mb-0">&copy;2019 xpaperchallenge.org</h5>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
