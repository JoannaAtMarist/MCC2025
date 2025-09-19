---
layout: layouts/base.njk
title: Marist Computing Conference
permalink: /index.html
---


<section class="hero">
  <h1>Marist Computing Conference</h1>
  <h2>Friday, November 7, 2025 · Murray Student Center · Marist University</h2>
  <p>Be inspired to do more at the Marist Computing Conference. Talks, keynote lunch, networking — and a collocated student poster session (TechMeet).</p>
</section>


<section class="schedule">
  <h3>At a glance</h3>
  {% for b in schedule.blocks %}
    <div class="schedule-item">
      <div class="time">{{ b.time }}</div>
      <div class="title">{{ b.title }}</div>
      <div class="location">{{ b.location }}</div>
    </div>
  {% endfor %}
</section>
