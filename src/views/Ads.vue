<script lang="ts">
export default {
  name: "Ads",
  methods: {
    adsenseAddLoad(){
      let inlineScript   = document.createElement("script");
      inlineScript.type  = "text/typescript";
      inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
      document.getElementsByTagName('body')[0].appendChild(inlineScript);
    }
  },
  mounted() {
    this.adsenseAddLoad();
  },
}
</script>


<template>
<div class="h-screen bg-coral-100">
  <!-- Vertical Ads -->
  <ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-9244351294420945"
    data-ad-slot="9922855736"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>
</div>
</template>