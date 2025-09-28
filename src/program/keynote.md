---
layout: layouts/base.njk
title: Keynote Speaker
permalink: /program/keynote/index.html
---

<section class="keynote-detail">
  <h1>Keynote Speaker</h1>

  <div class="keynote-detail-inner">
    <div class="keynote-photo">
      <img src="/MCC2025/assets/images/keynote-pic.jpg" alt="Portrait of Scott D. Tunmer, keynote speaker">
    </div>

    <div class="keynote-info">
      <h2>{{ schedule.keynote.speaker }}</h2>
      <p><strong>{{ schedule.keynote.organization }}</strong></p>

      <h3>Title of Presentation</h3>
      <p><em>{{ schedule.keynote.title }}</em></p>

      {% if schedule.keynote.abstract %}
        <h3>Abstract</h3>
        <p><em>{{ schedule.keynote.abstract }}</em></p>
      {% endif %}

      <h3>Time & Location</h3>
      <p>
        Buffet Lunch & Keynote<br>
        {{ schedule.keynote.date }}<br>
        {{ schedule.keynote.time }}<br>
        {{ schedule.keynote.location }}
      </p>

      <p><strong>*Limited seating with advance registration</strong></p>
    </div>
  </div>
</section>
