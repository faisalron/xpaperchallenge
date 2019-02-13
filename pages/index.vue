<template>
  <div>
    <b-jumbotron header-level="4" bg-variant="dark" text-variant="white">
      <div slot="header" class="text-center">
        xpaper challenge
      </div>
      <div slot="lead" class="text-center">
        論文完全読破！
      </div>
    </b-jumbotron>
    <b-container class="content">
      <b-col cols="12" md="10" offset-md="1" lg="6" offset-lg="3">
        <b-card-group deck>
          <b-card
            title="cvpaper.challenge"
            :img-src="require('~/static/image/cvpaperchallenge-logo.png')"
            class="with-shadow"
            img-top
            img-alt="cvpaperchallenge"
          >
            <a href="http://xpaperchallenge.org/cv" class="btn stretched-link"></a>
          </b-card>
          <b-card
            title="nlpaper.challenge"
            :img-src="require('~/static/image/nlpaperchallenge-logo.jpg')"
            class="with-shadow"
            img-top
            img-alt="nlpaperchallenge"
          >
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
