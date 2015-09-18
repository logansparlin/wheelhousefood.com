---
layout: page
title: Menu
permalink: /menu/
---

<p>{{ site.data.menu.intro }}</p>

Choose Spiciness: 1-5 Stars &nbsp;|&nbsp; Guacamole: +$1.5 &nbsp;|&nbsp; Sour Cream: free &nbsp;|&nbsp; All prices include tax

<div class="menu">
  {% for section in site.data.menu.sections %}
  <section class="menu-section {{ section.name | replace: '/', '' | replace: ' ', '' }}">
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
        <p class="menu-item__description">{{ item.description }}</p>
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
