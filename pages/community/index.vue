<template>
    <div>
        <div class="content">
            <h1>More Community engagement coming soon. Get in touch with us on social media in the meantime!</h1>
            <div class="social">
                <a href="https://www.instagram.com/kodacompetitor/" class="fa fa-instagram" target="_blank"></a>
                <a href="https://www.facebook.com/KodaCrossFit/" class="fa fa-facebook" target="_blank"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: "index"
    }
</script>

<style scoped>
    .social {
        margin: 0 auto;
        text-align: center;
        padding: 15px;
    }
    .fa {
        color:#C60314;
        font-weight: bold;
        text-decoration:none;
        display: inline-block;
        transition: 0.2s ease-in-out;
        font-size: 28px;
        padding: 0;
        margin: 0 10px 10px;
        border: none;
        text-align: center;
    }
    .fa:hover {
        color: #1d1d1d;
        border: none;
    }
    .content {
         font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
         display: flex;
         justify-content: center;
         align-items: flex-start;
         text-align: left;
         margin: 0 0 0 260px;
         line-height: 150%;
         padding: 30px;
         width: calc(100% - 260px);
     }
</style>
