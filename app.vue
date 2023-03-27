<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

</script>

<template #root>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>

    <ul>
        <li><a href="https://twitter.com/jdebarochez">Twitter</a></li>
        <li><a href="https://github.com/jdebarochez">Github</a></li>
    </ul>
  </nav>

  <ContentList path="/blog" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
    </div>
  </ContentList>

  <main class="main-container">
    <NuxtPage />
  </main>
</template>

<style>
    :root[color-mode="light"] {
        --surface1: #ffffff;
        --surface2: #ffffff;
        --surface3: #ffffff;
        --element1: #000000;
        --element2: #9b9b9b;
        --element3: #cccccc;
    }

    :root[color-mode="dark"] {
        --surface1: #121212;
        --surface2: #272727;
        --surface3: #272727;
        --element1: #f5f5f5;
        --element2: #9b9b9b;
        --element3: #cccccc;
    }

    html {
        font-family: segoe ui, Roboto, Oxygen-Sans, Ubuntu, Cantarell, helvetica neue, sans-serif;
        height: 100%;
        width: 100%;
        color: var(--element1, #121212);
    }

    body {
        height: 100%;
        background-color: var(--surface1, #f5f5f5);
    }

    .main-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 3em;
        line-height: 1;
        letter-spacing: -.03em;
        margin: 0;
    }

    h2 {
        display: inline-block;
        margin-top: .275em;
        color: var(--element2, #9b9b9b);
        letter-spacing: .5px;
    }

    ul {
        list-style: none;
        justify-content: space-between;
        width: 25%;
    }

    nav>ul {
        display: flex;
        flex-direction: row;
    }

    main>ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
        color: var(--element1, #121212);
    }
</style>
