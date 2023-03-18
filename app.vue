<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <main class="text-left">
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>

      <ContentList path="/blog" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
    </nav>
    <NuxtPage />
  </main>
</template>
