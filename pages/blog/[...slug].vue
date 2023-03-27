<template>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <pre> {{ article }} </pre>
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </div>
    </ContentList>
</template>