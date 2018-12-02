<template>
    <div class="clean-page-content">
        <h1 class="clean-title">Coaches</h1>
        <div>
            <div class="coach-wrap">
                <Coach coachName="Kevin Schuetz" coachImg="https://wod.kodacompetitor.com/wp-content/uploads/2018/10/Kevin-Schuetz.jpg" coachBGimg="https://wod.kodacompetitor.com/wp-content/uploads/2018/10/KevinSchuetzKodaCompetitor.jpg" :bio="KevinBio"></Coach>
                <Coach coachName="Casey McCallister" coachImg="https://wod.kodacompetitor.com/wp-content/uploads/2018/10/Casey-McCallister.jpg" :bio="CaseyBio" coachBGimg="https://wod.kodacompetitor.com/wp-content/uploads/2018/10/CaseyMacKodaCompetitor.jpg"></Coach>
                <Coach coachName="Brice Collier" coachImg="https://wod.kodacompetitor.com/wp-content/uploads/2018/10/BriceCollier.jpg" :bio="BriceBio" coachBGimg="https://wod.kodacompetitor.com/wp-content/uploads/2018/10/BriceCollierKodaCompetitor.jpg"></Coach>
            </div>
        </div>

    </div>
</template>

<script>
    import Coach from "~/components/Coach";
    export default {
        name: "index",
        components: {Coach},
        data() {
            return {
                showModal: false,
                KevinBio: '<p>Coach Kevin is all about long term progress and accomplishing big goals with Koda athletes. He had a decent level of fitness while he played College Baseball, then became overweight and out of shape after he graduated College. He fell in love with CrossFit in 2011 and shortly after began coaching. He has personally found what it takes to go from overweight and out of shape to an Elite CrossFit competitor and loves helping others accomplish their goals. He has worked with thousands of athletes through owning and operating Koda CrossFit Norman in Norman, OK and Koda CrossFit Iron View in Lafayette, CO. Over the last few years he has individually coached over 40 athletes with a wide range of goals. His athletes include 5 Regionals Team Appearances and 2 Masters Regionals Appearances.</p><p>As an athlete Kevin has 6 Regionals Appearances including Individual Regionals the last 5 years straight and 1 Team appearance, with his best finish so far of 7th in 2016. In 2017, he was awarded the title "Fittest in Oklahoma." He walked into the sport of CrossFit being overweight and out of shape with a decent base of strength but horrible endurance. He has used Koda Competitor Methodology to correct his weaknesses and develop his endurance through proper aerobic progressions.</p>',
                CaseyBio: '<p>Coach Casey is all about pushing athletes beyond what they think they are capable of. As a coach, he challenges athletes to find their limits in their physical abilities as challenging their mental toughness. He has experience with a wide range of athletes from running police academy fitness programs and supplemental military fitness programs, working with elder clients coming off knee surgery, all the way up to highly competitive CrossFit athletes. No matter the athlete, his focus remains constant; make people better.</p><p>As an athlete, Casey competed for several years in CrossFit and has some accomplishments to show for his hard work. He\'s completed at the CrossFit Regionals several years both on a team and as an individual. He\'s been crowned the Fittest Cop in America twice, won the World Police and Fire Games in 2017, and the title "Fittest in Oklahoma" in 2016. In the beginning he was extremely limited by his weakness in strength. He has worked hard over the years to correct his strength weakness by following Koda Competitor ideologies and programs. Casey\'s ultimate goal is to compete along side the best in the world at the CrossFit Games.</p>',
                BriceBio: '<p>Brice grew up in West Texas and found success in baseball and football not by being the biggest, fastest, or strongest athlete on the field, but being a student of the game and constantly striving to get every (legal) advantage that he could. He consistently woke up early to watch film and stayed late to lift weights. This work ethic continued in college where Brice attended the US Air Force Academy in Colorado Springs, CO and was chosen by his piers as the Rugby Team Captain as well as being selected as an All-American for the 2008 USA Rugby Season.</p><p> After getting stationed at Tinker AFB, Brice quickly found and fell in love with the community and dedication that surrounded CrossFit. In 2009 be started coaching classes and signed up for every competition he could get to. Brice has found himself on dozens of podiums as well as qualified for Regionals 7 times. As a coach he has led athletes to success at local competitions, Regionals, and the CrossFit Games.</p><p>In 2011, Brice and Jared Muse started Koda CrossFit in Oklahoma City which has since grown into six separate locations.</p><p>Brice enjoys the strategy of CrossFit as well as breaking down the more complicated skills into simple progressions. Brice is able to give athletes the tools necessary to master the basic movements all while relating them to the bigger picture.</p>'
            }
        }
    }
</script>

<style scoped>
    .clean-page-content {
        padding-bottom: 50px;
    }
    .coach-wrap {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
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
@media only screen and (max-width:1100px) {
    .coach-wrap {
        display: block;
        text-align: center;
    }
}
</style>