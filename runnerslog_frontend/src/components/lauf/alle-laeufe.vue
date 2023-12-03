// template
<template>
    <h1> {{ title }}</h1>
    <div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Datum</th>
        <th>Art</th>
        <th>Titel</th>
        <th>Distanz</th>
        <th>Zeit</th>
        <th>Gefühl</th>
        <th>Aufwand</th>
        <th>Beschreibung</th>
        <th>Schmerz</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="alleLaeufe.length === 0">
        <td colspan="10">Kein Lauf</td>
      </tr>
      <tr v-for="l in alleLaeufe" :key="l.id">
        <td>{{l.id}}</td>
        <td>{{l.datum}}</td>
        <td>{{l.art}}</td>
        <td>{{l.titel}}</td>
        <td>{{l.distanz}}</td>
        <td>{{l.zeit}}</td>
        <td>{{l.gefuehl}}</td>
        <td>{{l.aufwand}}</td>
        <td>{{l.beschreibung}}</td>
        <td>{{l.schmerz}}</td>
      </tr>
      <!-- <tr>
        <td>{{ nameField }}</td>
        <td>{{ priceField }}</td>
      </tr> -->
      </tbody>
    </table>
  </div>
</template>
// script
<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";

defineProps<{
    title: string
}>()

type Lauf = { id: number, titel: string, datum: Date, art: string, distanz: number, zeit: TimeRanges, gefuehl: string, aufwand: number, beschreibung: string, schmerz: string }
const alleLaeufe: Ref<Lauf[]> = ref([]);

function loadLaeufe() {
    const endPoint = 'http://localhost:8080/alleLaeufe';
    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow"
    };
    fetch(endPoint, requestOptions)
    .then(response => response.json())
    .then(result => result.forEach((l: Lauf) => {
        alleLaeufe.value.push(l)
    }))
    .catch(error => console.log('error', error))
}

onMounted(() => {
    loadLaeufe()
})
</script>

<!-- // export default {
//     name: 'AlleLaeufe',
//     props: ['title'],
//     data (){
//         return {
//             laeufe: [],
//             laufTitel: '',
//             datum: '',
//             art: '',
//             distanz: '',
//             zeit: '',
//             gefuehl: '',
//             aufwand: '',
//             beschreibung: '',
//             schmerz: ''
//         }
//     },
//     methods: {
//         loadLaeufe () {
//             const endPoint = 'http://localhost:8080/alleLaeufe'
//             const requestOptions = {
//                 method: 'GET',
//                 redirect: 'follow'
//             }
//             fetch(endPoint, requestOptions)
//             .then(response => response.json())
//             .then(result => result.forEach(this.laeufe))
//         },
//         createLauf () {}
//     },
//     mounted() {
//         this.loadLaeufe();
//     }
// } -->


// style
