<template>
  <h1>User Detail</h1>
  <div v-if="show">
    <h2>My Hobbies :</h2>
    <ul>
      <li v-for="hobby in hobbies">
        {{ hobby }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

let show = true;
let hobbies = ["swimming", "coding", "reading"];

onMounted(() => {
  const id = useRoute().params.id;
  console.log("id =>", id);
});
</script>