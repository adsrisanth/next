<template>
    <div class="body h-screen w-screen text-gray-200">
        <div class="vvsm:w-full vvsm:p-5 lg:p-20 lg:w-[500px] bg-[#001802] h-full flex flex-col justify-between">
            <div class="flex flex-row gap gap-2">
                <div class="w-16">
                    <img src="../../assets/images/Bm.svg" alt="">
                </div>
                <div class="font-poppins text-3xl font-bol py-4 flex justify-center h-full">
                    <span>BmBastha</span>
                </div>
            </div>
            <div class="font-poppins w-full flex flex-col items-center">
                <div>
                    <div class="text-5xl font-bold mb-5">
                        <span>LogIn</span>
                    </div>
                    <div class=" mb-5 text-black">
                        <div class="flex-1 text-xl">
                            <input
                              type="text"
                              class="vvsm:w-[280px] lg:w-[340px] h-[56px] border border-gray-600 bg-[#001802] text-gray-200 placeholder-gray-600 rounded-lg p-5 outline-none"
                              placeholder="Email"
                            />
                        </div>
                    </div>
                    <div class="mb-5 text-black">
                        <div class="flex-1 text-xl">
                            <input
                              type="text"
                              class="vvsm:w-[280px] lg:w-[340px] h-[56px] border border-gray-600 bg-[#001802] text-gray-200 placeholder-gray-600 rounded-lg p-5 outline-none"
                              placeholder="Password"
                            />
                        </div>
                    </div>
                    <div class="text-[#001802] font-bold text-md h-20 vvsm:w-[280px] lg:w-[340px]">
                        <div class="flex flex-row justify-between">
                            <div class="px-10 py-5 rounded-lg hover:bg-[#164414] duration-200 bg-[#1f801a]">
                                <NuxtLink to="/"><span>SignIn</span></NuxtLink>
                            </div>
                            <div class="px-10 py-5 text-gray-400 font-normal cursor-pointer hover:text-gray-300 duration-300">
                                <NuxtLink to="admin/forgotpassword"><span>Forgot Password</span></NuxtLink>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="text-gray-300 text-xl flex flex-row">
                <div class="w-8 h-8">
                    <Icon size="25" name="material-symbols:lock"/>
                </div>
                <div class="p-1"> 
                    <span>Authenticated</span>
                </div>
            </div>                
        </div>
    </div>
</template>
<style scoped>
    .body{
        background: rgb(0,24,2);
        background: linear-gradient(0deg, rgba(0,24,2,1) 0%, rgba(1,62,2,1) 51%, rgba(1,89,2,1) 100%);
    }
</style>

<script setup>
definePageMeta({
  layout: false
})
</script>
