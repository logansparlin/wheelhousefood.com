---
layout: page
title: Menu
permalink: /menu/
index: 2
---

{{ site.data.vib_menu.intro }}

<div class="menu">
  {% for section in site.data.vib_menu.sections %}
  <section class="menu-section {{ section.name | replace: '/', '' | replace: ' ', '' | replace: '&', '' }}">
    <h2 class="menu-title">{{ section.name }}</h2>
    {% capture description %}{{ section.description }}{% endcapture %}
    <span class="menu-description">{{ description | markdownify }}</span>
    <div class="menu-items">
    {% for item in section.items %}
      <div class="menu-item">
        <span class="menu-item__name">
          {{ item.name }}
          <span class="menu-item__price">{{ item.price }}</span>
        </span>
        {% if item.description %}
        <span class="menu-item__description">{{ item.description | markdownify }}</span>
        {% endif %}
        {% if item.variants %}
          <span class="menu-item__variants">
            {% for variant in item.variants %}
              <span>{{ variant }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </div>
    {% endfor %}
    </div>
  </section>
  {% endfor %}
</div>
