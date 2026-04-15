import blogBasics from "@/assets/blog-basics.jpg";
import blogYarn from "@/assets/blog-yarn.jpg";
import blogAmigurumi from "@/assets/blog-amigurumi.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
  content: string; // markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-crochet",
    title: "Getting Started with Crochet: A Complete Beginner's Guide",
    excerpt: "Everything you need to know to pick up a hook and start your first project. From chain stitches to your first scarf!",
    date: "2026-04-10",
    image: blogBasics,
    author: "Lily",
    tags: ["Beginner", "Tutorial"],
    content: `
# Getting Started with Crochet: A Complete Beginner's Guide

Welcome to the wonderful world of crochet! Whether you've been eyeing those beautiful handmade blankets on Pinterest or you want to create adorable amigurumi animals, this guide will help you take your first steps.

## What You'll Need

Before you begin, gather these essentials:

- **Crochet hook** — Start with a 5mm (H/8) hook. It's a comfortable middle-ground size.
- **Yarn** — Choose a medium-weight (worsted) acrylic yarn in a light color so you can see your stitches clearly.
- **Scissors** — Any sharp pair will do.
- **Yarn needle** — For weaving in ends when you finish.

## Your First Stitch: The Chain

The chain stitch is the foundation of almost every crochet project. Here's how:

1. Make a **slip knot** and place it on your hook.
2. **Yarn over** (wrap the yarn around your hook from back to front).
3. **Pull through** the loop on your hook.
4. Congratulations — that's one chain! Repeat for as many as your pattern calls for.

## The Single Crochet

Once you're comfortable with chains, the single crochet is your next building block:

1. Insert your hook into the second chain from the hook.
2. Yarn over and pull through — you now have 2 loops on your hook.
3. Yarn over again and pull through both loops.
4. You've made a single crochet!

## Practice Project: A Simple Dishcloth

A dishcloth is the perfect first project. It's small, flat, and uses only the stitches you just learned.

> "The best project for a beginner is one you'll actually finish. A dishcloth takes an afternoon and gives you something useful!"

**Pattern:**
- Chain 25
- Row 1: Single crochet in 2nd chain from hook, SC across (24 stitches)
- Rows 2–30: Chain 1, turn, SC across
- Fasten off and weave in ends

## Tips for Beginners

- **Don't worry about tension** — it gets more even with practice.
- **Count your stitches** after every row at first.
- **Use stitch markers** to track the first stitch of each row.
- **Be patient with yourself** — everyone's first rows look a little wonky!

Happy hooking! 🧶
`,
  },
  {
    slug: "choosing-the-right-yarn",
    title: "How to Choose the Right Yarn for Your Project",
    excerpt: "Cotton, acrylic, wool, or blend? Learn which yarn works best for different types of crochet projects.",
    date: "2026-04-05",
    image: blogYarn,
    author: "Lily",
    tags: ["Guide", "Materials"],
    content: `
# How to Choose the Right Yarn for Your Project

One of the most exciting parts of starting a new project is picking out yarn! But with so many options, it can also feel overwhelming. Let's break down the most common yarn types and when to use them.

## Yarn Fibers

### Acrylic
- **Best for:** Blankets, amigurumi, beginner projects
- **Pros:** Affordable, easy to wash, huge color range, hypoallergenic
- **Cons:** Can feel less luxurious, may pill over time

### Cotton
- **Best for:** Dishcloths, market bags, summer garments, home decor
- **Pros:** Breathable, absorbent, great stitch definition
- **Cons:** Less stretchy, can be harder on hands during long sessions

### Wool
- **Best for:** Warm garments, accessories, felted projects
- **Pros:** Warm, elastic, beautiful drape
- **Cons:** Can felt if machine-washed, some people are allergic

### Blends
- **Best for:** The best of both worlds!
- Cotton-acrylic blends give you softness with easy care
- Wool-acrylic blends offer warmth without the price tag

## Yarn Weight Matters

Yarn comes in different thicknesses (called "weight"):

1. **Lace / Fingering** — Delicate doilies, lacework
2. **Sport / DK** — Lightweight garments, baby items
3. **Worsted** — The most versatile; blankets, scarves, amigurumi
4. **Bulky / Chunky** — Quick projects, cozy scarves, thick blankets

## Color Tips

- **For amigurumi:** Solid colors show stitch detail best
- **For blankets:** Variegated or ombre yarns create beautiful patterns with minimal effort
- **For gifts:** Consider the recipient's favorite colors!

> "When in doubt, swatch it out! Always make a small test swatch to see how the yarn looks and feels in your stitch pattern."

## Our Studio Favorites

At Soft Loop Studio, we primarily work with:
- **Premium acrylic** for our amigurumi and toys (safety + durability)
- **Organic cotton** for our home items like coasters and bags
- **Cotton-acrylic blends** for our flower bouquets (holds shape beautifully)

Choose your yarn with love, and your project will show it! 💕
`,
  },
  {
    slug: "amigurumi-for-beginners",
    title: "Your First Amigurumi: Making a Simple Ball",
    excerpt: "Step into the magical world of amigurumi with this easy beginner pattern for a crochet ball.",
    date: "2026-03-28",
    image: blogAmigurumi,
    author: "Lily",
    tags: ["Tutorial", "Amigurumi"],
    content: `
# Your First Amigurumi: Making a Simple Ball

Amigurumi — the Japanese art of crocheting small stuffed creatures — might look complicated, but it all starts with one shape: the **magic ring** and the **sphere**. Master those, and you can make anything!

## What is Amigurumi?

Amigurumi (pronounced ah-mee-goo-ROO-mee) combines the Japanese words for "crocheted" and "stuffed toy." These adorable little creatures have taken the craft world by storm, and for good reason — they're portable, creative, and incredibly gift-worthy.

## What You'll Need

- 4mm crochet hook
- Worsted weight yarn in any color
- Polyester fiberfill stuffing
- Yarn needle
- Stitch marker

## The Magic Ring

Unlike flat crochet, amigurumi starts with a **magic ring** (also called magic circle):

1. Wrap yarn around your finger twice to form a ring
2. Insert hook, yarn over, and pull through the ring
3. Chain 1 (this does NOT count as a stitch)
4. Work your single crochets into the ring
5. Pull the tail to close the ring tight — no hole!

## Simple Ball Pattern

**Round 1:** 6 SC into magic ring (6 stitches)
**Round 2:** Increase in each stitch around (12)
**Round 3:** *SC 1, increase* repeat around (18)
**Round 4:** *SC 2, increase* repeat around (24)
**Rounds 5–8:** SC around (24)
**Round 9:** *SC 2, decrease* repeat around (18)
**Round 10:** *SC 1, decrease* repeat around (12)

> Stuff the ball firmly with fiberfill before closing!

**Round 11:** Decrease around (6)

Fasten off, leave a long tail, and sew the opening closed.

## From Ball to Character

Once you can make a ball, you can make almost any amigurumi! Here's how the ball becomes a character:

- **Teddy bear:** One large ball (body), one medium ball (head), small ovals (arms, legs, ears)
- **Octopus:** One half-sphere (head) + 8 chain tentacles
- **Keychain charm:** A mini ball + simple features + a keyring attachment

## Tips for Cute Results

- **Use a smaller hook** than recommended for your yarn — this creates tight stitches so stuffing doesn't show through
- **Stuff firmly** but not so tight that it stretches the stitches
- **Safety eyes** should be inserted before closing the head
- **Embroider details** like mouths and blush marks with embroidery floss

Start with the ball, then let your imagination run wild! 🌸
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
