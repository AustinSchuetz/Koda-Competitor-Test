<template>
    <div class="clean-page-content">
        <h1 class="clean-title">Coaches</h1>
        <div>
            <div>
                <modal class="modal" name="KevinSchuetz" height="auto" width="90%" :maxWidth="950" :adaptive="true" :scrollable="true">
                    <div class="modal-content">
                        <div class="coach-background kevin-coach-background"></div>
                        <div class="modal-text-content">
                            <h4>Kevin Schuetz</h4>
                            <p>Coach Kevin is all about long term progress and accomplishing big goals with Koda athletes. He had a decent level of fitness while he played College Baseball, then became overweight and out of shape after he graduated College. He fell in love with CrossFit in 2011 and shortly after began coaching. He has personally found what it takes to go from overweight and out of shape to an Elite CrossFit competitor and loves helping others accomplish their goals. He has worked with thousands of athletes through owning and operating Koda CrossFit Norman in Norman, OK and Koda CrossFit Iron View in Lafayette, CO. Over the last few years he has individually coached over 40 athletes with a wide range of goals. His athletes include 5 Regionals Team Appearances and 2 Masters Regionals Appearances.</p>
                            <p>As an athlete Kevin has 6 Regionals Appearances including Individual Regionals the last 5 years straight and 1 Team appearance, with his best finish so far of 7th in 2016. In 2017, he was awarded the title "Fittest in Oklahoma." He walked into the sport of CrossFit being overweight and out of shape with a decent base of strength but horrible endurance. He has used Koda Competitor Methodology to correct his weaknesses and develop his endurance through proper aerobic progressions.</p>
                        </div>
                    </div>
                </modal>
                <p>Kevin Schuetz</p>
                <button @click="$modal.show('KevinSchuetz')">
                    Read Bio
                </button>
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
.v--modal-overlay {
    background: rgba(0,0,0,0.5);
}
.v--modal-overlay.scrollable .v--modal-box {
    margin: 50px 0;
    max-width: 90%;
}
.modal-content {
    border-left: 5px solid #c60314;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
h4 {
    color: #c60314;
}
.coach-background {
    width: 350px;
    max-width: 45%;
    margin: 0 auto;
    padding: 0 100px;
    background: rgba(0,0,0,0.2);
}
.modal-text-content {
    padding: 15px;
}
</style>