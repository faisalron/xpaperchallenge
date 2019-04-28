<template>
  <div>
    <b-container class="content" fluid>
      <b-row align-v="center">
        <b-col class="text-center">
          <h1 class="text-center">xpaper.challenge</h1>
          <div class="text-center">〜CV/NLP分野の今を映し、トレンドを創り出す挑戦〜</div>
          <b-row>
            <b-col cols="6" offset="3" sm="8" offset-sm="2" xl="4" offset-xl="4">
              <b-card-group class="menu" deck>
                <b-card
                  :img-src="require('~/static/image/cvpaperchallenge-logo.png')"
                  height="100"
                  img-top
                  img-alt="cvpaperchallenge"
                >
                  <a href="http://xpaperchallenge.org/cv" class="stretched-link text-center menu-text">cvpaper.challenge</a>
                </b-card>
                <b-card
                  :img-src="require('~/static/image/nlpaperchallenge-logo.png')"
                  height="100"
                  img-top
                  img-alt="nlpaperchallenge"
                >
                  <a href="http://xpaperchallenge.org/nlp" class="stretched-link text-center menu-text">nlpaper.challenge</a>
                </b-card>
              </b-card-group>
            </b-col>
          </b-row>
          <div class="text-center quote">To invent, you need a good imagination and a pile of junk - Thomas Alva Edison</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.menu {
  margin-top: 45px;
}
.menu-text {
  font-size: 0.9em;
}
.quote {
  margin-top: 45px;
  font-style: italic;
}
</style>
