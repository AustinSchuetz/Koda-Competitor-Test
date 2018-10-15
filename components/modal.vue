<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <div @click="$emit('close')">X</div>
                    </div>

                    <div class="modal-body">
                        <slot name="image">
                        </slot>
                        <div class="bio-holder">
                            <slot name="header">
                                <h1>{{ this.coachName }}</h1>
                            </slot>
                            <slot name="bio">
                                <div :bio="bio"></div>
                            </slot>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <div class="bio-btn" @click="$emit('close')">
                                Close
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modal",
        props: ['coachName', 'coachImg', 'bio']
    }
</script>

<style scoped>
    .bio-holder {
        padding: 20px;
    }
    .bio-btn {
        cursor: pointer;
        margin: 10px auto;
        display: block;
        padding: 8px 10px 10px;
        width: 100px;
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
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    img {
        width: 100%;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        position: relative;
        z-index: 2;
        width: 100%;
    }

    .modal-container {
        max-width: 950px;
        width: 95%;
        max-height: 90%;
        overflow: auto;
        position: relative;
        z-index: 3;
        margin: 0px auto;
        padding: 0;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: left;
    }
    .modal-footer {
        padding: 10px;
        margin: 0 auto;
        border-top: 1px solid rgba(0,0,0,0.1);
    }
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    @media only screen and (max-width:790px) {
        .modal-body {
            flex-direction: column;
            text-align: left;
        }
        .modal-container {
            width: calc(95% - 40px);
            top: 20px;
            left: 20px;
            max-height: calc(95% - 70px);
        }
    }

</style>