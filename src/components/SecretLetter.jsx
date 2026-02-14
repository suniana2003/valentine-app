export default function SecretLetter({ setPage, setUnlocked }) {
  return (
    <div className="letterPage fade">
      <div className="letterPaper">

        <h1 className="letterTitle"> We’re Not Perfect 💌 We’re Real </h1>

        <div className="letterText">
{`Rafiya Sultana ❤️,

If someone asked me to describe us, I wouldn’t call us perfect.
I’d call us real.

Because we do argue sometimes.
We disagree, we get annoyed, we overthink, we say things we don’t fully mean.
There are moments when we see sides of each other that aren’t always easy to love.
Versions that are stubborn, emotional, tired, or simply human.

But what I love most about us is not that we never fight.
It’s that we never stay apart for long.

Somehow, no matter what the disagreement is, we find our way back.
We talk. We understand. We patch things up faster than we even expect ourselves to.
And every time we do, we don’t grow distant — we grow closer.

We learn more about each other with every little conflict.
What hurts you.
What comforts me.
What we both need when things feel overwhelming.
We’re slowly understanding not just the easy versions of each other, but also the complicated ones.
And instead of pushing us away, it’s bringing us closer than before.

That’s what makes this feel strong.
Not perfect — strong.

I know we both dream about the same future.
A simple one, but ours.
A life where we wake up knowing we chose each other and keep choosing each other every day.

Yes, things are getting delayed.
There’s this phase of settling down, figuring things out, building stability, waiting for the right time.
Sometimes it feels slow.
Sometimes it feels like the universe is testing our patience.

But I know this:
The delay doesn’t change the destination.

We’re not moving apart.
We’re moving forward — just at the pace life has decided for us.
And when everything finally falls into place, when the waiting phase is over, where we’re ready and settled into the life we’re building…
I know we’ll look back and realize that all of this was just preparation for something permanent.

We’re going to get there.
We’re going to build our life.
And we’re going to get married — not as some distant dream, but as something that’s already quietly on its way to us.

Until then, we keep doing what we do best.
Laughing. Fighting. Making up.
Learning each other more deeply with time.
Growing together instead of apart.

I don’t love only the easy version of you.
I love the real one — the one who argues, cares, overthinks, supports, gets stubborn, gets soft, and still chooses me at the end of the day.

And I promise, no matter how many little storms we face,
I’ll keep choosing you too.

Always. 

Nasar Ahamed ❤️   
`} 

        </div>

        <button
          className="backBtn"
          onClick={() => {
            setUnlocked(prev => ({ ...prev, letter: true }));
            setPage("home");
          }}
        >
          Back
        </button>

      </div>
    </div>
  );
}
