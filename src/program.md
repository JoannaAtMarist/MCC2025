---
layout: layouts/base.njk
title: Program
permalink: /program/index.html
---

<h2>Program</h2>
<section>
<h3>For more information email: </h3>
<a href="{{ links.contact_email }}">MaristComputingConf@marist.edu</a>
</section>
<br>
<p><strong>Keynote (12–1 PM):</strong> Scott Tunmer, Principal Consultant at New Era Technologies — <em>AI & Cybersecurity for the Enterprise</em>.</p>

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

<h3>Mid-Hudson Valley TechMeet (3:30 PM – 6:30 PM)</h3>
<div class="schedule">
  {% for b in schedule.techmeet_blocks %}
    <div class="schedule-item">
      <div class="time">{{ b.time }}</div>
      <div class="title">{{ b.title }}</div>
      <div class="location">{{ b.location }}</div>
    </div>
  {% endfor %}
</div>

