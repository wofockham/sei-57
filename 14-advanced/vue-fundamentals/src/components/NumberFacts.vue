<template>
    <div>
        <button @click="fetchFact">Fetch fact</button>
        <button @click="clearFacts">Clear</button>
        <p v-for="(fact, i) in facts" :key="i">{{ fact }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'NumberFacts',
    data: function () {
        return {
            facts: []
        };
    },
    methods: {
        fetchFact: function () {
            axios.get('http://numbersapi.com/random/trivia').then((response) => {
                this.facts.push(response.data);
            });
        },
        clearFacts: function () {
            this.facts = [];
        }
    }
}
</script>