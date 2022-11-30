<template>
    <div>
        <h1>Experiments</h1>

        <ClickrButton />

        <hr>

        <SocialProfile name="Groucho" bio="No gods no masters" pic="http://www.placekitten.com/400/600" />
        <SocialProfile name="Harpo" pic="http://www.placekitten.com/400/601" />
        <SocialProfile name="Chico" bio="That's a'nice" pic="http://www.placekitten.com/401/600" />

        <hr>

        <FancyCalculator />

        <hr>

        <NumberFacts />

    </div>
</template>

<script>
// @ is a shortcut for `src`
import ClickrButton from '@/components/ClickrButton.vue';
import SocialProfile from '@/components/SocialProfile.vue';
import FancyCalculator from '@/components/FancyCalculator.vue';
import NumberFacts from '@/components/NumberFacts.vue';

export default {
    components: {
        ClickrButton: ClickrButton,
        SocialProfile: SocialProfile,
        FancyCalculator: FancyCalculator,
        NumberFacts: NumberFacts
    }
};

</script>
