<template>
  <div class="bg-slate-100 h-screen overflow-y-auto p-8">
    <div class="flex flex-row text-green-800 items-center gap gap-2 border-b-2 border-green-800 pb-5">
      <div class="bg-green-900 rounded-full text-white p-4 flex">
        <Icon size="35" name="humbleicons:aid" />
      </div>
      <div class="flex flex-col gap gap-[1px]">
        <span class="text-sm">Main</span>
        <span class="text-[24px] font-inter">Help Center</span>
      </div>
    </div>
    <div class="w-[800px] bg-slate-100 m-auto p-10">
      <div v-for="(question, index) in questions" :key="index" class="mb-6">
        <div
          class="cursor-pointer p-4 border border-green-800 flex justify-between rounded-md bg-green-800 text-gray-100 items-center"
          @click="toggleAnswer(index)"
          :class="{'bg-green-800': activeQuestion === index}"
        >
          <h2 class="text-lg font-medium">{{ question.question }}</h2>
          <button
            @click.stop="deleteQuestion(index)"
            class="bg-red-700 text-gray-100 hover:bg-red-800 duration-300 rounded-md py-2 px-4 text-base ml-4"
          >
            Delete
          </button>
        </div>
        <div v-if="activeQuestion === index" class="ml-6 mr-6 mt-1 p-4 bg-green-600 rounded-md">
          <ul>
            <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
              <p class="text-base text-gray-50">{{ option }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10 p-6 border border-green-800 rounded-md bg-slate-100 text-green-800">
        <h2 class="text-3xl font-semibold mb-5">Add New Question</h2>
        <form @submit.prevent="addQuestion">
          <div class="mb-5">
            <label for="newQuestion" class="text-lg font-medium">Question:</label>
            <input
              v-model="newQuestion"
              id="newQuestion"
              type="text"
              class="border hover:border-green-800 p-2 w-full rounded-md"
              required
            />
          </div>
          <div class="mb-5">
            <label for="newOptions" class="text-lg font-medium">Options (comma separated):</label>
            <input
              v-model="newOptions"
              id="newOptions"
              type="text"
              class="border hover:border-green-800 p-2 w-full rounded-md"
              required
            />
          </div>
          <button type="submit" class="bg-green-300 border border-green-800 p-4 rounded-full fixed top-8 right-12 items-center w-16 h-16 hover:bg-green-400 duration-500 cursor-pointer">
            <Correct />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const questions = ref([
  {
    question: "BmBastha",
    options: ["BmBastha"]
  },
]);

const newQuestion = ref('');
const newOptions = ref('');
const activeQuestion = ref(null);

const toggleAnswer = (index) => {
  if (activeQuestion.value === index) {
    activeQuestion.value = null; 
  } else {
    activeQuestion.value = index;
  }
};

const addQuestion = () => {
  if (newQuestion.value && newOptions.value) {
    const options = newOptions.value.split(',').map(option => option.trim());
    questions.value.push({
      question: newQuestion.value,
      options: options
    });
    newQuestion.value = '';
    newOptions.value = '';
  }
};

const deleteQuestion = (index) => {
  questions.value.splice(index, 1); 
};
</script>