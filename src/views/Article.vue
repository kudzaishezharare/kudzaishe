<template>
  <div class="article-content">
    <router-link to="/" class="back-link">← Back to Home</router-link>

    <!-- HEADLINE -->
    <h1>Recursive Architecture</h1>
    <span class="subtitle">The Algorithmic Design of Ba-Ila Settlements</span>

    <!-- CONTENT START -->
    <p>
      Modern systems architects use recursion to solve complex problems with simple rules. We often look to Silicon Valley for the history of these concepts, but the Ba-Ila people of Zambia perfected "Infrastructure as Code" centuries ago.
    </p>

    <p>
      They didn't build randomly; they built using a fractal algorithm.
    </p>

    <h2>The "Source Code"</h2>
    <p>
      A fractal is a pattern that repeats itself at different scales. In computer science, we call this recursion—defining a function in terms of itself.
    </p>
    <p>
      If we were to model the Ba-Ila architecture in Python, we wouldn't write a script that places every house individually. We would write a recursive function that defines a single relationship: <strong>The Ring of Rings.</strong>
    </p>

    <!-- PYTHON CODE BLOCK -->
    <pre><code><span class="keyword">import</span> turtle

<span class="keyword">def</span> <span class="function">draw_recursive_ring</span>(t, order, size):
    <span class="string">"""
    Draws a fractal ring pattern.
    Base case: A single house (Order 0).
    Recursive case: A ring of smaller rings.
    """</span>
    <span class="keyword">if</span> order == 0:
        t.circle(size) <span class="string"># Draw the house</span>
    <span class="keyword">else</span>:
        <span class="keyword">for</span> _ <span class="keyword">in</span> range(8): <span class="string"># Repeat pattern around the center</span>
            draw_recursive_ring(t, order-1, size/3)
            t.penup()
            t.forward(size)
            t.left(45)
            t.pendown()</code></pre>

    <h2>The Implementation: A Village of Rings</h2>
    <p>
      The Ba-Ila settlement of the early 20th century (specifically the one mapped in 1937 on the Kafue River) follows this logic across three distinct levels of scale.
    </p>

    <!-- CSS DIAGRAM -->
    <div class="fractal-diagram">
      <!-- Visualizing the recursion -->
      <div class="circle ring-3">
        <div class="circle ring-2">
          <div class="circle ring-1"></div>
        </div>
      </div>
    </div>
    <div class="caption">Fig 1. The Recursion: House (Center) → Enclosure → Village</div>

    <p>
      <strong>1. The Unit (The House)</strong><br>
      A single round hut. It has a specific hierarchy: the entrance is "low status" (public), and the rear is "high status" (the altar).
    </p>

    <p>
      <strong>2. The Cluster (The Family Enclosure)</strong><br>
      A ring of houses. It replicates the hierarchy of the single house. The entrance is for livestock (low status), and the "Great Hut" is at the back (high status).
    </p>

    <p>
      <strong>3. The System (The Settlement)</strong><br>
      A ring of enclosures. The Chief's enclosure sits at the very back of the massive ring, mirroring the position of the altar in a single house.
    </p>

    <h2>Hardware-Software Integration</h2>
    <p>
      This wasn't just aesthetic; it was functional. The fractal structure allowed the settlement to scale infinitely while preserving social order.
    </p>
    <p>
      Whether the village had 50 people or 2,000, the "User Interface" remained consistent. A visitor knowing the layout of a single house instantly knew how to navigate the entire metropolis. The social rules (the software) were encoded directly into the walls (the hardware).
    </p>

    <h2>Why This Matters Today</h2>
    <p>
      As we build distributed systems and AI agents for emerging markets, we face similar constraints: limited resources and a need for high fault tolerance.
    </p>
    <p>
      The Ba-Ila offer a masterclass in <strong>Context-Aware Engineering</strong>. They didn't fight their environment; they built a recursive algorithm that adapted to it. They were the original systems architects.
    </p>

    <br>
    <hr style="border: 0; border-top: 1px solid var(--border);">
    <br>

    <p style="font-size: 13px; color: var(--text-secondary);">
      <em>Adapted in 2025 from <a href="https://medium.com/mitafricans/applied-mathematics-in-pre-colonial-african-settlements-4067ceb048cf" target="_blank" rel="noopener noreferrer">Applied Mathematics in Pre-Colonial African Settlements</a>, originally published by MIT Africans in 2020.</em>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Article'
}
</script>

<style scoped>
/* Article-specific styles can go here if needed */
.article-content {
  max-width: 680px;
  margin: 80px auto;
  padding: 24px;
}
</style>
