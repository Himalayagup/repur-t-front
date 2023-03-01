<template>
    <div class="blog-container">
        <h2 class="blog-heading">All Blogs</h2>
        <hr class="blog-divider">
        <div v-for="(item, index) in data.blogs" :key="index" class="blog-item">
            <h3 class="blog-title">{{ index + 1 + ") " }}{{ item.title }}</h3>
            <p class="blog-info">By {{ item.author }} on {{ item.date }}</p>
            <h6 class="blog-content-heading">Content</h6>
            <p class="blog-content">{{ item.body }}</p>
            <hr class="blog-divider">
        </div>
    </div>
</template>
<style scoped>
.blog-container {
    max-width: 800px;
    margin: 0 auto;
}

.blog-heading {
    font-size: 36px;
    text-align: center;
}

.blog-divider {
    border-top: 1px solid #ccc;
    margin: 20px 0;
}

.blog-item {
    margin-bottom: 40px;
}

.blog-title {
    font-size: 28px;
    margin-bottom: 5px;
}

.blog-info {
    font-size: 16px;
    margin-bottom: 10px;
}

.blog-content-heading {
    font-size: 18px;
    margin-bottom: 5px;
}

.blog-content {
    font-size: 16px;
    line-height: 1.5;
}
</style>
<script lang="ts" setup>
const query = gql`
  query getAll{
  blogs {
    id,
    title,
    body,
    author,
    date
  }
}
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query, variables)
</script>
