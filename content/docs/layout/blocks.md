---
title: Blocks
date: 2018-07-20T12:59:15-04:00
---

Blocks are Platform UI's core structural component. Here are some of the features and concepts behind our grid.


## Block Containers

- All block grids start with a wrapper of `block-container` that is set to `display: flex ` with `flex-wrap: wrap`.
- `block-container` can also act as a row.
- `block-container` has modifiers to allow auto-placement based on responsive breakpoints.
- Adding a `{breakpoint}-up-{value}` class will create a grid of equally size blocks within the grid. For example: `block-container` `tablet-up-2` `laptop-up-4` would result in a grid with 2 blocks per row starting at the tablet resolution, then when the screen size reaches the laptop resolution, you would see 4 blocks per row. Each block would have the same width as well.

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container">
  <!-- Blocks go here! -->
</div>
{{< /highlight >}}
</div>


## Block Sizes

- Blocks are based on a 12 column grid, they allow content to be evenly distributed. They are a mobile first approach.
- Blocks can have responsive modifiers attached directly to them.
- Each `.block` has a width of 100%. From there, you can add modifiers to each block to take up the desired amount of columns in the 12 column grid.
You can use responsive modifiers on each block as well. These modiifiers change the width (or amount of columns taken) of individual blocks from each breakpoint and up. The breakpoint modifiers use min-width media queries.
The `block-{number}` will always reflect the mobile, smallest breakpoint, value.

| Modifier Class | Example |
|--|--|--| 
| `.block-1` | <div class="block-container"><div class="block block-1"><div class="card background-lighter"></div></div></div> | 
| `.block-2` | <div class="block-container"><div class="block block-2"><div class="card background-lighter"></div></div></div> | 
| `.block-3` | <div class="block-container"><div class="block block-3"><div class="card background-lighter"></div></div></div> | 
| `.block-4` | <div class="block-container"><div class="block block-4"><div class="card background-lighter"></div></div></div> | 
| `.block-5` | <div class="block-container"><div class="block block-5"><div class="card background-lighter"></div></div></div> | 
| `.block-6` | <div class="block-container"><div class="block block-6"><div class="card background-lighter"></div></div></div> | 
| `.block-7` | <div class="block-container"><div class="block block-7"><div class="card background-lighter"></div></div></div> | 
| `.block-8` | <div class="block-container"><div class="block block-8"><div class="card background-lighter"></div></div></div> | 
| `.block-9` | <div class="block-container"><div class="block block-9"><div class="card background-lighter"></div></div></div> | 
| `.block-10` | <div class="block-container"><div class="block block-10"><div class="card background-lighter"></div></div></div> | 
| `.block-11` | <div class="block-container"><div class="block block-11"><div class="card background-lighter"></div></div></div> | 
| `.block-12` | <div class="block-container"><div class="block block-12"><div class="card background-lighter"></div></div></div> | 


### Building Grids

You can build a grid of equally sized blocks using the block layout. This can be done in a couple ways. The first way is by adding the classes to each individual block. Something like `block` `block-3` on each block will result in a grid of 4 blocks per row.


<div class="block-container blocks p-2">
  <div class="block block-3">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks">
  <div class="block block-3">
    <!-- Content goes here! -->
  </div>
  <div class="block block-3">
    <!-- Content goes here! -->    
  </div>
  <div class="block block-3">
    <!-- Content goes here! -->
  </div>
  <div class="block block-3">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>

The second approach is to add the sizing classes to the wrapping `block-container`. This way prevents you from needing to add the classes to each block. These classes look like `{breakpoint}-up-{number-of-blocks-per-row}`. So an example would be `tablet-up-3`. This would give you 3 blocks per row starting at the tablet screen size.

<div class="block-container blocks p-2 mobile-up-4">
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks mobile-up-4">
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
  <div class="block">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


### Responsive Grid

You can build a responsive grid with blocks. You can add the responsive classes to the individual blocks, or add them to the container. Adding layout classes to the container works best when you need a grid of equally sized blocks.

| Breakpoints | Label | Prefix |
| ------------ | ------------ | ------------ | 
| 0px | mobile | `mobile-up-` |
| 768px | tablet | `tablet-up-` |
| 991px | lg-tablet | `lg-tablet-up-` |
| 1240px | laptop | `laptop-up-` |
| 1800px | desktop | `desktop-up-` |

Adding the responsive classes on a block means, at that resolution, the block will take up as many columns in the 12 column row that are applied via the class. For example: `<div class="block tablet-up-6 laptop-up-4"></div>` This div will take up all 12 columns at the smallest screen size, 6 columns starting at the tablet screen size, and 4 columns at the laptop screen size.

On the blocks: In this example, each block will take up an entire row at the smallest screen sizes. When the screen reaches the tablet resolution, each row will contain 2 blocks, and at the laptop size, each row will have 3 blocks.

<div class="block-container blocks p-2">
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks">
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
  <div class="block tablet-up-6 laptop-up-4">
    <!-- Content goes here! -->
  </div>
</div>
{{< /highlight >}}
</div>


## Spacing

- Spacing is based on Platform UI spacing with the following changes in behavior; Attaching padding to the horizontal axis, px-2, with a modifier of blocks will add that spacing to the block-container.
- Without the blocks modifier, placing block-container px-2 will not apply the horizontal axis padding to the block children within the container but rather apply padding: 0 .5rem to the block-container.

Each block in the example below has padding: .5rem applied.

<div class="block-container blocks p-2">
  <div class="block block-4">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-8">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-6">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-9">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block-3">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container blocks p-2">
  <!-- Blocks go here! -->
</div>
{{< /highlight >}}
</div>


## Block Utilities

Breakpoint classes can be added to each of these utilities as well. So, for example, you could have a `block-8` from mobile up. Then, at a laptop size you wanted the block to shrink to the size of it's content, you could add the class `laptop-up--shrink`. This would give the styles `width: auto` within that set media query. So you're block would have the classes, `block` `block-8` `laptop-up--shrink`.

The utility classes use the BEM syntax.

| Modifier Class | Flexbox Property |
|--------|-------|
| `block--shrink` | `width: auto` |
| `block--fill` | `flex-grow: 1` |
| `block--full` | `width: 100%` |

<div class="block-container blocks p-2 tablet-up-2 laptop-up-3 desktop-up-4">
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
  <div class="block block--fill">
    <div class="card">
      <h2 class="skeleton skeleton--md"></h2>
      <p class="skeleton" data-lines="4"></p>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block block--shrink">
  <!-- Content goes here! -->
</div>

<div class="block block--fill">
  <!-- Content goes here! -->
</div>

<div class="block block--full">
  <!-- Content goes here! -->
</div>
{{< /highlight >}}
</div>