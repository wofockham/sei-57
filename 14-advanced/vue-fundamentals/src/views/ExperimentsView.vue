<template>
    <div>
        <h1>Experiments</h1>

        <ClickrButton />

        <button>dumb old button</button>
    </div>
</template>

<script>
// @ is a shortcut for `src`
import ClickrButton from '@/components/ClickrButton.vue';

export default {
    components: {
        ClickrButton: ClickrButton
    }
};

</script>
