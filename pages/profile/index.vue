<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: "index",
        layout: 'protected',
        mounted() {
          return this.profileCheck();
        },
        methods: {
            profileCheck() {
                if (this.uidCheck === null) {
                    this.$router.push('/login/');
                } else if (this.uidCheck !== this.$route.params.uid) {
                    this.$router.push('/profile/' + this.uidCheck + '/');
                } else if (this.uidCheck === this.$route.params.uid) {
                } else {
                    this.$router.push('/login/');
                }
            }
        },
        computed: {
            uidCheck() {
                return this.$store.state.uid
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