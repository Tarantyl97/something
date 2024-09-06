<template>
    <div>
    <header class="header">
        <NuxtLink to='/'>Home</NuxtLink>
        <NuxtLink to='about'>About</NuxtLink>
        <NuxtLink to='contacts'>Contacts</NuxtLink>
    </header>
    <main>
        <slot></slot>
    </main>
</div>
</template>

<style scoped>
    .header {
        display: flex;
        justify-content: space-around;
    }
</style>