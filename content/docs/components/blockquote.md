---
title: Blockquote
date: 2018-07-20T12:59:15-04:00
---

Our blockquotes are similar to the browser default. We added a left border, which is a light gray by default. To attribute someone in the blockquote, you can do so by adding a `<footer>` followed by their name. If you're referencing a specific creative work, be sure to include that inside a `<cite>`. See the examples below.

## Example
<blockquote class="block-6">
    <p class="skeleton" data-lines="3"></p>
    <footer><p class="skeleton skeleton--sm"></p></footer>
</blockquote>

{{< highlight html >}}
<blockquote>
    <p>
        <!-- Quote goes here! -->
    </p>
    <footer>
        <!-- Quote attribution goes here! -->
    </footer>
</blockquote>
{{< /highlight >}}

## Colors
As previously mentioned, the default color of the left border is light gray, but you can change it if you like. You can change the color of the border by using a border utility. For example, adding the class `border--color-navy`, to the blockquote, will change the border to navy. Learn more about border utilities. You can view our list of colors available greyscale, and brand colors maps.

<blockquote class="border--color-orange block-6">
    <p class="skeleton" data-lines="3"></p>
    <footer><p class="skeleton skeleton--sm"></p></footer>
</blockquote>

{{< highlight html >}}
<blockquote class="border--color-orange">
    <p>
        <!-- Quote goes here! -->
    </p>
    <footer>
        <!-- Quote attribution goes here! -->
    </footer>
</blockquote>
{{< /highlight >}}