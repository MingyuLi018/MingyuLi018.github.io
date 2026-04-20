---
layout: page
title: projects
permalink: /projects/
description: "A collection of research projects and competition awards. / 科研项目与竞赛获奖集锦。"
nav: true
nav_order: 2
lang: en
display_categories: [research, engineering]
images:
  photoswipe: true
---

<!-- Tab navigation -->
<ul class="nav nav-tabs projects-tabs" id="projectsTabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="research-tab" data-toggle="tab" href="#research" role="tab" aria-controls="research" aria-selected="true">
      Research / 科研项目
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="competitions-tab" data-toggle="tab" href="#competitions" role="tab" aria-controls="competitions" aria-selected="false">
      Competitions / 科技竞赛
    </a>
  </li>
</ul>

<div class="tab-content" id="projectsTabContent">

<!-- Research Tab -->
<div class="tab-pane fade show active" id="research" role="tabpanel" aria-labelledby="research-tab">

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include project_card.liquid %}
    {% unless forloop.last %}<hr />{% endunless %}
  {% endfor %}
  {% endfor %}
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include project_card.liquid %}
    {% unless forloop.last %}<hr />{% endunless %}
  {% endfor %}
{% endif %}
</div>

</div><!-- end research tab -->

<!-- Competitions Tab -->
<div class="tab-pane fade" id="competitions" role="tabpanel" aria-labelledby="competitions-tab">

{% include competitions_content.liquid %}

</div><!-- end competitions tab -->

</div><!-- end tab-content -->

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Handle URL hash to activate correct tab on page load
  var hash = window.location.hash;
  if (hash === '#competitions') {
    var tab = document.querySelector('#competitions-tab');
    if (tab) tab.click();
  }

  // Update URL hash on tab switch + fix PhotoSwipe in hidden tabs
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    var id = $(e.target).attr('href');
    history.replaceState(null, null, id);
    // Trigger resize so PhotoSwipe recalculates image dimensions
    window.dispatchEvent(new Event('resize'));
  });
});
</script>
