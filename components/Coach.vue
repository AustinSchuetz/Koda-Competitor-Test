<template>
    <div>
        <div class="coach">
            <img :src="this.coachImg" />
            <div class="coach-margin">
                <h3>{{ this.coachName }}</h3>
                <div class="bio-btn" @click="showModal = true">Read Bio</div>
            </div>
        </div>
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">
            <div class="coach-background" slot="image" :style="{backgroundImage: 'url(' + this.coachBGimg + ')'}"></div>
            <h1 slot="header">{{ this.coachName }}</h1>
            <div slot="bio"><div v-html="this.bio"></div></div>
        </modal>

    </div>

</template>

<script>
    import modal from "~/components/modal";
    export default {
        name: "Coach",
        props: ['coachName', 'coachImg', 'bio', 'coachBGimg'],
        components: {modal},
        data() {
            return {
                showModal: false
            }
        }
    }
</script>

<style scoped>
    .bio-holder h1 {
        color: #c60314;
    }
    .bio-btn {
        cursor: pointer;
        margin: 10px auto;
        display: inline-block;
        padding: 8px 10px 10px;
        text-align: center;
        border-radius: 5px;
        border: 3px solid #c60314;
        background: #fff;
        font-weight: bold;
        color: #c60314;
        line-height: 1.1;
    }
    .bio-btn:hover {
        background: #c60314;
        color: #fff;
    }
    .coach-background {
        width: 100%;
        margin: 0 auto;
        padding: 100px;
        background-position: 50% 20%;
        background-size: cover;
    }
    .coach img {
        width: 125px;
        height: 125px;
        border-radius: 100%;
        border: 3px solid #c60314;
    }
    .coach {
        margin: 0 auto;
        padding: 10px;
        width: 250px;
        text-align: center;
    }
    .coach-margin {
        margin: -75px auto 0;
        padding: 85px 10px 10px;
        background: #fff;
        border-top: 3px solid #c60314;
        border-radius: 5px;
        box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);;
    }
</style>