---
layout: default
title: Blog
subtitle: All Articles
---

<!-- Blog Header -->
<section class="hero" style="padding-top: 120px;">
  <div class="site-wrapper">
    <h1 style="font-size: 48px;">
      <span class="en">Blog</span>
      <span class="zh">博客文章</span>
    </h1>
    <p>All articles about iOS Development, AI, and Indie Hacking</p>
  </div>
</section>

<!-- Post Grid -->
<div class="post-grid">
  {% for post in site.posts %}
  <article class="post-card">
    <h2>
      <a href="{{ post.url | relative_url }}">
        <span class="en">{{ post.title }}</span>
        {% if post.subtitle_zh %}
        <span class="zh">{{ post.subtitle_zh }}</span>
        {% endif %}
      </a>
    </h2>
    
    <div class="post-meta">
      <span>{{ post.date | date: "%Y-%m-%d" }}</span>
      <span>{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} MIN</span>
    </div>
    
    <p class="post-excerpt">
      {% if post.excerpt %}
        {{ post.excerpt | strip_html | truncate: 150 }}
      {% else %}
        {{ post.content | strip_html | truncate: 150 }}
      {% endif %}
    </p>
    
    {% if post.tags %}
    <div class="post-tags">
      {% for tag in post.tags %}
      <span class="tag">#{{ tag }}</span>
      {% endfor %}
    </div>
    {% endif %}
  </article>
  {% endfor %}
</div>

<!-- Matrix Background -->
<script src="{{ '/assets/js/matrix.js?v=3' | relative_url }}"></script>
