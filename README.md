# lipqn
Like lipsum, but for equations. Check it out at [aber.io/lipsum](http://aber.io/lipqn/).

I wanted to create a lipsum-style generator for well formed equations, so I used [L-Systems](https://en.wikipedia.org/wiki/L-system) to create a little string replacement system. I'm pretty happy with how it turned out, but I have a couple of ideas for how I'd like it to develop. Here are a couple of those ideas:
- Redesign it to look like a LaTeX article, like in `./prototype`
- Improve the replacement engine so it boosts the likelihood of replacements such as addition and division and reduces the likelihood of logarithms and exponentiations; the randomness isn't so pretty right now
- Allow for user input in some way (probably depth)
- Send equations through a CAS system to reduce them
