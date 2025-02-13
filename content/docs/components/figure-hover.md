---
title: Figure Hover
---

To hide and show the figcaption on hover, you can add the class `figure-hover` to a `figure`. Notice the figcaption transitions
on hover.

{{< code-demo >}}
<div class="block-container">
    <figure class="figure-hover block laptop-up-6">
        <img class="skeleton-image skeleton-image--lg skeleton-image--landscape">
        <figcaption>Figcaption goes here.</figcaption>
    </figure>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<figure class="figure-hover">
    <img src="..." alt="Figcaption goes here.">
    <figcaption>Figcaption goes here.</figcaption>
</figure>
{{< /highlight >}}
{{< /code-markup >}}