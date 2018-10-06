<template>
    <div class="clean-page-content">
        <h1 class="clean-title">How to pick a track</h1>
        <p>The idea behind Koda Competitor is to attack your weaknesses. We believe that the path towards progress, enjoyment, and long term success is a hybrid between group classes and an individualized program.</p>
        <p>Koda Competitor programming incorporates Koda group class programming and some specific workouts geared towards an athletes weaknesses. We have narrowed down athletes into 4 different "Tracks." Each program has their own focus, yet all 4 Tracks have some overlap between them.</p>
        <p>This enables the athlete to get the benefits of an individualized program geared towards  their weaknesses and the benefits of the greater online Koda community.  Athletes can get the benefit of participating in classes at any of the 6 Koda CrossFit locations.</p>
        <h4>Balanced Athlete</h4>
        <div class="divider"></div>
        <p>This type of athlete has a balanced fitness with no major weaknesses. They have similar proficiency in Gymnastics, Aerobic Endurance and Strength numbers. They need to improve in all facets of CrossFit without a strong focus on a specific aspect of CrossFit. They will benefit from a program that includes an equal focus on Gymnastics, Endurance and Strength. Typically these athletes are either new to the sport of CrossFit, or have already attacked their weaknesses and have a balanced fitness in all aspects.</p>
        <h4>Aerobic Bias Athlete</h4>
        <div class="divider"></div>
        <p>This athlete needs to focus primarily on improving their Aerobic Base and Aerobic Power. These Athletes are:</p>
        <ul>
            <li>Explosive/powerful athletes that are limited by their "cardio."</li>
            <li>Might be a larger/more muscular athlete that needs to become overdeveloped in Endurance Work.</li>
            <li>Strong athletes at low repetitions, but burn out when attempting to perform high repetitions within a workout or within a single set</li>
            <li>Can perform Gymnastics movements with proficiency, yet tire out quickly in CrossFit workouts involving gymnastics or body weight movements</li>
            <li>Many times these athletes mistakenly train at too high of intensities causing all of their training to be Anaerobic and painful. Typically this athlete needs to put more training time in at lower intensities with properly laid out aerobic progressions.</li>
        </ul>
        <p>This track will focus during the off season on building a large aerobic base through cyclical training (running, biking, rowing, etc) and mixed modal training (CrossFit). As the CrossFit Open comes closer the focus will shift into becoming more powerful while staying aerobic (sustainable). This track will have a strong focus on peaking for the CrossFit Open.</p>
        <h4>Gymnastics Bias Athlete</h4>
        <div class="divider"></div>
        <p>This athlete needs to focus primarily on improving the strength and skills needed to perform Gymnastics movements for CrossFit. These athletes:</p>
        <ul>
            <li>Lack the strength needed to perform majority of these movements (Handstand Pushups, Muscle Ups, Handstand Walks, Pull-ups, Push-ups, etc)</li>
            <li>Lack the skill proficiency to perform gymnastics movements</li>
            <li>Have a decent amount of Strength and Endurance yet are typically held back by any gymnastics movement in a CrossFit workout.</li>
        </ul>
        <p>This track will focus during the off season on building the general strength required to perform the high skill gymnastics movements in the Sport of CrossFit. As the CrossFit Open comes closer, the focus will shift into proficiency in the actual gymnastics movements seen in the Sport of CrossFit.</p>
        <h4>Strength Bias Athlete</h4>
        <div class="divider"></div>
        <p>This athlete needs to focus primarily on improving strength outside of bodyweight/gymnastics movements for the sport of CrossFit (Heavy: Barbells, KettleBells, Dumbbells, Sandbags, etc). These athletes:</p>
        <ul>
            <li>Like long endurance, gymnastics, and light weight workouts</li>
            <li>Is held back by Heavy weight in workouts and/or 1 Rep Maxes</li>
            <li>Might be a smaller/lighter athlete that needs to become overdeveloped in Strength compared to their bodyweight.</li>
        </ul>
        <p>This track will focus during the off season on building the general strength and muscle groups needed to increase strength in the Sport of CrossFit. As the CrossFit Open comes closer, the focus will shift into proficiency in the specific strength movements seen in the Sport of CrossFit.</p>
    </div>
</template>

<script>
    export default {
        name: "index",

        head() {
            return {
                title: 'Koda Competitor | Athlete Type',
                meta: [
                    {
                        name: 'description',
                        content: 'Learn how to pick an athletic bias to follow. Koda Competitor CrossFit Programming is for any body type and athletic goals.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
h4 {
    color: #c60314;
}
    .divider {
        margin: 5px 0;
        height: 3px;
        width: 50px;
        background: #c60314;
    }
</style>