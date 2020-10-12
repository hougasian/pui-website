---
title: Typography
date: 2018-07-20T12:59:15-04:00
---
## Headings

<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h1>Heading 1</h1>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto Slab, 500, #003f70</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h2>Heading 2</h2>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h3>Heading 3</h3>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h4>Heading 4</h4>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h5>Heading 5</h5>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h6>Heading 6</h6>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h1>Heading 1</h1>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto Slab, 500, #003f70</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h2>Heading 2</h2>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h3>Heading 3</h3>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h4>Heading 4</h4>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h5>Heading 5</h5>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <h6>Heading 6</h6>
  </div>
  <div class="block block-6">
    <p class="mb-0">Roboto, sans-serif, 500, #666</p>
  </div>
</div>
{{< /highlight >}}
</div>

## Paragraphs

<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <p>Paragraph</p>
  </div>
  <div class="block block-6">
    <p class="mb-0">Inter UI, sans-serif, 1rem</p>
    <p class="mb-0"><strong>Note:</strong> Our paragraphs have a default margin-bottom of 2rem</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <p>Paragraph</p>
  </div>
  <div class="block block-6">
    <p class="mb-0">Inter UI, sans-serif, 1rem</p>
    <p class="mb-0"><strong>Note:</strong> Our paragraphs have a default margin-bottom of 2rem</p>
  </div>
</div>
{{< /highlight >}}
</div>


## Typography Utilities

Below are some of our typography utilities.


## Color

`text-{ color }`, `text-{ color }--hover` combines our [greyscale](/section-color.html#kssref-color-greyscale), [brand colors](/section-color.html#kssref-color-brandcolors), and [secondary colors](/section-color.html#kssref-color-secondarycolors) maps.

| Greyscale         |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `text-white`      | `text-lighter`     | `text-light-mid`    | `text-light`         |
| `text-base`       | `text-dark`        | `text-black`        |                      |

| Brand colors      |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `text-navy`       | `text-skyblue`     | `text-med-blue`     | `text-beige`         |
| `text-peach`      | `text-salmon`      | `text-brown`        | `text-orange`        |

| Secondary colors  |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `text-red`        | `text-olive`       | `text-purple`       | `text-yellow`        |
| `text-pink`       | `text-cyan`        | `text-violet`       | `text-blue`          |
| `text-green`      | `text-teal`        | `text-gold`         |                      |


<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <p>
      <span class="text-brown">Brown text</span>,
      <span class="text-cyan--hover">Cyan text on hover</span>,
      <span class="text-navy text-red--hover">navy text, red on hover</span>
    </p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block block-6">
    <p>
      <span class="text-brown">Brown text</span>,
      <span class="text-cyan--hover">Cyan text on hover</span>,
      <span class="text-navy text-red--hover">navy text, red on hover</span>
    </p>
  </div>
</div>
{{< /highlight >}}
</div>
 

## Sizing

`text--size-{ size }` leverages percetages for smaller or larger text. The defaut `font-size` is `1rem`.

| Text sizing       |         |
| ----------------- | ------- |
| `text--size-xxs`  | `50%`   |
| `text--size-xs`   | `70%`   |
| `text--size-sm`   | `85%`   |
| `text--size-md`   | `115%`  |
| `text--size-lg`   | `125%`  |
| `text--size-xl`   | `150%`  |
| `text--size-xxl`  | `200%`  |

 
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block">
    <p class="text--size-xl">Text xl</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block">
    <p class="text--size-xl">Text xl</p>
  </div>
</div>
{{< /highlight >}}
</div>

 

## General

General utilities add class-based css transforms like `uppercase` and `bold`. See the chart below for the full list.

| General           |                    |                     |                      |
| ----------------- | ------------------ | ------------------- | -------------------- |
| `text--uppercase` | `text--underline`  | `text--bold`         | `text--nowrap` <i class="pi-warning text-orange"></i>      |
| `text--center` <i class="pi-warning text-orange"></i>   | `text--right` <i class="pi-warning text-orange"></i>                    |                     |                      |
| `text-underline--hover` |   |         |      |

| <i class="pi-warning text-orange"></i> NOTE: A `flex--` utility should be used were possible. |
| ----- |

 The `text-underline--hover` class will add an animated underline to links or any element you add the class to. By default, the underline color is the
 standard link color in the platform(light blue). If you want to change the color of the element and the underline on hover you can add a `text-{color}--hover`
 class. This will change the color of the underline as well as the element with the hover color class.

 
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block">
    <p>Text underline on hover <a class="text-underline--hover">standard</a>.</p>
    <p>Text underline on hover <a class="text-underline--hover text-red--hover">red</a>.</p>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-card block-container mb-3 flex--align-center">
  <div class="block">
    <p>Text underline on hover <a class="text-underline--hover">standard</a>.</p>
    <p>Text underline on hover <a class="text-underline--hover text-red--hover">red</a>.</p>
  </div>
</div>
{{< /highlight >}}
</div>

 


## Text Shadow

You can add a text-shadow to an element using colors from our [greyscale](/section-color.html#kssref-color-greyscale) map.

| Greyscale                 |                            |                             |                              |
| ------------------------- | -------------------------- | --------------------------- | ---------------------------- |
| `text--shadow-white`      | `text--shadow-lighter`     | `text--shadow-light-mid`    | `text--shadow-light`         |
| `text--shadow-base`       | `text--shadow-dark`        | `text--shadow-black`        |                              |


<p class="text--shadow-base">This text has a base color shadow.</p>

<div class="mt-3 mb-4">
{{< highlight html >}}
 <p class="text--shadow-base">This text has a base color shadow.</p>
{{< /highlight >}}
</div>
 