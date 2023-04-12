const generateFrontmatter = () => {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const postSlug = document.querySelector('#postSlug').value;
  const featured = document.querySelector('input[name="featured"]:checked').value === 'true';
  const draft = document.querySelector('input[name="draft"]:checked').value === 'true';
  const tags = document.querySelector('#tags').value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
  const ogImage = document.querySelector('#ogImage').value;
  const description = document.querySelector('#description').value;
  const pubDatetime = new Date().toISOString();

  const frontmatter = `---
author: ${author}
pubDatetime: ${pubDatetime}
title: "${title}"
postSlug: ${postSlug}
featured: ${featured}
draft: ${draft}
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
ogImage: "${ogImage}"
description: ${description}
---`;

  document.querySelector('#output').textContent = frontmatter;
};

const slugifyTitle = () => {
  const title = document.querySelector('#title').value;
  const slug = title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  document.querySelector('#postSlug').value = slug;
};

document.querySelector('#slugify').addEventListener('click', slugifyTitle);
document.querySelector('#generate').addEventListener('click', generateFrontmatter);
