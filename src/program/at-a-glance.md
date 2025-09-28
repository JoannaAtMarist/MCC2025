---
title: Program at a Glance
layout: layouts/base.njk
---

<h2>Day At-A-Glance</h2>
<p><strong>Keynote ({{ schedule.keynote.time }}):</strong> 
{{ schedule.keynote.speaker }}, {{ schedule.keynote.organization }} — 
<em>{{ schedule.keynote.title }}</em></p>


<h3>Marist Computing Conference (11:30 AM – 3:00 PM)</h3>
<div class="schedule">
  {% for b in schedule.mcc_blocks %}
    <div class="schedule-item">
      <div class="time">{{ b.time }}</div>
      <div class="title">{{ b.title }}</div>
      <div class="location">{{ b.location }}</div>
    </div>
  {% endfor %}
</div>

<p>
<h5>Following the Marist Computing Conference sessions there will be a student poster competition.<br> 
See details below.<br>
If you are interested in attending the event below, please remember to purchase ticket 3 (at no cost).</h5>
<h3>Mid-Hudson Valley TechMeet (3:30 PM – 6:30 PM)</h3>
</p>

<div class="schedule">
  {% for b in schedule.techmeet_blocks %}
    <div class="schedule-item">
      <div class="time">{{ b.time }}</div>
      <div class="title">{{ b.title }}</div>
      <div class="location">{{ b.location }}</div>
    </div>
  {% endfor %}
</div>