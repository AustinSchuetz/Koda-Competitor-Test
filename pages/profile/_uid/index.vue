<template>
    <div>
        <div v-if="uidCheck">
            <div>
                <h1>Name: {{ this.$store.state.profileData.displayName }}</h1>
                <h1>Email: {{ this.$store.state.profileData.email }}</h1>
                <h1>Bias: {{ this.$store.state.profileData.bias }}</h1>
                <p>Route params uid: {{ this.$route.params.uid }}</p>
                <p>Store uid: {{ this.$store.state.uid }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import env from 'config'
    import axios from 'axios'
    export default {
        name: "index",
        layout: 'protected',
        methods: {
            profileCheck() {
                if (this.$route.params.uid === 'null') {
                    this.$router.push('/login/');
                } else if (this.uidCheck !== this.$route.params.uid) {
                    this.$router.push('/profile/' + this.uidCheck + '/');
                } else if (this.uidCheck === null) {
                    this.$router.push('/login/');
                } else if (this.uidCheck === this.$route.params.uid) {
                } else {
                    this.$router.push('/login/');
                }
            },
            returntologin() {
                return this.$router.push('/login/');
            }
        },
        computed: {
            uidCheck() {
                return this.$store.state.uid;
            }
        },
        watch: {
            uidCheck() {
                return this.profileCheck();
            }
        }
    }
</script>

<style scoped>

</style>