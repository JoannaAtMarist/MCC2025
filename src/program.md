---
layout: layouts/base.njk
title: Full Schedule – MCC
permalink: /program/
---

<h2>Marist Computing Conference</h2>

<section>
  <h3>For more information email: </h3>
  <a href="{{ links.contact_email }}">MaristComputingConf@marist.edu</a>
</section>

<br>

<h1>Program</h1>
<div class="schedule">

  {# ───────────────
     General MCC blocks
     ─────────────── #}
  {% for block in schedule.mcc_blocks %}
    <div class="schedule-item">
      <div class="time">{{ block.time }}</div>
      <div class="title">{{ block.title }}</div>
      <div class="location">{{ block.location }}</div>

      {# Handle subsessions (Concurrent Speakers) #}
      {% if block.subsessions %}
        <div class="subsessions">
          {% for sub in block.subsessions %}
            {% if sub.sessions %}
              <div class="sub-time">{{ sub.time }}</div>
              <ul class="session-list">
                {% for s in sub.sessions %}
                  <li>
                    <strong>{{ s.room }}</strong> — 
                    <em>{{ s.speaker }}</em><br>
                    <span class="talk-title">{{ s.title }}</span>
                  </li>
                {% endfor %}
              </ul>
            {% else %}
              <div class="break">
                <em>{{ sub.time }} – {{ sub.title }}</em>
              </div>
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}

  {# ───────────────
     TechMeet Section
     ─────────────── #}
  <h2>Mid-Hudson Valley TechMeet</h2>

  {% for block in schedule.techmeet_blocks %}
    <div class="schedule-item">
      <div class="time">{{ block.time }}</div>
      <div class="title">{{ block.title }}</div>
      <div class="location">{{ block.location }}</div>
    </div>
  {% endfor %}

</div>
